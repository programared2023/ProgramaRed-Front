import PostDetail from "../components/PostDetail";
import { useDispatch } from "react-redux";
import { getPostById } from "../redux/actions";
import { useEffect } from "react";

const Detail = ({post, onClose}) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getPostById(post?.id))
      },[dispatch, post])

    return(
        <>
            <PostDetail post={post} onClose={onClose} />
        </>
    )
}

export default Detail