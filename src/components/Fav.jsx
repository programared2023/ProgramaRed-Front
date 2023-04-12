import useClickedStatus from "../hooks/useClickedStatus"


const Fav = ({userId, postId, pathname}) => {
    const clicked = useClickedStatus(userId, postId);

    const favoriteHandler = () => {

    }

    const deleteFavorite = () => {

    }
    
return(
    <div>
        {pathname === "/home" &&
            userId.toString() !== localStorage.getItem("id") && (
              <div onClick={favoriteHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={!clicked ? "none" : "currentColor"}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
            )}
          {pathname === "/favorites" &&
            userId.toString() !== localStorage.getItem("id") && (
              <div onClick={deleteFavorite}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  />
                </svg>
              </div>
            )}
    </div>
)
}

export default Fav