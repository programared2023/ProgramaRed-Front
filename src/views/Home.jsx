import { NavLink } from "react-router-dom";
import Posts from "../components/Posts";
import Filters from "../components/Filters";


const Home = () => {

  return (
    <div className="flex justify-start flex-col items-center h-full overflow-hidden w-full">
      <NavLink to="/createPost" className="p-2 m-4 font-medium rounded-md bg-ligthGreen transition-all duration-500 hover:bg-mediumGreen hover:scale-130">Sube un posteo</NavLink>
      <Filters />
      <div className="h-full overflow-hidden py-4">
        <div className="h-full overflow-y-auto scrollbar-none">
        <Posts />
        </div>
      </div>
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
