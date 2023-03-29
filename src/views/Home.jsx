import { NavLink } from "react-router-dom";
import Posts from "../components/Posts";


const Home = () => {
  return (
    <div className="w-1/2 flex justify-start flex-col items-center bg-indigo-400">
      <NavLink to="/createPost">Sube un posteo</NavLink>
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
