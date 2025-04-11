import axios from "axios";

const BASE_URL = "http://20.244.56.144/evaluation-service";

export const fetchUsers = () =>
  axios.get(`${BASE_URL}/users`).then((res) => res.data);
export const fetchUserPosts = (userId) =>
  axios.get(`${BASE_URL}/users/${userId}/posts`).then((res) => res.data);
export const fetchPostComments = (postId) =>
  axios.get(`${BASE_URL}/posts/${postId}/comments`).then((res) => res.data);
