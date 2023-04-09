import { useState } from "react";
import { validate } from "./validateLogin";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const LoginAuth0 = () => {


  const navigate = useNavigate()
  const { user,loginWithRedirect,loginWithPopup,isAuthenticated  } = useAuth0();
  console.log(isAuthenticated)

  
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
       <div className="flex ">
        <div> 
          <button className='text-white font-semibold py-1 px-2  mt-3 bg-red-500 hover:bg-red-300' 
           onClick={() => loginWithPopup()}>
           <svg class="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M17.788 5.108A9 9 0 1021 12h-8" />
           </svg>
          </button>
        </div>
        <div>
          <button className='text-white font-semibold py-1 px-2  mt-3 bg-red-500 hover:bg-red-300' 
          onClick={() => loginWithPopup()}>
           <svg class="h-8 w-8 "  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
           </svg>
          </button>
        </div>
       </div>
       )}    
    </div>
  );
};

export default LoginAuth0;
