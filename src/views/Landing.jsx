import Login from "../components/Login/Login";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Estoy en Landing</h1>
      <Login />
      <span>
        ¿No tenés una cuenta? <NavLink to="/signUp">¡Registrate acá!</NavLink>
      </span>
    </div>
  );
};

export default Landing;
