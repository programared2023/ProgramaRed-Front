import { useDispatch,useSelector } from "react-redux";
import Post from "../components/Post";
import { useEffect } from "react";
import { getFavorites } from "../redux/actions";

const Favorites = ()=>{
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites)
  
  let userId = localStorage.getItem("id");

  useEffect(() => {
    dispatch(getFavorites(userId));
  }, []);

    return(
      <div className="DIV_FAVORITES py-2">
        <div className="overflow-hidden">
          <div className="flex flex-col gap-2 overflow-y-auto h-full scrollbar-thin scrollbar-track-transparent">
            <h2 className="text-2xl font-bold mx-auto my-2">
              {favorites.length ? "Favoritos" : "No tienes Favoritos"}
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