import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getUserById, clearDetail } from "../redux/actions";

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const user = useSelector((state) => state.detailUser);

  useEffect(() => {
    dispatch(getUserById(id));
    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);

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
