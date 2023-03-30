import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="bg-green-100 min-h-screen flex flex-col items-center justify-center p-36">
        <h1 className="text-3xl font-bold text-green-900 mb-8">Bienvenido a ProgramaRed</h1>
        <NavLink to="/home" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Home</NavLink>
        <span className="mt-8 text-lg text-black">
          ¿No tenés una cuenta? ¡Registrate <NavLink to="/signUp" className="underline">acá!</NavLink>
        </span>
      </div>
    </div>
  );
};

export default Landing;
