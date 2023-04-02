import {
  GET_USERS,
  GET_USER_BY_ID,
  GET_ALL_POSTS,
  GET_POST_BY_ID,
  CLEAR_DETAIL,
  GET_USER_BY_NAME,
  GET_POST_BY_QUERY,
} from "./types";

const initialState = {
  favorites: [],
  posts: [],
  users: [],
  actualUser: [],
  detailUser: [],
  filteredUsers: [],
  filteredPosts: [],
  actualPost: [],
  message: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_USER_BY_ID:
      return {
        ...state,
        actualUser: payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detailCountry: payload,
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        posts: payload,
      };
    case GET_POST_BY_ID:
      return {
        ...state,
        actualPost: payload,
      };
    case GET_USER_BY_NAME:
      return {
        ...state,
        filteredUser: payload,
      };
    case GET_POST_BY_QUERY:
      return {
        ...state,
        filteredPosts: payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
