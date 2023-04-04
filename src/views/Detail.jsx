import PostDetail from "../components/PostDetail";
import { useDispatch } from "react-redux";
import { getPostById } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(()=> {
        dispatch(getPostById(id))
      },[dispatch, id])

    return(
        <PostDetail/>
    )
}

export default Detail