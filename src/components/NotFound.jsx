import { NavLink } from "react-router-dom";
import notFound from "../images/NotFoundGif.gif"

const NotFound = () => {

    const id = localStorage.getItem("id");

  return (
    <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
      <img src={notFound} alt="" />
      {
        !id ? 
        <NavLink to="/" >Volver</NavLink>
        :
        <NavLink to="/home" >Volver</NavLink>
      }
    </div>
  );
};

export default NotFound;
