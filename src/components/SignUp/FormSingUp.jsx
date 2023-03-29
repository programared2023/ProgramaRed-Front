import { useState } from "react";
import validate from "./validate";

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

    return(
        <div>
        <h1>Registrarse</h1>
        <form>
            <div>
                <label>Nombre de usuario: </label>
                <input onChange={changeHandler} placeholder="Escribe tu nombre de usuario..." type="text" name="username" value={form?.username}/>
            </div>

            <div>
                <label>Email: </label>
                <input onChange={changeHandler} placeholder="Escribe tu email..." type="text" name="email" value={form?.email}/>
            </div>

            <div>
                <label>Contraseña: </label>
                <input onChange={changeHandler} type="password" name="password" value={form?.password}/>
            </div>

            <div>
                <button>Enviar</button>
            </div>
        </form>
    </div>
    )
}

export default FormSignUp;