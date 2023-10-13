import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export const FlashCardCreate = () => {
  const editorRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.data = editorRef.current.getContent();
    console.log(data);
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
          initialValue="<p>This is the initial content of the editor.</p>"
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
      <Form.Group className="mb-3" controlId="topicId">
        <Form.Select size="sm" {...register("category", { required: true })}>
          <option value="1">React</option>
          <option value="2">PHP</option>
        </Form.Select>
      </Form.Group>
      <input hidden type="text" value={1} {...register("topic")} />
      <input type="submit" />
    </Form>
  );
};
