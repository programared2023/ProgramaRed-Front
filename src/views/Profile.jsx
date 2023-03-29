import { NavLink } from "react-router-dom";

const persona = {
  name: "Ana García",
  email: "ana.garcia@example.com",
  image: "https://example.com/images/ana-garcia.jpg",
};

const Profile = () => {
  return (
    <div>
      <h1>Este es el perfil de un usuario</h1>
      <h1>{persona.name}</h1>
      <h2>{persona.email}</h2>
      <img src={persona.image} alt="profile-img" />
      <NavLink to="/createPost" >Sube un posteo</NavLink>
    </div>
  );
};

export default Profile;
