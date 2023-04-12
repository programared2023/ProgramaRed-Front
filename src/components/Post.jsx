import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPostById, getPostByTag } from "../redux/actions";
import person from "../images/person.png";
import Fav from "./Fav";

const Post = ({ post, username, toggleDetails }) => {
  //post recibe username porque en algunos casos el "post" no posee username
  const [localPost, setLocalPost] = useState({});
  let userId = localStorage.getItem("id");
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    setLocalPost(post);
  }, [post]);

 


  

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
          <Fav userId={localPost.User?.id} postId={localPost.id} localUser={userId}/>
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
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
