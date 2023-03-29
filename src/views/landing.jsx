import { NavLink } from "react-router-dom";

const Landing = ()=>{

    return(
        <>
            <p>Bienvenido a ProgramaRed</p>
            <NavLink to="/home">Entrar</NavLink>
            <NavLink to="/signUp">Registrarse</NavLink>
        </>
    )
}

export default Landing;