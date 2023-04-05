import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Detail from "../views/Detail";
import { getPostByTag } from "../redux/actions";
import { useDispatch } from "react-redux";

const Post = ({ post, username }) => {
  const dispatch = useDispatch()
  //post recibe username porque en algunos casos el "post" no posee username
  const [localPost, setLocalPost] = useState({});

  const { pathname } = useLocation();

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  useEffect(() => {
    setLocalPost(post);
  }, [post, localPost]);

  const [favorite, serFavorite] = useState([]); //guardar post seleccionado - quiza hacer dispacht a redux
  const [clicked, setClicked] = useState(false);

  const postDate = new Date(post.createdAt).toLocaleString("es-AR").split(",");

  const date = postDate[0];
  const hour = postDate[1];

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
              localPost.User?.id.toString() != localStorage.getItem("id")
              ? (
                !clicked ? 
                ( 
                <div onClick={()=>{setClicked(true)}}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                </div>
                ) : 
                (
                  <div onClick={()=>{setClicked(false)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                    </svg>
                  </div>
                )
              )
              : "" 
            }
          </div>

        <button
          className="text-green-700 text-base line-clamp-4 text-left"
          onClick={toggleDetails}
        >
          <h2 className="text-green-800 font-bold text-lg mb-2">
            {localPost.title}
          </h2>
          <p>{localPost.description}</p>
        </button>
        
        {showDetails && localPost && <Detail post={localPost} onClose={toggleDetails} showDetails={showDetails}/>}
        
        
        <div className="flex gap-2 mt-3">
          {localPost.Tags?.map((tag, i) => {
            return (
              <button onClick={() => dispatch(getPostByTag(tag.name))} key={i} className=" text-sm text-amber-700 font-medium">
                #{tag.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
