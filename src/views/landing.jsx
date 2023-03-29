import { NavLink } from "react-router-dom";

const Landing = ()=>{

    return(
        <>
            <p>Bienvenido a ProgramaRed</p>
            <NavLink to="/home">Entrar</NavLink>
        </>
    )
}

export default Landing;