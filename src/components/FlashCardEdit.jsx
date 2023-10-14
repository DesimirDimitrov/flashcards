import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "./../config/supabaseClient";

export const FlashCardEdit = () => {
  const { cardId } = useParams();
  const [formData, setFormData] = useState({}); //[formData, setFormData
  const editorRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getCard(cardId);
  }, [cardId]);

  async function getCard(cardId) {
    const { data } = await supabase.from("fl_cards").select().eq("id", cardId);
    setFormData(data[0]);
    setTimeout(() => {
      editorRef.current.setContent(data[0].data);
    }, 1500);
  }

  const onSubmit = async (info) => {
    const dbData = {
      name: info.title,
      data: editorRef.current.getContent(),
    };

    try {
      await supabase.from("fl_cards").update([dbData]).eq("id", cardId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form className="m-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          defaultValue={formData.name}
          type="text"
          {...register("title")}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="data">
        <Form.Label>Data</Form.Label>
        <Editor
          apiKey={import.meta.env.VITE_TINY_API_KEY}
          onInit={(evt, editor) => (editorRef.current = editor)}
          init={{
            height: 500,
            menubar: false,
            plugins: [],
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
      <button type="submit">Update</button>
    </Form>
  );
};
