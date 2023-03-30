import Post from "./Post";

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
                        <Post post={post} key={i} />
                    )
                })
            }
        </div>
    )
}

export default Posts;