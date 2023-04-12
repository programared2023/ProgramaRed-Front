import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFavorites } from "../redux/actions";

const useClickedStatus = (userId, postId) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFavorites(userId))
    }, [dispatch])

    const [clicked, setClicked] = useState(false);
    const  allFavorites = useSelector(state => state.favorites)
    const favorite = allFavorites.find(fav => fav.id === postId);

    if(favorite){
        setClicked(true)
    }

    return clicked;

}

export default useClickedStatus