import users from "../bd.json" 

export const getUsers = ()=>{
    return{
        type: "GET_USERS",
        payload: users
    }
}