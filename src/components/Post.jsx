import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, getPostByTag } from "../redux/actions";
import axios from "axios";

const Post = ({ post, username, toggleDetails}) => {
  //post recibe username porque en algunos casos el "post" no posee username
  const [localPost, setLocalPost] = useState({});
  let userId = localStorage.getItem("id")  
  const { pathname } = useLocation();
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    setLocalPost(post);
  }, [post, localPost]);

  useEffect(() => {

  }, [])
  
  const getFavorites = async () => {
    let favorites = await axios.get(`/favorites/${userId}`)
    return favorites;
  }

  // const [favorite, setFavorite] = useState([]); //guardar post seleccionado - quiza hacer dispacht a redux
  const [clicked, setClicked] = useState(false);

  const postDate = new Date(post.createdAt).toLocaleString("es-AR").split(",");

  const date = postDate[0];
  const hour = postDate[1];

  const favorite = {
    idPost: localPost.id,
    idUser: userId
  }

  const favoriteHandler = async () => {
    if(!clicked){
      setClicked(true);
      const fav = await axios.post(`/favorites`, favorite);
      const favorites = getFavorites().then(res => console.log(res.data));
    }else{
        setClicked(false);
    }
  }

  return (
    <div className="px-4 py-1">
      <div className=" bg-greenGray rounded-lg p-5 mt-4 shadow-shadowBlack">
        <div className="flex items-center mb-2">
          <div className="bg-green-300 w-12 h-12 rounded-full mr-3">
            <img
              src={
                localPost.User?.image
                  ? localPost.User.image
                  : "https://source.unsplash.com/random/500x500"
              }
              alt={localPost.User?.username}
              className="w-full rounded-full"
            />
          </div>

          <div className="flex-1">
            <NavLink
              to={`/profile/${localPost.User?.id}`}
              className="text-green-700 font-medium text-sm"
            >
              {localPost.User?.username}
              {!localPost.User && localPost.username}
              {!localPost.User && !localPost.username && username}
            </NavLink>
            <p className="text-black text-xs font-medium">{`Creado el ${date} a las ${hour}`}</p>
          </div>
            {
              localPost.User?.id.toString() !== localStorage.getItem("id")
              ? 
                !clicked ? 
                ( 
                <div onClick={favoriteHandler}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill={!clicked ? "none" : "currentColor"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                </div>
                ) : ""
              : ""
            }
          </div>

        <button
          className="text-green-700 text-base line-clamp-4 text-left"
          onClick={()=>{
            toggleDetails();
            dispatch(getPostById(localPost.id));
          }}
          >
          <h2 className="text-green-800 font-bold text-lg mb-2">
            {localPost.title}
          </h2>
          <p>{localPost.description}</p>
        </button>
        
        <div className="flex gap-2 mt-3">
            {localPost.Tags?.map((tag, i) => {
              {
                if(pathname !== "/home"){
                  return(
                    <NavLink to="/home"><button onClick={() => dispatch(getPostByTag(tag.name))} key={i} className=" text-sm text-amber-700 font-medium">
                      #{tag.name}
                    </button></NavLink>
                  )
                } 
                else{
                  return(
                    <button onClick={() => dispatch(getPostByTag(tag.name))} key={i} className=" text-sm text-amber-700 font-medium">
                      #{tag.name}
                    </button>
                  )
                }
              }
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;