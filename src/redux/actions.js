import users from "../bd.json";
import axios from "axios";
import {
  GET_USERS,
  GET_USER_BY_ID,
  CLEAR_DETAIL,
  GET_ALL_POSTS,
  GET_POST_BY_ID,
  GET_POST_BY_QUERY,
  GET_USER_BY_NAME,
  CLEAR_FILTERS,
  GET_POST_BY_TAG,
  GET_ALL_TAGS,
  GET_POST_BY_SEARCH,
} from "./types";

export const getUsers = () => {
  return {
    type: GET_USERS,
    payload: users,
  };
};

export const getUserById = (id) => {
  return async function (dispatch) {
    const backData = await axios.get(`/user/${id}`);
    const user = backData.data;
    dispatch({
      type: GET_USER_BY_ID,
      payload: user,
    });
  };
};

export const getAllPosts = () => {
  return async function (dispatch) {
    const { data } = await axios.get("/post");
    dispatch({
      type: GET_ALL_POSTS,
      payload: data,
    });
  };
};

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
    payload: [],
  };
};

export const getPostById = (id) => {
  return async function (dispatch) {
    const backData = await axios.get(`/post/${id}`);
    const post = backData.data;
    dispatch({
      type: GET_POST_BY_ID,
      payload: post,
    });
  };
};

export const createPost = (form) => {
  return async function () {
    const { data } = await axios.post("/post", form);
    console.log(data);
  };
};

export const getUserByName = (name) => {
  return async function (dispatch) {
    const backData = await axios.get(`/user?username=${name}`);
    const users = backData.data;
    dispatch({
      type: GET_USER_BY_NAME,
      payload: users,
    });
  };
};

export const getPostBySearch = (search) => {
  return async function (dispatch) {
    const backData = await axios.get(`/post?search=${search}`);
    const posts = backData.data;
    dispatch({
      type: GET_POST_BY_SEARCH,
      payload: posts,
    });
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS
  }
}

export const getAllTags = () => {
  return async function (dispatch) {
    const backData = await axios.get("/tags");
    const tags = backData.data;
    dispatch({
      type: GET_ALL_TAGS,
      payload: tags,
    })
  }
}

export const getPostByTag = (tag) => {
  return async function (dispatch) {
    const backData = await axios.get(`/post?${tag}`);
    const posts = backData.data;
    dispatch({
      type: GET_POST_BY_TAG,
      payload: posts,
    });
  };
}

export const getPostByQuery = (user, tag, post) => {
  return async function (dispatch) {
    let backData
    if(user){
      backData = await axios.get(`/posts?user=${user}`);
    }

    if(tag){
      backData = await axios.get(`/posts?tag=${tag}`);
    }

    if(post){
      backData = await axios.get(`/posts?post=${post}`);
    }
    const posts = backData.data;
    dispatch({
      type: GET_POST_BY_QUERY,
      payload: posts,
    });
  };
}