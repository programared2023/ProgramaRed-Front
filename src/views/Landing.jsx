import React from "react";
import logo from "../images/logo.png";
import Login from "../components/Login/Login"
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center bg-slate-500 h-full w-full">
      {/* Hero Section */}
      <div className="w-full bg-center bg-cover">
        <div className="flex items-center justify-center h-full text-center">
          <div className="text-white p-2 ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ProgramaRed
            </h1>
          <h2 className="text-4xl font-bold mb-4">
             ¡Conecta con otros programadores!
          </h2>
            <p className="text-lg md:text-xl">
              Comparte conocimientos, colabora en proyectos y mucho más.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl w-full my-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <img
              src={logo}
              alt="logo"
              className="bg-ligthGreen rounded-full w-24 h-24 p-2 animate-spin-slow"
            />
            <NavLink to="/about" >
              <h2 className="text-lg font-bold px-5 py-3 text-gray-800 mt-4 hover:text-white hover:bg-slate-900 rounded-md p-1 ">¿Qué es ProgramaRed?</h2>
            </NavLink>
          </div>
        </div>

        {/* Login Section */}
        <div className="max-w-sm w-full mx-auto">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Landing;