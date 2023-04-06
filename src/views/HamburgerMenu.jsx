import { NavLink, useLocation } from "react-router-dom";
import { clearFilters } from "../redux/actions";
import { useDispatch } from "react-redux";

function HamburgerMenu({isOpen, isUserLogged, userId}) {

    const dispatch = useDispatch()
    const {pathname} = useLocation();

  return (
    <>
      {isOpen && (
        <div className="absolute top-0 left-0 z-50 mt-12 origin-top-right bg-mediumGreen rounded-md shadow-lg">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <nav className="px-2 flex flex-col h-5/6 items-start justify-evenly" >
                <NavLink onClick={() => dispatch(clearFilters())} to="/home" className={`py-2 px-4 hover:bg-darkGreen hover:scale-110 flex text-xl gap-3 w-full items-center transition-all rounded-3xl ${pathname === "/home" ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    Home
                </NavLink>
                <NavLink to={`/profile/${userId}`} className={`flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl ${isUserLogged ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Perfil
                </NavLink>
                <NavLink to={`/premium`} className={`flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl ${isUserLogged ? "text-white bg-darkGreen scale-110" : "text-blue-50" }`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hazte Premium
                </NavLink>
                <NavLink onClick={()=>{localStorage.clear()}} to="/" className="text-blue-50 flex py-2 px-4 hover:bg-darkGreen hover:scale-110  text-xl gap-3 w-full items-center transition-all rounded-3xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    Salir
                </NavLink>
            </nav>   
          </div>
        </div>
      )}
    </>
  );
}

export default HamburgerMenu;