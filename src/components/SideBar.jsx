import SearchBar from "./Search/SearchBar";
import Categories from "./Categories/Categories";

const SideBar = ()=>{

    return(
        <div className="relative top-0 bg-mediumGreen flex flex-col gap-5 px-3 shadow-shadowBlack w-5/6 mt-3">
            <div className="relative text-lg bg-transparent text-gray-800 pt-5">
                <SearchBar/>
                <Categories/>
            </div>
            {/* <div className="px-4 py-2 border text-center border-cyan-500 bg-mediumGreen text-sm text-white rounded-lg hover:bg-darkGreen cursor-pointer">
                <p>Tus Favoritos</p>    
            </div>  */}
        </div>
    )
}
//aca va la search bar y los favoritos guardados

export default SideBar;