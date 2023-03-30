import Post from "./Post";

const posts = 
    [
        {
          "author": {
            "id": 1,
            "name": "John Doe",
            "email": "johndoe@example.com",
            "image": "https://example.com/images/johndoe.jpg"
          },
          "id": 1,
          "title": "Título del primer objeto",
          "description": "Este objeto es un artículo que ha sido cuidadosamente diseñado para satisfacer tus necesidades. Es un producto de alta calidad que está hecho con materiales duraderos y resistentes, lo que significa que durará mucho tiempo. Este objeto también es muy versátil y se puede utilizar de muchas maneras diferentes, lo que lo convierte en una opción ideal para cualquier persona que busque un producto que pueda adaptarse a sus necesidades. Además, este objeto es muy fácil de usar y mantener, lo que lo hace perfecto para personas ocupadas o para aquellos que buscan un producto de bajo mantenimiento. En resumen, este objeto es una excelente opción para cualquiera que busque un producto de alta calidad y versátil que pueda satisfacer una amplia gama de necesidades."
        },
        {
          "author": {
            "id": 2,
            "name": "Jane Doe",
            "email": "janedoe@example.com",
            "image": "https://example.com/images/janedoe.jpg"
          },
          "id": 2,
          "title": "Título del segundo objeto",
          "description": "Morbi mollis tellus ac sapien. Nunc id risus nec urna dignissim dignissim. Vivamus euismod nisi vel augue. Curabitur vestibulum aliquam leo. Praesent egestas neque eu enim. In hac habitasse platea dictumst."
        },
        {
          "author": {
            "id": 3,
            "name": "Bob Smith",
            "email": "bobsmith@example.com",
            "image": "https://example.com/images/bobsmith.jpg"
          },
          "id": 3,
          "title": "Título del tercer objeto",
          "description": "Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante. Nullam vestibulum elementum urna. Phasellus rhoncus. Praesent pharetra, magna non tempor tincidunt, felis tortor ultricies tellus, ac venenatis arcu wisi vel nisl. Vestibulum suscipit nulla quis orci."
        },
        {
          "author": {
            "id": 4,
            "name": "Alice Johnson",
            "email": "alicejohnson@example.com",
            "image": "https://example.com/images/alicejohnson.jpg"
          },
          "id": 4,
          "title": "Título del cuarto objeto",
          "description": "Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus."
        },
        {
          "author": {
            "id": 5,
            "name": "Mark Lee",
            "email": "marklee@example.com",
            "image": "https://example.com/images/marklee.jpg"
          },
          "id": 5,
          "title": "Título del quinto objeto",
          "description": "Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt"
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