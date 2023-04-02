import { useEffect, useState } from "react";
import { validate } from "./createPostValidation";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getUserById } from "../../redux/actions";

const CreatePost = () => {
  const user = useSelector((state) => state.actualUser);
  console.log(user);

  const [form, setForm] = useState({
    title: "",
    tags: [],
    actualTag: "",
    description: "",
    userId: user.id,
  });

  const [errors, setErrors] = useState({
    title: "",
    tags: [],
    actualTag: "",
    description: "",
  });

  const [tag, setTag] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(1));
  }, [dispatch]);

  useEffect(() => {
    const checkFormComplete = () => {
      if (
        !form.title ||
        !form.actualTag ||
        !form.description ||
        !form.userId ||
        !form.tags.length
      ) {
        setFormComplete(false);
      } else {
        setFormComplete(true);
      }
    };
    checkFormComplete();
  }, [form]);

  const [formComplete, setFormComplete] = useState(false);

  console.log(formComplete);

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

  const addTag = () => {
    if (!form.tags.includes(tag)) {
      setForm({
        ...form,
        tags: [...form.tags, tag],
      });
    }
    setTag("");
  };

  const handeTagDelete = (tag) => {
    setForm({
      ...form,
      tags: form.tags.filter((t) => t !== tag),
    });
  };

  const clearForm = () => {
    setForm({
      title: "",
      tags: [],
      actualTag: "",
      description: "",
      userId: user.id,
    });
    setTag("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formComplete === true) dispatch(createPost(form));

    clearForm();
  };

  return (
    <div className=" block mt-14 w-full">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold text-green-700 mb-6">
          Estás creando un post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Título
            </label>
            <input
              onChange={handleInputs}
              type="text"
              name="title"
              placeholder="Agrega un título..."
              value={form.title}
              className={`border-gray-300 block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out ${
                errors.title
                  ? "focus:border-red-500 focus:ring-red-500"
                  : "focus:ring-green-500 focus:border-green-500"
              }
              `}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Tags
            </label>
            <div className=" flex gap-1">
              <input
                id="inputTag"
                type="text"
                name="tags"
                placeholder="ejemplo: Javascript y/o React"
                onChange={(e) => {
                  setTag(e.target.value);
                  setForm({
                    ...form,
                    actualTag: e.target.value,
                  });
                  setErrors(
                    validate({
                      ...form,
                      actualTag: e.target.value,
                    })
                  );
                }}
                value={tag}
                className={`border-gray-300 block w-full px-2 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out 
                ${
                  errors.tags?.length || errors.actualTag
                    ? "focus:border-red-500 focus:ring-red-500"
                    : "focus:ring-green-500 focus:border-green-500"
                }`}
              />
              <button
                type="button"
                disabled={!!errors.actualTag}
                onClick={addTag}
                className={`${
                  errors.tags?.length || errors.actualTag
                    ? "bg-red-500 hover:bg-red-500"
                    : "bg-green-500 hover:bg-green-600"
                } text-white font-semibold py-1 px-2 rounded`}
              >
                Agregar
              </button>
            </div>
            {errors.tags && errors.actualTag && (
              <span className="text-red-500 text-sm">{errors.actualTag}</span>
            )}
            {!errors.tags && errors.actualTag && (
              <span className="text-red-500 text-sm">{errors.actualTag}</span>
            )}
            {errors.tags && !errors.actualTag && (
              <span className="text-red-500 text-sm">{errors.tags}</span>
            )}
          </div>

          <div className="flex gap-3 w-full flex-wrap">
            {form.tags.map((tag, i) => (
              <div
                className="bg-green-500 px-2 py-1 rounded-md flex items-center justify-between font-medium"
                key={i}
              >
                <span className="mr-2">{tag}</span>
                <span
                  className="cursor-pointer text-red-800 hover:bg-green-600 px-1 rounded"
                  onClick={() => handeTagDelete(tag)}
                >
                  X
                </span>
              </div>
            ))}
          </div>

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
              className={`border-gray-300 block w-full rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-150 ease-in-out ${
                errors.description
                  ? "focus:border-red-500 focus:ring-red-500"
                  : "focus:ring-green-500 focus:border-green-500"
              }
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
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={formComplete}
              className={`${
                errors.description ||
                errors.title ||
                errors.tags ||
                errors.actualTag
                  ? "bg-red-500 hover:bg-red-500 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              } text-white font-bold py-2 px-4 rounded`}
            >
              Subir
            </button>
            <button
              className=" text-gray-900 font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-400"
              type="button"
              onClick={clearForm}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
