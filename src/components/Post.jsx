import { NavLink } from "react-router-dom";

const Post = ({ post }) => {

  return (
    <div>
     <div className="bg-green-100 rounded-lg p-4 mt-4 shadow-shadowBlack">
        <div className="flex items-center mb-2">
          <div className="bg-green-300 w-12 h-12 rounded-full mr-3">
            <img
              src={
                post?.User?.image
                  ? post.User.image
                  : "https://source.unsplash.com/random/500x500"
              }
              alt={post?.User?.username}
              className="w-full rounded-full"
            />
          </div>

          <div className="flex-1">
            <NavLink
              to={`/profile/${post?.User?.id}`}
              className="text-green-700 font-medium text-sm"
            >
              {post?.User?.username}
            </NavLink>
            <p className="text-green-500 text-xs">hace 2 horas</p>
          </div>
        </div>

        <h2 className="text-green-800 font-bold text-lg mb-2">{post?.title}</h2>
        <NavLink
          to={`/post/${post?.id}`}
          className="text-green-700 text-base line-clamp-4"
        >
          {post?.description}
        </NavLink>
      </div>
    </div>
  );
};

export default Post;

{
  /*  */
}
