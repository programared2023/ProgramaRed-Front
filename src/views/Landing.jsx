import Login from "../components/Login";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Estoy en Landing</h1>
      <Login />
      <span>
        ¿No tenés una cuenta? ¡Registrate<NavLink to="/signUp"> acá!</NavLink>
      </span>
    </div>
  );
};

export default Landing;
