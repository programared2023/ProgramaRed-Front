import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Detail from "../views/Detail";
import { setCategory } from "../redux/actions";

const Post = ({ post, username }) => {
  //post recibe username porque en algunos casos el "post" no posee username
  const [localPost, setLocalPost] = useState({});

  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  useEffect(() => {
    setLocalPost(post);
    setCategory("")
  }, [post, localPost]);

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
        </div>

        <button
          to={`/post/${localPost.id}`}
          className="text-green-700 text-base line-clamp-4 text-left"
          onClick={toggleDetails}
        >
          <h2 className="text-green-800 font-bold text-lg mb-2">
            {localPost.title}
          </h2>
          <p>{localPost.description}</p>
        </button>
        
        {showDetails && localPost && <Detail post={localPost} onClose={toggleDetails} />}
        
        <div className="flex gap-2 mt-3">
          {localPost.Tags?.map((tag, i) => {
            return (
              <span key={i} className=" text-sm text-amber-700 font-medium">
                #{tag.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
