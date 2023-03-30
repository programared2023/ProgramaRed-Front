const SideBar = ()=>{

    return(
        <div className="bg-green-800 bg-opacity-75 w-1/6 h-full flex flex-col justify-between px-3 rounded-3xl">
            <div className="pt-4">
                <div className="px-4 mb-4">
                    <label for="search" className="sr-only">Buscar</label>
                    <input type="text" id="search" placeholder="Buscar" className="bg-green-700 border-2 border-green-600 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-green-400"/>
                </div>
                <div className="px-4 py-2 bg-green-700 text-sm text-green-400 rounded-lg hover:bg-green-600 cursor-pointer">Post Favoritos</div>
            </div>
    </div>
    )
}
//aca va la search bar y los favoritos guardados

export default SideBar;