import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const PostDetail = () => {

    const post = useSelector(state => state.actualPost)

    return(
        <>
            <div className="bg-green-100 rounded-lg p-4 m-4 shadow-shadowBlack w-full h-3/5">
                <div className="flex items-center mb-2">
                    <div className="bg-green-300 w-12 h-12 rounded-full mr-3">
                        <img src={post?.User?.image ? post?.User?.image : "https://source.unsplash.com/random/500x500"} alt={post?.User?.username} className="w-full rounded-full"/>
                    </div>
                    <div className="flex-1">
                    <NavLink to={`/profile/${post?.User?.id}`} className="text-green-700 font-medium text-sm">{post?.User?.username}</NavLink>
                    <p className="text-green-500 text-xs">hace 2 horas</p>
                    </div>
                </div>
                <h2 className="text-green-800 font-bold text-lg mb-2">{post?.title}</h2>
                <div className="text-green-700 text-base">
                    {post?.description}
                </div>
            </div>
        </>
    )
};

export default PostDetail