import "./dir/tailwind.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import CreatePost from "./views/CreatePost/CreatePost";
import Profile from "./views/Profile";
import SignUp from "./views/SignUp";
import NavBar from "./components/NavBar";
import Payment from "./views/Payment";
import { useEffect, useRef, useState } from "react";
import FalseScreen from "./components/FalseScreen";
import Detail from "./views/Detail";
import About from "./views/About";

function App() {
  const { pathname } = useLocation();

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  const appRef = useRef(null); // Ref para el div contenedor de App

  useEffect(() => {
    function handleResize() {
      const windowHeight = window.innerHeight;
      const contentHeight = appRef.current.scrollHeight;

      if (contentHeight > windowHeight) {
        appRef.current.style.height = "100%";
      } else {
        appRef.current.style.height = "100vh";
      }
    }
    handleResize(); // Llamamos a la función al inicio para ajustar la altura inicialmente

    window.addEventListener("resize", handleResize); // Añadimos el event listener para detectar cambios de tamaño
    return () => {
      window.removeEventListener("resize", handleResize); // Removemos el event listener al desmontar el componente
    };
  }, []);

  return (
    <div ref={appRef} className={`flex flex-col justify-center w-screen bg-veryLigthGreen lg:flex-row`}>
      {pathname !== "/" && pathname !== "/signUp" && pathname !== "/about" && <NavBar />}
      {showDetails && <FalseScreen isView={showDetails} />}
      {showDetails && <Detail toggleDetails={toggleDetails} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home toggleDetails={toggleDetails} />}/>
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/profile/:id" element={<Profile toggleDetails={toggleDetails} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/premium" element={<Payment />} />
      </Routes>
      {/* {pathname !== "/" && <SideBar />} */}
    </div>
  );
}

export default App;
