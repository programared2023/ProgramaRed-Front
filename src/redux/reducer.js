const initialState = {
    favorites: [],
    posts: [],
    users: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case "GET_USERS":
            return{
                ...state,
                users: payload
            }

        default: return {...state};
    }
}

export default reducer