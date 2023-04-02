import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { clearDetail, getUserById } from "../redux/actions";
import Post from "../components/Post";

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.actualUser);

  
  useEffect(() => {
    dispatch(getUserById(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full max-w-5xl mx-auto px-4 py-8 items-center justify-evenly">
        <div className=" w-1/5 flex justify-center">
          <img
            src="https://source.unsplash.com/random/500x500"
            alt="ProfilePhoto"
            className="rounded-full w-full object-cover object-center border-2 border-green-500"
          />
        </div>

        <div className="md:w-2/5">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold ">{user.username}</h1>
            <p className="text-lg text-green-700 font-medium">{user.email}</p>
          </div>
        </div>
      </div>
      <NavLink to="/createPost" 
              className="p-2 m-4 self-center font-medium rounded-md bg-ligthGreen transition-all duration-500 hover:bg-mediumGreen hover:scale-130">
        Sube un posteo
      </NavLink>
      <div className="mt-8 p-9 overflow-hidden h-full">
        {user ? (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {user.Posts ? "Publicaciones" : "No Tienes publicaciones"}
            </h2>
            <div className="space-y-4 h-full py-5 overflow-y-auto scrollbar-thin scrollbar-track-transparent">
              {user.Posts?.map((post, i) => {
                //al post le paso username porque en este caso "post" no posee datos de username
                return <Post post={post} username={user.username} key={i} />;
              })}
            </div>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>    
  )
};

export default Profile;