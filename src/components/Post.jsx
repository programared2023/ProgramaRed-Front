import { NavLink } from "react-router-dom";

const Post = ( {post} )=>{

    return(
        <div className=" flex flex-col items-center justify-center rounded-3xl p-3 m-3 h-64 w-52 border border-black bg-teal-600">
            <NavLink to={`/profile/${post.author.id}`} className="p-1">{post.author.name}</NavLink>
            <NavLink to={`/post/${post.id}`} className="flex flex-col items-center justify-center overflow-hidden">
                <p className="p-1" >{post.title}</p>
                <p className="p-1 truncate whitespace-normal w-full line-clamp-6">{post.description}</p>
            </NavLink>
        </div>
    )
}

export default Post;