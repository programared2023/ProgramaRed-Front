import { NavLink } from "react-router-dom";

const posts = [
    {
        "id": 1,
      "title": "Primer post",
      "description": "Este objeto o característica se caracteriza por su diseño simple y funcional, que lo hace adecuado para múltiples usos y situaciones. Su apariencia es elegante y atractiva, pero sin ser llamativa ni exagerada. Está fabricado con materiales de alta calidad y cuenta con acabados cuidadosamente elaborados. Es resistente y duradero, por lo que puede ser utilizado por un largo tiempo sin sufrir daños o deterioro. En resumen, este objeto o característica es una elección práctica y confiable para cualquier persona que busca calidad y eficiencia.",
      "author": {
        id: 1,
        name: "juanito",
        email: "juanito@gmail.com"
      }
    },
    {
        "id": 2,
      "title": "Segundo post",
      "description": "Este objeto o característica se caracteriza por su diseño simple y funcional, que lo hace adecuado para múltiples usos y situaciones. Su apariencia es elegante y atractiva, pero sin ser llamativa ni exagerada. Está fabricado con materiales de alta calidad y cuenta con acabados cuidadosamente elaborados. Es resistente y duradero, por lo que puede ser utilizado por un largo tiempo sin sufrir daños o deterioro. En resumen, este objeto o característica es una elección práctica y confiable para cualquier persona que busca calidad y eficiencia.",
      "author": {
        id: 3,
        name: "manuel",
        email: "manuel@gmail.com"
      }
    },
    {
        "id": 3,
      "title": "Tercer post",
      "description": "Este objeto o característica se caracteriza por su diseño simple y funcional, que lo hace adecuado para múltiples usos y situaciones. Su apariencia es elegante y atractiva, pero sin ser llamativa ni exagerada. Está fabricado con materiales de alta calidad y cuenta con acabados cuidadosamente elaborados. Es resistente y duradero, por lo que puede ser utilizado por un largo tiempo sin sufrir daños o deterioro. En resumen, este objeto o característica es una elección práctica y confiable para cualquier persona que busca calidad y eficiencia.",
      "author": {
        id: 3,
        name: "manuel",
        email: "manuel@gmail.com"
      }
    },
    {
        "id": 4,
        "title": "Cuarto post",
        "description": "Este objeto o característica se caracteriza por su diseño simple y funcional, que lo hace adecuado para múltiples usos y situaciones. Su apariencia es elegante y atractiva, pero sin ser llamativa ni exagerada. Está fabricado con materiales de alta calidad y cuenta con acabados cuidadosamente elaborados. Es resistente y duradero, por lo que puede ser utilizado por un largo tiempo sin sufrir daños o deterioro. En resumen, este objeto o característica es una elección práctica y confiable para cualquier persona que busca calidad y eficiencia.",
        "author": {
            id: 2,
            name: "lucas",
            email: "lucas@gmail.com"
        }
    },
    {
        "id": 5,
        "title": "Cuarto post",
        "description": "Este objeto o característica se caracteriza por su diseño simple y funcional, que lo hace adecuado para múltiples usos y situaciones. Su apariencia es elegante y atractiva, pero sin ser llamativa ni exagerada. Está fabricado con materiales de alta calidad y cuenta con acabados cuidadosamente elaborados. Es resistente y duradero, por lo que puede ser utilizado por un largo tiempo sin sufrir daños o deterioro. En resumen, este objeto o característica es una elección práctica y confiable para cualquier persona que busca calidad y eficiencia.",
        "author": {
            id: 2,
            name: "lucas",
            email: "lucas@gmail.com"
        }
    },
    {
        "id": 6,
        "title": "Cuarto post",
        "description": "Este objeto o característica se caracteriza por su diseño simple y funcional, que lo hace adecuado para múltiples usos y situaciones. Su apariencia es elegante y atractiva, pero sin ser llamativa ni exagerada. Está fabricado con materiales de alta calidad y cuenta con acabados cuidadosamente elaborados. Es resistente y duradero, por lo que puede ser utilizado por un largo tiempo sin sufrir daños o deterioro. En resumen, este objeto o característica es una elección práctica y confiable para cualquier persona que busca calidad y eficiencia.",
        "author": {
            id: 2,
            name: "lucas",
            email: "lucas@gmail.com"
        }
    }
  ]


const Posts = ()=>{

    return(
        <div className="flex flex-wrap justify-center items-center">
            {
                posts.map((post, i) => {
                    return(
                        <NavLink to={`/post/${post.id}`} className="flex flex-col items-center rounded-3xl p-3 m-3 h-64 w-52 overflow-hidden border border-black bg-teal-600" key={i}>
                            <NavLink to={`/profile/${post.author.id}`} className="p-1">{post.author.name}</NavLink>
                            <p className="p-1" >{post.title}</p>
                            <p className="p-1 truncate whitespace-normal w-full line-clamp-6">{post.description}</p>
                        </NavLink>
                    )
                })
            }
        </div>
    )
}

export default Posts;