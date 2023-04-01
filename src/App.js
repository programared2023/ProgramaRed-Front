import "./dir/tailwind.css"
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import CreatePost from "./views/CreatePost/CreatePost";
import Detail from "./views/Detail";
import Profile from "./views/Profile";
import SignUp from "./views/SignUp";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  const {pathname} = useLocation();
  
  return (
    <div className="flex justify-between bg-gray-700 h-screen w-screen fixed">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/post/:id" element={<Detail/>} />
        <Route path="/profile/:id" element={<Profile/>} />
        <Route path="/signUp" element={<SignUp/>} />
      </Routes>
      {pathname !== "/" && <SideBar />}
    </div>
  );
}

export default App;
