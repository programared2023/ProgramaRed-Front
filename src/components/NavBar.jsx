import { NavLink } from "react-router-dom"

const NavBar= ()=>{

    return(
        <div className="bg-green-800 bg-opacity-75 w-1/6 flex flex-col justify-between sticky h-2/3 top-0 px-3 rounded-3xl shadow-shadowBlack min-w-16%">
            <div className="pt-4">
                <div className="px-4 py-2 mb-4">
                    <img className="text-green-400 text-lg font-bold inline-block" src="logo" alt="logo"/>
                </div>
                <nav className="px-2">
                    <NavLink to="/home" className="block text-green-400 py-2 px-4 hover:bg-green-900">Home</NavLink>
                    <NavLink to="/profile" className="block text-green-400 py-2 px-4 hover:bg-green-900">Perfil</NavLink>
                    <NavLink to="/" className="block text-green-400 py-2 px-4 hover:bg-green-900">Salir</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default NavBar