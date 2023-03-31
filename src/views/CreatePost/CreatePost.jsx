import axios from "axios";
import { useEffect, useState } from "react";
import { validate } from "./createPostValidation";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../redux/actions";

const CreatePost = () => {

  const user = useSelector(state => state.actualUser)

  const [form, setForm] = useState({
    title: "",
    description: "",
    userId: user.id,
  }); 

  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserById(1))    
  },[user])

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
    console.log(form);
    await axios.post("/post", form)
  };

  return (
    <div className=" block mt-28 w-full">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold text-green-700 mb-6">Estás creando un post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Título
            </label>
            <input
              onChange={handleInputs}
              type="text"
              name="title"
              placeholder="Agrega un título..."
              value={form.title}
              className={`border-gray-300 block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out ${errors.title ? "focus:border-red-500 focus:ring-red-500" : "focus:ring-green-500 focus:border-green-500"}
              `}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
          </div>
          {/* aca puede ir los tags para el posteo (mas adelante) */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción
            </label>
            <textarea
              onChange={handleInputs}
              name="description"
              cols="30"
              rows="10"
              placeholder="Agrega una descripción a tu posteo..."
              value={form.description}
              className={`border-gray-300 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out ${errors.description ? "focus:border-red-500 focus:ring-red-500" : "focus:ring-green-500 focus:border-green-500"}
              `}
            ></textarea>
            {errors.description && (
              <span className="text-red-500 text-sm">{errors.description}</span>
            )}
          </div>
          {/* <div> //comente el archivo porque no lo vamos a usar por ahora
            <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
              File
            </label>
            <input type="file" name="file" className="border-gray-300 focus:ring-green-500 focus:border-green-500 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out" />
          </div> */}
          <button type="submit" className={`${errors.description || errors.title ? "bg-red-500 hover:bg-red-500 " : "bg-green-500 hover:bg-green-600" } text-white font-bold py-2 px-4 rounded`}>
            Subir
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
