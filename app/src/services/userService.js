import axios from "axios";
export const getAllUsersFromApi = (url) => axios.get(url);
export const serchAge = () => (url) => axios.get(url);
