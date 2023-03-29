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
        <Route path="/createPost"><CreatePost/></Route>
        <Route path="/post/:id"><PostDetail/></Route>
        <Route path="/profile/:id"><Profile/></Route>
        <Route path="/signUp"><SignUp/></Route>
      </Routes>
    </>
  );
}

export default App;
