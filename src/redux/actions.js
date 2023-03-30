import users from "../bd.json" 
import axios from "axios";
import { GET_USERS, GET_USER_BY_ID, CLEAR_DETAIL } from "./types";


export const getUsers = ()=>{
    return{
        type: GET_USERS,
        payload: users
    }
}

export const getUserById = (id) => {
    return async function (dispatch) {
        const backData = await axios.get(`/user/${id}`)
        const user = backData.data;
        dispatch({
            type: GET_USER_BY_ID,
            payload: user,
        })
    }
}

export const clearDetail = () => {
    return {
      type: CLEAR_DETAIL,
      payload: [],
    }
  
  }