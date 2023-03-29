import {
  GET_USER_BY_NAME,
  GET_USER_BY_ID,
  GET_POST_BY_NAME,
  GET_POST_BY_ID,
  GET_ALL_TAGS,
} from "./actions";

const initialState = {
  favorites: [],
  posts: [],
  users: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_USERS":
      return {
        ...state,
        users: payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
