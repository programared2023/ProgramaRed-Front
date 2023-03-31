import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Posts from "../components/Posts";
import { getUserByName, clearDetail, getUserById } from "../redux/actions";
import Post from "../components/Post";

const Profile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  // const user = useSelector((state) => state.detailUser);

  // useEffect(() => {
  //   dispatch(getUserById(id));
  //   return () => {
  //     dispatch(clearDetail());
  //   };
  // }, [dispatch, id]);

  //harcodeo de user
  //cuando borren  esto descomenten lo de arriba
  const user = {
    id: 1,
    username: "maria",
    password: "clave123",
    email: "maria@example.com",
    birthdate: "1989-06-15",
    Posts: [
      {
        id: 1,
        title: "Alto estres",
        description: "Este objeto es un artículo que ha sido cuidadosamente diseñado para satisfacer tus necesidades. Es un producto de alta calidad que está hecho con materiales duraderos y resistentes, lo que significa que durará mucho tiempo. Este objeto también es muy versátil y se puede utilizar de muchas maneras diferentes, lo que lo convierte en una opción ideal para cualquier persona que busque un producto que pueda adaptarse a sus necesidades. Además, este objeto es muy fácil de usar y mantener, lo que lo hace perfecto para personas ocupadas o para aquellos que buscan un producto de bajo mantenimiento. En resumen, este objeto es una excelente opción para cualquiera que busque un producto de alta calidad y versátil que pueda satisfacer una amplia gama de necesidades.",
        file: "javascript.png",
        createdAt: "2023-03-31T12:17:17.736Z",
        updatedAt: "2023-03-31T12:17:17.736Z",
        UserId: 1
      },
      {
        id: 1,
        title: "Segundo post",
        description: "Una descripcion random de un post random...",
        file: "javascript.png",
        createdAt: "2023-03-31T12:17:17.736Z",
        updatedAt: "2023-03-31T12:17:17.736Z",
        UserId: 1
      }
    ],
  }

  return (
    
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full max-w-5xl mx-auto px-4 py-8 items-center justify-evenly">
        <div className="md:w-1/5 flex justify-center">
          <img src="https://source.unsplash.com/random/500x500" alt="ProfilePhoto" className="rounded-full h-40 w-40 object-cover object-center border-4 border-green-500"/>
        </div>

     
        <div className="md:w-2/5">
  
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold text-white">{user.username}</h1>
            <p className="text-lg text-green-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, neque in consectetur elementum, justo purus facilisis arcu, vel efficitur massa lacus a orci. Morbi malesuada sit amet felis quis elementum.</p>
          </div>

        </div>
      </div>
  
      <div className="mt-8 p-9">
        {
          user ? 
          (<>
            <h2 className="text-2xl font-bold text-white mb-4">{user.Posts ? "Publicaciones" : "No Tienes publicaciones"}</h2> 
            <div className="space-y-4 h-3/4 overflow-y-auto">
              {
                user.Posts?.map(post => {
                  return (
                    <Post user={user} post={post} />
                  )
                })
              }
            </div> 
          </>) : <p>Cargando...</p>
        }
      </div>
    </div>
    
  );
};

export default Profile;


// <div>
//       <h1>Este es el perfil de un usuario</h1>
//       <h1>{user.username}</h1>
//       <h2>{user.email}</h2>
//       <img src={user.image} alt="profile-img" />

//       {
//         user.Posts?.map((post, i) => {
//           return (
//             <div key={i}>
//               <h2>{post.title}</h2>
//               <p>{post.description}</p>
//             </div>
//           )
//         })
//       }

//       <NavLink to="/createPost">Sube un posteo</NavLink>
//     </div>