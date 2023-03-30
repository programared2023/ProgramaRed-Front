import { useState } from "react";
import { validate } from "./validateLogin";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

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
    // await axios.post("/rutadelBack")
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de usuario</label>
          <input
            type="text"
            name="username"
            placeholder="ejemplo@ejemplo.com"
            value={form.username}
            onChange={handleInputs}
          />
          <span>{errors.username}</span>
        </div>

        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleInputs}
          />
          <span>{errors.password}</span>
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
