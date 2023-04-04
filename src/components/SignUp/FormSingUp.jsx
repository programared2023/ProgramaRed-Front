import { useState } from "react";
import validate from "./validate";
import axios from "axios";

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
            [property]: value
        });

        setErrors(validate({...form, [property]: value}))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("/user", form)
    }

    return(
        <div className=" block mt-14 w-full bg-darkGreen">
            <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
                <h3>Registrarse</h3>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label>Nombre de usuario: </label>
                        <input onChange={changeHandler} placeholder="Escribe tu nombre de usuario..." type="text" name="username" value={form?.username}/>
                        <span>{errors?.username}</span>
                    </div>

                    <div>
                        <label>Email: </label>
                        <input onChange={changeHandler} placeholder="Escribe tu email..." type="text" name="email" value={form?.email}/>
                        <span>{errors?.email}</span>
                    </div>

                    <div>
                        <label>Contraseña: </label>
                        <input onChange={changeHandler} type="password" name="password" value={form?.password}/>
                        <span>{errors?.password}</span>
                    </div>

                    <div>
                        <button>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormSignUp;