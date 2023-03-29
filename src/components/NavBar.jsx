import { NavLink } from "react-router-dom"

const NavBar= ()=>{

    return(
        <>  
            <NavLink to="/home" >Home</NavLink>
            <NavLink to="/profile/:id" >Perfil</NavLink>
            <NavLink to="/" >Cerrar sesión</NavLink>
        </>
    )
}

export default NavBar