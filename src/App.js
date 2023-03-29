import { Route, Switch } from "react-router-dom"; 
import { Landing, Home, CreatePost, PostDetail, Profile } from "./views/AllViews"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/"><Landing/></Route>
        <Route path="/home"><Home/></Route>
        <Route path="/createPost"><CreatePost/></Route>
        <Route path="/post/:id"><PostDetail/></Route>
        <Route path="/profile/:id"><Profile/></Route>
      </Switch>
    </div>
  );
}

export default App;
