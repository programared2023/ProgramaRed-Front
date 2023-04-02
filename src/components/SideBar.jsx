import SearchBar from "./SearchBar";

const SideBar = ()=>{

    return(
        <div className=" bg-mediumGreen w-1/6 h-full flex flex-col gap-5 px-3 shadow-shadowBlack min-w-20%">
            <div className="relative text-lg bg-transparent text-gray-800 pt-5">
                <SearchBar/>
            </div>
            {/* <div className="px-4 py-2 border text-center border-cyan-500 bg-mediumGreen text-sm text-white rounded-lg hover:bg-darkGreen cursor-pointer">
                <p>Tus Favoritos</p>    
            </div>  */}
        </div>
    )
}
//aca va la search bar y los favoritos guardados

export default SideBar;