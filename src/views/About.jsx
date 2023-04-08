import logo from "../images/logo.png";
import lucas from "../images/Lucas.jfif";
import ailing from "../images/Ailging.jpg";
import camilo from "../images/Camilo.jpg";
import pumba from "../images/Pumba.jpg";
import niko from "../images/Niko.jpg";
import sergio from "../images/Sergio.jpg";


const About = () => {
  return (
    <div className=" flex-col flex justify-around items-center bg-slate-500 h-full w-full lg:flex-row ">
      <div>
        <div className="flex flex-col items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="logo"
            className="bg-ligthGreen rounded-full w-24 h-24 p-2 animate-spin-slow"
          />
          <h2 className="text-lg font-bold text-gray-800 mt-4">
            ¿Qué es ProgramaRed?
          </h2>
        </div>
        <div className="max-w-sm">
          <p>
            ProgramaRed es una red social creada para programadores y
            desarrolladores. En nuestra plataforma, puedes encontrar otros
            programadores con intereses similares, colaborar en proyectos,
            compartir conocimientos y mucho más.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img className=" rounded-full w-20 " src={ailing} alt="" />
          <p>Ailin Galante Rosso</p>
          <img className=" rounded-full w-20 " src={pumba} alt="" />
          <p>Franco David Segovia</p>
          <img className=" rounded-full w-20 " src={camilo} alt="" />
          <p>Jeffer Camilo Romero Perez</p>
          <img className=" rounded-full w-20 " src={lucas} alt="" />
          <p>Lucas Palma</p>
          <img className=" rounded-full w-20 " src={niko} alt="" />
          <p>Nicolas Eduardo Juncos</p>
          <img className=" rounded-full w-20 " src={sergio} alt="" />
          <p>Sergio Rodrigo Suarez</p>
          <img className=" rounded-full w-20 " src="" alt="" />
          <p>Thomas Enrique Naquiche Leon</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-800 mt-4">
          Desarrolladores
        </h2>
        <p></p>
      </div>
    </div>
  );
};

export default About;
