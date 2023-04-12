import { useDispatch,useSelector } from "react-redux";
import Post from "../components/Post";
import { useEffect } from "react";
import { getAllPosts, getFavorites } from "../redux/actions";
import { useState } from "react";

const Favorites = ()=>{
  const dispatch = useDispatch();
  
  const userId = localStorage.getItem("id");
  
  useEffect(() => {
    dispatch(getFavorites(userId));
  }, []);
  
  const favorites = useSelector((state) => state.favorites)

    return(
      <div className="flex flex-wrap justify-center p-4 w-full h-screen">
        <div className="overflow-hidden min-h-0 h-5/6 w-full">
          <div className="flex flex-col gap-2 overflow-y-auto h-full scrollbar-thin scrollbar-track-transparent">
            <h2 className="text-2xl font-bold mb-4">
              {favorites?.length ? "Favoritos" : "No tienes Favoritos"}
            </h2>
              {favorites?.map((post, i) => (
              <Post post={post.Post} key={i} />
            ))}
          
          </div>
        </div>
      </div>
    )
}

export default Favorites;