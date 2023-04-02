import { NavLink } from "react-router-dom";
import Posts from "../components/Posts";
import Filters from "../components/Filters";


const Home = () => {

  return (
    <div className="flex justify-start flex-col items-center h-full overflow-hidden w-full">
      <NavLink to="/createPost" className="p-2 m-4 rounded-md bg-gray-400 transition-all duration-500 hover:bg-gray-300 hover:scale-150">Sube un posteo</NavLink>
      <Filters />
      <Posts />
    </div>
  );
};

export default Home;

//filtros combinados

//posts  => ok

//SideBar derecha
//barra busqueda
//favoritos

//navBar izquierda
//links
