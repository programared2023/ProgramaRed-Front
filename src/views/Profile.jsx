import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getUserByName, clearDetail } from "../redux/actions";

const Profile = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  const user = useSelector((state) => state.detailUser);

  useEffect(() => {
    dispatch(getUserByName(name));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, name]);

  return (
    <div>
      <h1>Este es el perfil de un usuario</h1>
      <h1>{user.username}</h1>
      <h2>{user.email}</h2>
      <img src={user.image} alt="profile-img" />
      <NavLink to="/createPost">Sube un posteo</NavLink>
    </div>
  );
};

export default Profile;
