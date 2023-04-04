import { setCategory } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Categories = () => {

  const dispatch = useDispatch()

  const clicked = (event) => {
    dispatch(setCategory(event.target.name));
  }
  
    return (
      <div>
        <button name="user" onClick={clicked}>User</button>
        <br/>
        <button name="tag" onClick={clicked}>Tag</button>
        <br/>
        <button name="posts" onClick={clicked}>Post</button>
      </div>
    );
  };
  
  export default Categories;