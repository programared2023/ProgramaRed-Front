import { useState } from "react";
import { validate } from "./validateLogin";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: ""
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
    try {
      e.preventDefault();
      let {data} = await axios(`/user?username=${form.username}`)
      console.log(data)
      
      if (!data.length) throw new Error("el usuario no existe")
      if (data[0].password !== form.password) throw new Error("la contraseña es incorrecta")

      localStorage.setItem("username", JSON.stringify(data[0].username))
      localStorage.setItem("id", JSON.stringify(data[0].id))
    
      navigate("/home")
    } catch (error) {
      alert(error.message)
    }

  };

  return (
    <div className=" block mt-14 w-full">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <div className="pb-4" >
          <h2 className="text-xl font-bold text-green-700 text-center pb-2">
            Inicia cesion con tu cuenta 
          </h2>
          <p className=" text-center text-xs" >No tienes una cuenta? Regístrate <NavLink className="text-blue-500">aquí</NavLink></p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" 
                  className="block text-sm font-medium text-gray-700 mb-1" 
                  >Nombre de usuario
            </label>
            <input
              type="text"
              name="username"
              placeholder="Tu nombre de usuario"
              value={form.username}
              onChange={handleInputs}
              className={`border-gray-300 block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out ${
                errors.username
                  ? "focus:border-red-500 focus:ring-red-500"
                  : "focus:ring-green-500 focus:border-green-500"
              }
              `}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username}</span>
            )}
          </div>

          <div>
            <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
                >Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleInputs}
              className={`border-gray-300 block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out ${
                errors.password
                  ? "focus:border-red-500 focus:ring-red-500"
                  : "focus:ring-green-500 focus:border-green-500"
              }
              `}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          <button type="submit"
                  className={`text-white font-semibold py-1 px-2 rounded mt-3
                  ${errors.password || errors.username ? "bg-red-500 hover:bg-red-500" : "bg-green-500 hover:bg-green-600"}`}
                >
                Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
