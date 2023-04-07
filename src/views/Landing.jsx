import React from "react";
import logo from "../images/logo.png";
import Login from "../components/Login/Login"

const Landing = () => {
  return (
    <div className="flex flex-col items-center bg-slate-500 h-full md:h-screen">
      {/* Hero Section */}
      <div className="w-full bg-center bg-cover">
        <div className="flex items-center justify-center h-full text-center">
          <div className="text-white p-2 ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ¡Conecta con otros programadores en ProgramaRed!
            </h1>
            <p className="text-lg md:text-xl">
              Comparte conocimientos, colabora en proyectos y mucho más.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl w-full my-12 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <img
              src={logo}
              alt="logo"
              className="bg-ligthGreen rounded-full w-24 h-24 p-2 animate-spin-slow"
            />
            <h2 className="text-lg font-bold text-gray-800 mt-4">¿Qué es ProgramaRed?</h2>
          </div>
          <div className="max-w-sm">
            <p className="text-gray-300 leading-relaxed">
              ProgramaRed es una red social creada para programadores y
              desarrolladores. En nuestra plataforma, puedes encontrar otros
              programadores con intereses similares, colaborar en proyectos,
              compartir conocimientos y mucho más.
            </p>
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