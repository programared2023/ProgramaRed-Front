import {
  GET_USERS,
  GET_USER_BY_NAME,
  GET_USER_BY_ID,
  GET_ALL_POSTS,
  GET_POST_BY_NAME,
  GET_POST_BY_ID,
  GET_ALL_TAGS,
  CLEAR_DETAIL,
} from "./types";

const initialState = {
  favorites: [],
  posts: [],
  users: [],
  detailUser: [],
  profileUser: [],
  actualUser: []
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
    case GET_USER_BY_NAME:
      return {
        ...state,
        profileUser: payload,
      }
    case CLEAR_DETAIL:
      return {
        ...state,
        detailCountry: payload,
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        post: payload,
      }

    default:
      return { ...state };
  }
};

export default reducer;
