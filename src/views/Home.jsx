import { NavLink } from "react-router-dom";
import Posts from "../components/Posts";


const Home = () => {
  return (
    <div className="w-1/2 flex justify-start flex-col items-center h-screen">
      <NavLink to="/createPost" className="p-2 m-4 rounded-md bg-gray-400 transition-all duration-500 hover:bg-gray-300 hover:scale-150">Sube un posteo</NavLink>
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
