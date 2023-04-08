import { useState } from "react";
import { validate } from "./validateLogin";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LoginAuth0 = () => {


  const navigate = useNavigate()
  const { user,loginWithRedirect,loginWithPopup,isAuthenticated  } = useAuth0();
    console.log(isAuthenticated)

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
    <div >
      { isAuthenticated ? (
       navigate("/home") 
       ) : (
       <button className='text-white font-semibold py-1 px-2 rounded mt-3 bg-red-500 hover:bg-red-500' 
       onClick={() => loginWithPopup()}>Autenticación con terceros</button>
       )}    
    </div>
  );
};

export default LoginAuth0;
