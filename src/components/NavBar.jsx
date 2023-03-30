import { NavLink } from "react-router-dom"

const NavBar= ()=>{

    return(
        <div className="bg-green-800 w-1/6 flex flex-col justify-between sticky h-2/3 top-0 px-3" >
            <div className="pt-4">
            <div className="px-4 py-2 mb-4">
                <img className="text-green-400 text-lg font-bold inline-block" src="logo" alt="logo"/>
            </div>
            <nav className="px-2">
                <NavLink to="/home" className="block text-green-400 py-2 px-4 hover:bg-green-900">Home</NavLink>
                <NavLink to="/profile/:id" className="block text-green-400 py-2 px-4 hover:bg-green-900">Perfil</NavLink>
                <NavLink to="/" className="block text-green-400 py-2 px-4 hover:bg-green-900">Salir</NavLink>
            </nav>
            </div>
            <div className="pb-4">
            <div className="px-4 mb-4">
                <label for="search" className="sr-only">Buscar</label>
                <input type="text" id="search" placeholder="Buscar" className="bg-green-700 border-2 border-green-600 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-green-400"/>
            </div>
            <div className="px-4 py-2 bg-green-700 text-sm text-green-400 rounded-lg hover:bg-green-600 cursor-pointer">Post Favoritos</div>
            </div>
        </div>
    )
}

export default NavBar