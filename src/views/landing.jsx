import Login from "../components/Login";
import { NavLink } from "react-router-dom";

const Landing = () => {
    return(
        <div>
            <h1>Estoy en Landing</h1>
            <Login/>
            <span>Don't have an account? Sign up<NavLink to="/signUp"> here!</NavLink></span>
        </div>

    )
}

export default Landing