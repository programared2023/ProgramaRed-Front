import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetail, getPostByTag } from "../redux/actions";

const PostDetail = ({ toggleDetails }) => {
  const post = useSelector((state) => state.actualPost);
  // console.log(post);
  // const postDate = new Date().toLocaleString("es-AR").split(",");

  // const date = postDate[0];
  // const hour = postDate[1];

  const dispatch = useDispatch()

  const clickHandler = (tag) => {
    dispatch(getPostByTag(tag))
    toggleDetails()
    dispatch(clearDetail())
  }

  return (
    <div className="bg-greenGray rounded-lg p-4 shadow-shadowBlack min-w-90% flex flex-col justify-between h-3/4 m-0 absolute top-10 left-1/2 transform -translate-x-1/2 z-50">
      <div>
        <button onClick={() => {
          toggleDetails()
          dispatch(clearDetail)
        }} >X</button>
        <div className="flex items-center mb-2">
          <div className="bg-green-300 w-12 h-12 rounded-full mr-3">
            <img
              src={
                post?.User?.profileImage
                  ? post?.User?.profileImage
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
            <p className="text-black text-xs font-medium">{`Creado el ${post.publishDate}`}</p>
          </div>
        </div>
        <h2 className="text-green-800 font-bold text-lg mb-2">{post?.title}</h2>
        <div className="text-green-700 text-base">{post?.description}</div>
      </div>

      <div className="flex justify-center" >
        {
          !post.files?.length ?
            ""
            : post.files.map((file, i) => {
              return (
                <div className=" flex w-52  m-2" key={i} >
                  <a rel="noreferrer noopener" href={file} target="_blank" >
                    <img className=" w-full rounded-md" src={file} alt="a" />
                  </a>
                </div>
              )
            })
        }
      </div>

      <div className="flex gap-2 mt-3">
        {post.Tags?.map((tag, i) => {
          return (
            <NavLink key={i} to="/home"><button onClick={() => clickHandler(tag.name)} className=" text-sm text-amber-700 font-medium">
              #{tag.name}
            </button></NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default PostDetail;
