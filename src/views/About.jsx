import logo from "../images/logo.png";
import lucas from "../images/Lucas.jfif";
import ailing from "../images/Ailging.jpg";
import camilo from "../images/Camilo.jpg";
import pumba from "../images/Pumba.jpg";
import niko from "../images/Niko.jpg";
import sergio from "../images/Sergio.jpg";
import thomas from "../images/Thomas.jpg";

const About = () => {
  return (
    <div className=" flex-col flex justify-between items-center bg-slate-500 h-full w-full lg:flex-row ">
      <div className=" ml-14">
        <div className=" flex flex-col items-center mb-4 md:mb-0">
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
        <div className=" flex flex-col items-center font-semibold text-white shrink-0 ">
          <div className="flex gap-2 ">
            <div className=" w-44 flex flex-col items-center justify-center">
              <img className=" rounded-full w-20 " src={ailing} alt="" />
              <p className=" text-center">Ailin Galante Rosso</p>
            </div>
            <div className=" w-44 flex flex-col items-center justify-center">
              <img className=" rounded-full w-20 " src={pumba} alt="" />
              <p className=" text-center">Franco David Segovia</p>
            </div>
            <div className=" w-44 flex flex-col items-center justify-center">
              <img className=" rounded-full w-20 " src={camilo} alt="" />
              <p className=" text-center">Jeffer Camilo Romero Perez</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className=" w-44 flex flex-col items-center justify-center">
              <img className=" rounded-full w-20 " src={lucas} alt="" />
              <p className=" text-center">Lucas Palma</p>
            </div>
            <div className=" w-44 flex flex-col items-center justify-center">
              <img className=" rounded-full w-20 " src={niko} alt="" />
              <p className=" text-center">Nicolas Eduardo Juncos</p>
            </div>
            <div className=" w-44 flex flex-col items-center justify-center">
              <img className=" rounded-full w-20 " src={sergio} alt="" />
              <p className=" text-center">Sergio Rodrigo Suarez</p>
            </div>
            <div className=" w-44 flex flex-col items-center justify-center">
              <img className=" rounded-full w-20 " src={thomas} alt="" />
              <p className=" text-center">Thomas Enrique Naquiche Leon</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-14">
        <h2 className=" text-lg font-bold text-gray-800 mt-4">
          Desarrolladores
        </h2>
        <p>
            ProgramaRed es una red social creada para programadores y
            desarrolladores. En nuestra plataforma, puedes encontrar otros
            programadores con intereses similares, colaborar en proyectos,
            compartir conocimientos y mucho más.
          </p>
      </div>
    </div>
  );
};

export default About;
