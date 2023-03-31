import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Posts from "../components/Posts";
import { getUserByName, clearDetail, getUserById } from "../redux/actions";
import Post from "../components/Post";

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.detailUser);

  useEffect(() => {
    dispatch(getUserById(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

  return (
    <div>
      <h1>Este es el perfil de un usuario</h1>
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
      <img src={user.image} alt="profile-img" />

      {
        user.Posts?.map((post, i) => {
          return (
            <div key={i}>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          )
        })
      }

      <NavLink to="/createPost">Sube un posteo</NavLink>
    </div>

    /*
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full max-w-5xl mx-auto px-4 py-8 items-center justify-evenly">
        <div className="md:w-1/5 flex justify-center">
          <img src="https://source.unsplash.com/random/500x500" alt="ProfilePhoto" className="rounded-full h-40 w-40 object-cover object-center border-4 border-green-500"/>
        </div>

     
        <div className="md:w-2/5">
  
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold text-white">{user.username}</h1>
            <p className="text-lg text-green-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, neque in consectetur elementum, justo purus facilisis arcu, vel efficitur massa lacus a orci. Morbi malesuada sit amet felis quis elementum.</p>
          </div>

        </div>
      </div>
  
      <div className="mt-8 p-9">
      <h2 className="text-2xl font-bold text-white mb-4">Publicaciones</h2>
      {
        user.posts.map(post => {
          return (
            <Post post={post} />
          )
        })
      }

      <div className="space-y-4 h-2/4 overflow-y-auto">
        
        <Posts/>
      </div>
    </div>
    </div>
    */
  );
};

export default Profile;
