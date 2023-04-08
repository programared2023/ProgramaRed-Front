import { useState } from "react";
import validate from "./validate";
import { useDispatch } from "react-redux";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const FormSignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setForm({
      ...form,
      [property]: value,
    });

    setErrors(validate({ ...form, [property]: value }));
  };

  const clearForm = () => {
    setForm({
      username: "",
      email: "",
      password: "",
    });
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const info = await axios.post("/user", form);
      alert(info.data);
      clearForm();
      navigate("/");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className=" block mt-14 w-full ">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h3>Registrarse</h3>
        <p>Ya tienes una cuenta logeate <NavLink to="/">aquí</NavLink></p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre de usuario: </label>
            <input
              onChange={changeHandler}
              placeholder="Escribe tu nombre de usuario..."
              type="text"
              name="username"
              value={form?.username}
            />
            <span>{errors?.username}</span>
          </div>

          <div>
            <label>Email: </label>
            <input
              onChange={changeHandler}
              placeholder="Escribe tu email..."
              type="text"
              name="email"
              value={form?.email}
            />
            <span>{errors?.email}</span>
          </div>

          <div>
            <label>Contraseña: </label>
            <input
              onChange={changeHandler}
              type="password"
              name="password"
              value={form?.password}
            />
            <span>{errors?.password}</span>
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
