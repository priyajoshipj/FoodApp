import { GET_POST, CREATE_POST, UPDATE_POST, DELETE_POST , POST_DELETE_ADD} from "./types";

// get a post
export const getPost = (id) => ({
  type: GET_POST,
  payload: id,
});

// create a post
export const createPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

// update a post
export const updatePost = (post) => ({
  type: UPDATE_POST,
  payload: post,
});

// delete a post
export const deletePost = (id) => ({
  type: DELETE_POST,
  payload: id,
});

export const deletePostSave = (id) => ({
  type: POST_DELETE_ADD,
  payload:id
})