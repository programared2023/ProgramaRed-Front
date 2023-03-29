import Posts from "../components/Posts"
import CreatePost from "./CreatePost"

const Home= ()=>{

    return(
        <div className="w-1/2 flex justify-start flex-col items-center bg-indigo-400">
            <CreatePost/>
            <Posts />
        </div>
    )
}

export default Home

//filtros combinados

//posts  => ok

//SideBar derecha 
    //barra busqueda
    //favoritos

//navBar izquierda
    //links