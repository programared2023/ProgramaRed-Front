import {
  GET_USERS,
  GET_USER_BY_ID,
  GET_ALL_POSTS,
  GET_POST_BY_ID,
  CLEAR_DETAIL,
  GET_USER_BY_NAME,
  GET_POST_BY_QUERY,
  GET_POST_BY_TAG,
  CLEAR_FILTERS,
  GET_ALL_TAGS,
  GET_POST_BY_SEARCH,
  SET_CATEGORY,
} from "./types";

const initialState = {
  favorites: [],
  posts: [],
  users: [],
  tags: [],
  actualUser: [],
  detailUser: [],
  filteredUsers: [],
  filteredPosts: [],
  filterPostByTag: [],
  filterByTag: [],
  actualPost: [],
  message: "",
  category: ""
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
    case GET_POST_BY_SEARCH:
      return {
        ...state,
        filteredPosts: payload,
      };
    case GET_ALL_TAGS:
      return {
        ...state,
        tags: payload,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filteredPosts: [],
      };
    case GET_POST_BY_TAG:
      return {
        ...state,
        filteredPosts: payload,
      }
      case GET_POST_BY_QUERY:
        return {
          ...state,
          filteredPosts : payload
        }
        case SET_CATEGORY:
          console.log(payload)
          return{
            ...state,
            category: payload,
          }

    default:
      return { ...state };
  }
};

export default reducer;
