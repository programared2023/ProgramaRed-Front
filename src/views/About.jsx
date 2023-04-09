import logo from "../images/logo.png";
import lucas from "../images/Lucas.jfif";
import ailing from "../images/Ailging.jpg";
import camilo from "../images/Camilo.jpg";
import pumba from "../images/Pumba.jpg";
import niko from "../images/Niko.jpg";
import sergio from "../images/Sergio.jpg";
import thomas from "../images/Thomas.jpg";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className=" flex-col flex justify-between items-center bg-slate-500 h-full w-full lg:flex-row ">
      <div className=" gap-16 ml-14 flex flex-col items-center font-semibold text-white shrink-0">
        <div className=" flex flex-col items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="logo"
            className="bg-ligthGreen rounded-full w-24 h-24 p-2 animate-spin-slow"
          />
          <h2 className="text-lg font-bold mt-4">¿Qué es ProgramaRed?</h2>
        </div>
        <div className=" max-w-sm">
          <p className=" m-7 text-center">
            ProgramaRed es una red social creada específicamente para
            programadores y desarrolladores
          </p>
          <p className=" m-7 text-center">
            En la plataforma podrás encontrar a otros programadores con
            intereses similares a los tuyos, colaborar en proyectos, compartir
            tus conocimientos y aprender de otros colegas
          </p>
          <p className=" m-7 text-center">
            Tendrás tu Perfil, en donde podrás crear tus propios posteos con
            imágenes. Una vista Home en donde verás los posts de los
            programadores a los que sigues, ahí encontrarás un filtro para
            buscar usuarios o posteos de los temas que te interesen. También
            encontrarás una sección para acceder a tu membresía premium, lo que
            te permitirá compartir contenido como videos u otro tipo de archivos
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
      <div>
        <NavLink to="/" >Volver a Landing - poneme estilos Lucas</NavLink>
      </div>
      <div className="gap-16 ml-14 flex flex-col items-center font-semibold text-white shrink-0">
        <div className=" max-w-sm ">
          <h2 className="text-lg font-bold mt-4">Desarrolladores</h2>
          <p className=" m-7 text-center">
            Somos un grupo de programadores juniors, jóvenes, de distintos
            países de Latinoamérica y estudiantes del bootcamp "Full Stack Web
            Developer" de SoyHenry
          </p>
          <p className=" m-7 text-center">
            ProgramaRed es nuestro proyecto final
          </p>
          <p className=" m-7 text-center">
            La el objetivo del proyecto es acercar los a programadores
            latinoamericanos, generando una comunidad en la cual podamos
            interactuar de forma sencilla e intuitiva, razón por la cual
            decidimos encararlo a partir del concepto de "red social"
          </p>
          <p className=" m-7 text-center">
            Creemos que acercar a las personas y compartir el conocimiento es la
            mejor forma de aprender y eso nos ayuda a crecer de una forma más
            rápida en nuestra carrera profesional
          </p>
          <p className=" m-7 text-center">
            Esperamos que nuestra web sea de tu agrado
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
