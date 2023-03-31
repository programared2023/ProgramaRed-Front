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
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full max-w-5xl mx-auto px-4 py-8 items-center justify-evenly">
        <div className="md:w-1/5 flex justify-center">
          <img
            src="https://source.unsplash.com/random/500x500"
            alt="ProfilePhoto"
            className="rounded-full h-40 w-40 object-cover object-center border-4 border-green-500"
          />
        </div>

        <div className="md:w-2/5">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold text-white">{user.username}</h1>
            <p className="text-lg text-green-700">{user.email}</p>
          </div>

          <NavLink
            to= "/createPost/"
            className="p-2 m-4 rounded-md bg-gray-400 transition-all duration-500 hover:bg-gray-300 hover:scale-150"
          >
            Sube un posteo
          </NavLink>
        </div>
      </div>

      <div className="mt-8 p-9">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-white mb-4">
              {user.Posts ? "Publicaciones" : "No Tienes publicaciones"}
            </h2>
            <div className="space-y-4 h-3/4 overflow-y-auto">
              {user.Posts?.map((post, i) => {
                return <Post post={post} key={i} />;
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