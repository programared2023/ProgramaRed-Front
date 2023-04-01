import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
<<<<<<< HEAD

//mas hardcodeo, acá tendria que haber estado local, useEffect y por supuesto estados globales
const posts = [
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
    id: 2,
    title: "Segundo post",
    description: "Una descripcion random de un post random...",
    file: "javascript.png",
    createdAt: "2023-03-31T12:17:17.736Z",
    updatedAt: "2023-03-31T12:17:17.736Z",
    UserId: 1
  },
  {
    id: 3,
    title: "Tercer Posteo",
    description: "Este objeto es un artículo que ha sido cuidadosamente diseñado para satisfacer tus necesidades. Es un producto de alta calidad que está hecho con materiales duraderos y resistentes, lo que significa que durará mucho tiempo. Este objeto también es muy versátil y se puede utilizar de muchas maneras diferentes, lo que lo convierte en una opción ideal para cualquier persona que busque un producto que pueda adaptarse a sus necesidades. Además, este objeto es muy fácil de usar y mantener, lo que lo hace perfecto para personas ocupadas o para aquellos que buscan un producto de bajo mantenimiento. En resumen, este objeto es una excelente opción para cualquiera que busque un producto de alta calidad y versátil que pueda satisfacer una amplia gama de necesidades.",
    file: "javascript.png",
    createdAt: "2023-03-31T12:17:17.736Z",
    updatedAt: "2023-03-31T12:17:17.736Z",
    UserId: 2
  }
]

const user = {
  id: 1,
  username: "maria",
  password: "clave123",
  email: "maria@example.com",
  birthdate: "1989-06-15",
}
=======
import { useEffect } from "react";
import { getAllPosts } from "../redux/actions";
>>>>>>> origin/main

const Posts = ()=>{

  const allPosts = useSelector(state => state.posts)
  // const user = useSelector(state => state.actualUser)

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getAllPosts())
  },[])

    return(
        <div className="flex flex-wrap justify-center items-center h-3/4 p-4">
          <div className=" flex flex-col gap-2 overflow-y-auto h-full">
            {
              allPosts?.map((post, i) => 
              <Post 
                post={post} 
                key={i} 
              />)
            }
          </div>
        </div>
    )
}

export default Posts;