import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostById, getPostByTag } from "../redux/actions";
import person from "../images/person.png";
import axios from "axios";

const Post = ({ post, username, toggleDetails }) => {
  //post recibe username porque en algunos casos el "post" no posee username
  const [localPost, setLocalPost] = useState({});
  let userId = localStorage.getItem("id");
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    setLocalPost(post);
  }, [post]);

  const getFavorites = async () => {
    let favorites = await axios.get(`/favorites/${userId}`);
    return favorites;
  };

  // const [favorite, setFavorite] = useState([]); //guardar post seleccionado - quiza hacer dispacht a redux
  const [clicked, setClicked] = useState(false);

  const favorite = {
    idPost: localPost.id,
    idUser: userId,
  };

  const favoriteHandler = async () => {
    if (!clicked) {
      setClicked(true);
      await axios.post(`/favorites`, favorite);
      getFavorites().then((res) => console.log("favorites: ", res.data));
    } else {
      setClicked(false);
    }
  };

  const deleteFavorite = async(e) =>{
    //agregar alerta de borrado Lucas xD
    await axios.delete(`/favorite`, favorite)
  }


  return (
    <div className="px-4 py-1">
      <div className=" bg-greenGray rounded-lg p-5 mt-4 shadow-shadowBlack">
        <div className="flex items-center mb-2">
          <div className="bg-green-300 w-12 h-12 rounded-full mr-3">
            <img
              src={
                localPost.User?.profileImage
                  ? localPost.User.profileImage
                  : person
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
            <p className="text-black text-xs font-medium">{`Creado el ${post.publishDate}`}</p>
          </div>
          {
            pathname === "/home" && localPost.User?.id.toString() !== localStorage.getItem("id") && 
            <div onClick={favoriteHandler}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={!clicked ? "none" : "currentColor"}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </div>  
          }
          {
            pathname === "/favorites" && localPost.User?.id.toString() !== localStorage.getItem("id") &&
            <div onClick={deleteFavorite}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </div>  
          }
        </div>

        <button
          className="text-green-700 text-base line-clamp-4 text-left"
          onClick={() => {
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
              if (pathname !== "/home") {
                return (
                  <NavLink key={i} to="/home">
                    <button
                      onClick={() => dispatch(getPostByTag(tag.name))}
                      className=" text-sm text-amber-700 font-medium"
                    >
                      #{tag.name}
                    </button>
                  </NavLink>
                );
              } else {
                return (
                  <button
                    onClick={() => dispatch(getPostByTag(tag.name))}
                    key={i}
                    className=" text-sm text-amber-700 font-medium"
                  >
                    #{tag.name}
                  </button>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
