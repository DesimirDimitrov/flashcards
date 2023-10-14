import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./../config/supabaseClient";

export const FlashCardCreate = () => {
  const { categoryId, topicId } = useParams();
  const user = JSON.parse(localStorage.getItem("user"));
  const editorRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (info) => {
    const dbData = {
      name: info.title,
      data: editorRef.current.getContent(),
      user_id: user.id,
      category_id: info.categoryId,
      topic_id: info.topicId,
      type: 1,
    };

    try {
      await supabase.from("fl_cards").insert([dbData]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="m-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" {...register("title")} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="data">
        <Form.Label>Data</Form.Label>
        <Editor
          apiKey={import.meta.env.VITE_TINY_API_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </Form.Group>
      <input
        hidden
        type="text"
        value={categoryId}
        {...register("categoryId")}
      />
      <input hidden type="text" value={topicId} {...register("topicId")} />
      <input hidden type="text" value={user.id} {...register("user_id")} />
      <input type="submit" />
    </Form>
  );
};
