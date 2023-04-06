import logo from "../images/logo.png";
import Login from "../components/Login/Login";

const Landing = () => {
  return (
    <div className="flex items-center flex-col animate-appear-top 
                    lg:flex-row lg:h-5/6 lg:justify-center lg:gap-5">
      <div className="bg-green-200  mt-2 mx-3 h-max min-w-3/4 py-3 text-lg flex flex-col gap-4 items-center justify-center rounded-40px shadow-shadowBlack
                     lg:min-w-1/2">
        <div className=" h-full">
          <img
            src={logo}
            alt="logo"
            className="bg-veryLigthGreen rounded-full animate-spin-slow w-full"
          />
        </div>
        <div className=" w-4/5">
          <h1 className="text-3xl font-bold text-green-900 mb-5 text-center">
            Bienvenido a ProgramaRed
          </h1>
        </div>
      </div>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default Landing;
