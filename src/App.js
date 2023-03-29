import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import CreatePost from "./views/CreatePost";
import PostDetail from "./views/PostDetail";
import Profile from "./views/Profile";
import SignUp from "./views/SignUp";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/createPost" element={<CreatePost/>}/>
        <Route path="/post/:id" element={<PostDetail/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
