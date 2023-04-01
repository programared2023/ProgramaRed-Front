import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import { useEffect } from "react";
import { getAllPosts } from "../redux/actions";

const Posts = ()=>{

  const allPosts = useSelector(state => state.posts)
  // const user = useSelector(state => state.actualUser)

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllPosts())
  },[dispatch])

    return(
      <div className="flex flex-wrap justify-center p-4 w-full">
        <div className="overflow-hidden min-h-0 h-5/6 w-full">
          <div className="flex flex-col gap-2 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {allPosts?.map((post, i) => (
              <Post post={post} key={i} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Posts;
