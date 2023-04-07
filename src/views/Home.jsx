import { NavLink } from "react-router-dom";
import Posts from "../components/Posts";
import Filters from "../components/Filters/Filters";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../redux/actions";
import { useEffect } from "react";
import SideBar from "../components/SideBar";

const Home = ({ toggleDetails}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      <div className="flex justify-start flex-col items-center h-full overflow-hidden w-full relative">
        <SideBar />
        <NavLink
          to="/createPost"
          className="p-2 m-4 font-medium rounded-md bg-ligthGreen transition-all duration-500 hover:bg-mediumGreen hover:scale-130"
        >
          Sube un posteo
        </NavLink>
        {/* <Filters /> */}

        <div className="h-full w-full overflow-hidden py-3">
          <div className=" h-screen overflow-y-auto scrollbar-none">
            <Posts toggleDetails={toggleDetails}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
