// import axios from "axios";
import { useState } from "react";
import { validate } from "./createPostValidation";

const CreatePost = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const handleInputs = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...form,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post("/rutadelBack...")
  };

  return (
    <div>
      <h1>Estás creando un post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            onChange={handleInputs}
            type="text"
            name="title"
            placeholder="Agrega un título..."
            value={form.title}
          />
          <span>{errors.title}</span>

          <label>Descripción</label>
          <textarea
            onChange={handleInputs}
            name="description"
            cols="30"
            rows="10"
            placeholder="Agrega una descripción a tu posteo..."
            value={form.description}
          ></textarea>
          <span>{errors.description}</span>

          <label>File</label>
          <input type="file" name="file" />
          
        </div>
        <button type="submit">Subir</button>
      </form>
    </div>
  );
};

export default CreatePost;
