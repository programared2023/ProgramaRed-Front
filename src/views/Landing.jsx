import logo from "../images/logo.png"
import { NavLink } from "react-router-dom";
import Login from "../components/Login/Login";

const Landing = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-green-200 h-max w-1/2 flex flex-col gap-4 items-center justify-center p-36 animate-appear-top rounded-40px">
        <div className=" h-full">
          <img src={logo} alt="logo" className="bg-veryLigthGreen rounded-full animate-spin-slow" />
        </div>
        <h1 className="text-3xl font-bold text-green-900 mb-8 text-center">Bienvenido a ProgramaRed</h1>
        <NavLink to="/home" className="bg-ligthGreen text-black transition-all duration-300 hover:bg-darkGreen hover:text-white font-bold py-2 px-4 rounded-lg">Home</NavLink>
        {/* <span className="mt-8 text-lg text-black">
          ¿No tenés una cuenta? ¡Registrate <NavLink to="/signUp" className="underline">acá!</NavLink>
        </span> */}
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default Landing;
