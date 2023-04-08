import { useState } from "react";
import { validate } from "./validateLogin";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LoginAuth0 = () => {
  const navigate = useNavigate()
  const { user,loginWithRedirect,loginWithPopup,isAuthenticated  } = useAuth0();

  const getUserByEmail = async () => {
    try {

      let {data} = await axios(`/user?email=${user.email}`)
     
       localStorage.setItem("username", JSON.stringify(data[0].username))
       localStorage.setItem("id", JSON.stringify(data[0].id))
    
    } catch (error) {
      alert(error.message)
    }

  };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     let {data} = await axios(`/user?username=${form.username}`)
  //     console.log(data)
      
  //     if (!data.length) throw new Error("el usuario no existe")
  //     if (data[0].password !== form.password) throw new Error("la contraseña es incorrecta")

  //     localStorage.setItem("username", JSON.stringify(data[0].username))
  //     localStorage.setItem("id", JSON.stringify(data[0].id))
    
  //     navigate("/home")
  //   } catch (error) {
  //     alert(error.message)
  //   }

  // };
  return (
    <div className=" block mt-14 w-full">
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        
      { isAuthenticated ? (
       navigate("/home") 
        
       ) : (
       <button onClick={() => loginWithPopup()}>Login</button>
       )}    

      </div>
    </div>
  );
};

export default LoginAuth0;
