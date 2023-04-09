import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logoNombre.png";
import { clearFilters } from "../redux/actions";
import { useDispatch, } from "react-redux";
import { useState,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout,user,getAccessTokenSilently} = useAuth0();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [id, setId] = useState('')

    useEffect(() => { 
       async function fetchData() {
       // You can await here
           try{
               if (user) {  
               const token = await getAccessTokenSilently()
                    console.log(token)
                    let response = await axios.get('/usercreate',{
                     headers:{
                        authorization: `Bearer ${token}`
                        }
                    })             
                    console.log(response)
               let {data} = await axios(`/user/email/${user.email}`)
               setId(data[0].id)

               localStorage.setItem("username", JSON.stringify(data[0].username))
               localStorage.setItem("id", JSON.stringify(data[0].id))
               }
            }catch(e){
                console.log(e.message)
            }
        }
     fetchData();
    }, []);

  let userId
  if (!user){
     userId = localStorage.getItem("id");
  }else{
     userId = id; //desde el estado  
  }
  let isUserLogged;

  if (pathname === `/profile/${userId}`) isUserLogged = true;
  else isUserLogged = false;

  const closeMenu = ()=>{
    setIsOpen(false)
  }

  return (
    <>
    <div className="flex items-center justify-between border-b border-gray-400 lg:flex-col lg:border-0">
      <div className="inline-flex h-24 px-5 shrink-0 lg:hidden">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <section className="MOBILE-MENU flex px-7 lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>

          <div className={isOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] bg-mediumGreen">
                <NavLink onClick={() =>{ 
                    dispatch(clearFilters())
                    closeMenu()
                    }} to="/home" className={`py-2 px-4 hover:bg-darkGreen hover:scale-110 flex text-xl gap-3 w-full items-center transition-all rounded-3xl ${pathname === "/home" ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home
                </NavLink>
                <NavLink onClick={()=>{closeMenu()}} to={`/profile/${userId}`} className={`flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl ${isUserLogged ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Perfil
                </NavLink>
                <NavLink onClick={()=>{closeMenu()}} to={`/premium`} className={`flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl ${isUserLogged ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hazte Premium
                </NavLink>
                <NavLink onClick={()=>{
                    logout()
                    localStorage.clear()
                    closeMenu()
                    }} to="/" className="text-blue-50 flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    Salir
                </NavLink>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
          .hideMenuNav {
            display: none;
          }
          .showMenuNav {
            display: block;
            position: absolute;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            background: #5f8d4e;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
          }
        `}</style>
    </div>
    <section className="DESKTOP-MENU hidden space-x-8 lg:inline-flex">
    <div className="z-40 bg-mediumGreen shadow-shadowRigth">
        <div className="flex flex-col z-40">
            <div className="absolute min-w-full lg:relative lg:min-w-20%">
                <nav className={`${isOpen ? "w-screen bg-mediumGreen" : ""}`}>
                    <button className={`w-14 h-14 relative focus:outline-none flex items-center justify-center ${!isOpen ? "" : "text-red-800"} lg:hidden`} onClick={() => setIsOpen(!isOpen)}>
                        {
                            !isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )
                        }
                    </button>
                    <div className={`bg-mediumGreen flex flex-col w-full justify-between px-10 pb-3 rounded-sm z-40 lg:min-w-20%`}>
                        <div className="pt-4">
                            <div className="px-4 py-2 mb-4 w-full flex justify-center rounded-40px bg-veryLigthGreen bg-opacity-50 shadow-shadowBoxOutline">
                                <img className="text-green-400 text-lg font-bold inline-block" src={logo} alt="logo"/>
                            </div>
                            <nav className="px-2 flex flex-col h-5/6 items-start justify-evenly mt-3" >
                                <NavLink onClick={() =>{ 
                                    dispatch(clearFilters())
                                    closeMenu()
                                    }} to="/home" className={` my-3 py-2 px-4 hover:bg-darkGreen hover:scale-110 flex text-xl gap-3 w-full items-center transition-all rounded-3xl ${pathname === "/home" ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    Home
                                </NavLink>
                                <NavLink onClick={()=>{closeMenu()}} to={`/profile/${userId}`} className={`my-3 flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl ${isUserLogged ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                    Perfil
                                </NavLink>
                                <NavLink onClick={()=>{closeMenu()}} to={`/premium`} className={`my-3 flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl ${isUserLogged ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Hazte Premium
                                </NavLink>
                                <NavLink onClick={()=>{
                                    logout()
                                    localStorage.clear()
                                    closeMenu()

                                    }} to="/" className="my-3 text-blue-50 flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                    </svg>
                                    Salir
                                </NavLink>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </section>
    </>
  );
};

export default NavBar;