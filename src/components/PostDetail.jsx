import { NavLink } from "react-router-dom";

const PostDetail = () => {

    const post = {
        id: 1,
        title: "Alto estres",
        description: "Este objeto es un artículo que ha sido cuidadosamente diseñado para satisfacer tus necesidades. Es un producto de alta calidad que está hecho con materiales duraderos y resistentes, lo que significa que durará mucho tiempo. Este objeto también es muy versátil y se puede utilizar de muchas maneras diferentes, lo que lo convierte en una opción ideal para cualquier persona que busque un producto que pueda adaptarse a sus necesidades. Además, este objeto es muy fácil de usar y mantener, lo que lo hace perfecto para personas ocupadas o para aquellos que buscan un producto de bajo mantenimiento. En resumen, este objeto es una excelente opción para cualquiera que busque un producto de alta calidad y versátil que pueda satisfacer una amplia gama de necesidades.",
        file: "javascript.png",
        createdAt: "2023-03-31T12:17:17.736Z",
        updatedAt: "2023-03-31T12:17:17.736Z",
        UserId: 1
      }

      const user = {
        id: 1,
        username: "maria",
        password: "clave123",
        email: "maria@example.com",
        birthdate: "1989-06-15",
      }

    return(
        <div>
            <div className="bg-green-100 rounded-lg p-4 m-4 shadow-shadowBlack">
                <div className="flex items-center mb-2">
                    <div className="bg-green-300 w-12 h-12 rounded-full mr-3">
                        <img src={user?.image ? user?.image : "https://source.unsplash.com/random/500x500"} alt={user?.username} className="w-full"/>
                    </div>
                    <div className="flex-1">
                    <NavLink to={`/profile/${user?.id}`} className="text-green-700 font-medium text-sm">{user?.username}</NavLink>
                    <p className="text-green-500 text-xs">hace 2 horas</p>
                    </div>
                </div>
                <h2 className="text-green-800 font-bold text-lg mb-2">{post.title}</h2>
                <div to={`/post/${post.id}`} className="text-green-700 text-base">
                    {post.description}
                </div>
            </div>
        </div>
    )
};

export default PostDetail