import { NavLink } from "react-router-dom"

const NavBar= ()=>{

    return(
        <div className="bg-green-600 bg-opacity-40 w-1/4 flex flex-col items-center justify-evenly h-full" >  
            <NavLink to="/home" className="rounded-md shadow-xs bg-blue-800 py-1 px-2" >Home</NavLink>
            <NavLink to="/profile/:id" className="rounded-md shadow-xs bg-blue-800 py-1 px-2" >Perfil</NavLink>
            <NavLink to="/" className="rounded-md shadow-xs bg-blue-800 py-1 px-2" >Cerrar sesión</NavLink>
        </div>
    )
}

export default NavBar