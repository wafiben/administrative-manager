import axios from "axios";
export const getAllUsersFromApi = (url) => axios.get(url);
export const searchUserByNameApi = (url, params) => axios.get(url, params);
export const searchUserByAgeApi = (url, params) => axios.get(url, params);

