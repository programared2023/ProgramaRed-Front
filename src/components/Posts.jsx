import { useSelector } from "react-redux";
import Post from "./Post";
import { useEffect } from "react";
import { useState } from "react";
import { setCategory } from "../redux/actions";

const Posts = ({toggleDetails})=>{

  const allPosts = useSelector(state => state.posts);
  const filteredPosts = useSelector(state => state.filteredPosts);

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    setPosts(allPosts);
    setCategory("");
  },[allPosts])

  useEffect(()=> {
    setPosts(filteredPosts);
  },[filteredPosts])

    return(
      <div className="flex flex-wrap justify-center p-4 w-full max-h-full">
        <div className="overflow-hidden min-h-0 h-5/6 w-full">
          <div className="flex flex-col gap-2 overflow-y-auto h-full scrollbar-thin scrollbar-track-transparent">
            {posts?.map((post, i) => (
              <Post post={post} key={i} toggleDetails={toggleDetails} />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Posts;