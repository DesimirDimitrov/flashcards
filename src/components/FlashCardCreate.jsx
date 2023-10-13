import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";

export const FlashCardCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
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
        <Form.Control
          as="textarea"
          rows={6}
          {...register("data", { required: true })}
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
