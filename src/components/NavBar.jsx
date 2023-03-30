import { NavLink } from "react-router-dom"

const NavBar= ()=>{

    return(
        <div className= "w-1/4 flex flex-col items-center justify-evenly h-60 m-15 self-center bg-antique-50" >  
            <NavLink to="/home" className="rounded-md shadow-xs bg-blue-800 py-2 px-4 text-white" >Home</NavLink>
            <NavLink to="/profile/:id" className="rounded-md shadow-xs bg-blue-800 py-2 px-4 text-white" >Perfil</NavLink>
            <NavLink to="/" className="rounded-md shadow-xs bg-blue-800 py-2 px-4 text-white" >Cerrar sesión</NavLink>
        </div>
    )
}

export default NavBar