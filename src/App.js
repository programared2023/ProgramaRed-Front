import "./dir/tailwind.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import CreatePost from "./views/CreatePost/CreatePost";
import Profile from "./views/Profile";
import SignUp from "./views/SignUp";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Payment from "./views/Payment";
import { useState } from "react";
import FalseScreen from "./components/FalseScreen";
import Detail from "./views/Detail";

function App() {
  const { pathname } = useLocation();

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="bg-veryLigthGreen m-0 p-0 h-screen">
      {pathname !== "/" && <NavBar />}
      {showDetails && <FalseScreen isView={showDetails} />}
      {showDetails && <Detail toggleDetails={toggleDetails} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home toggleDetails={toggleDetails} />}/>
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/profile/:id" element={<Profile toggleDetails={toggleDetails} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/premium" element={<Payment />} />
      </Routes>
      {pathname !== "/" && <SideBar />}
    </div>
  );
}

export default App;
