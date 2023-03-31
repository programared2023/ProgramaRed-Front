import { NavLink } from "react-router-dom";

const Post = ( {post} )=>{

    return(
        <div className=" flex flex-col items-center justify-center gap-2">

            <div className="bg-green-100 rounded-lg p-4 mt-4 shadow-shadowBlack">
                <div className="flex items-center mb-2">
                    <div className="bg-green-300 w-12 h-12 rounded-full mr-3">
                        <img src={post.author.image} alt="" className="w-full"/>
                    </div>
                    <div className="flex-1">
                    <NavLink to={`/profile/${post.author.name}`} className="text-green-700 font-medium text-sm">{post.author.name}</NavLink>
                    <p className="text-green-500 text-xs">hace 2 horas</p>
                    </div>
                </div>
                <h2 className="text-green-800 font-bold text-lg mb-2">{post.title}</h2>
                <NavLink to={`/post/${post.id}`} className="text-green-700 text-base line-clamp-4">
                    {post.description}
                </NavLink>
            </div>
        </div>
    )
}

export default Post;