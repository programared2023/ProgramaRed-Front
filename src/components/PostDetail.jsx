import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const PostDetail = () => {

    const post = useSelector(state => state.actualPost)

    return(
        <div className="bg-greenGray rounded-lg p-4 mx-8 my-10 shadow-shadowBlack w-full flex flex-col justify-between h-3/4">
            <div>
                <div className="flex items-center mb-2">
                    <div className="bg-green-300 w-12 h-12 rounded-full mr-3">
                        <img src={post?.User?.image ? post?.User?.image : "https://source.unsplash.com/random/500x500"} alt={post?.User?.username} className="w-full rounded-full"/>
                    </div>
                    <div className="flex-1">
                    <NavLink to={`/profile/${post?.User?.id}`} className="text-green-700 font-medium text-sm">{post?.User?.username}</NavLink>
                    <p className="text-black text-xs font-medium">hace 2 horas</p>
                    </div>
                </div>
                <h2 className="text-green-800 font-bold text-lg mb-2">{post?.title}</h2>
                <div className="text-green-700 text-base">
                    {post?.description}
                </div>
            </div>
            <div className="flex gap-2 mt-3">
                    {
                        post.Tags?.map((tag, i)=>{
                            return <span key={i} className=" text-sm text-amber-700 font-medium" >#{tag.name}</span>
                        })
                    }
            </div>
        </div>
    )
};

export default PostDetail