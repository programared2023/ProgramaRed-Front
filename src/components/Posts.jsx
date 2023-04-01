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
  },[])

    return(
        <div className="flex flex-wrap justify-center items-center h-3/4 p-4">
          <div className=" flex flex-col gap-2 overflow-y-auto h-full">
            {
              allPosts?.map((post, i) => 
              <Post 
                post={post} 
                key={i} 
              />)
            }
          </div>
        </div>
    )
}

export default Posts;
