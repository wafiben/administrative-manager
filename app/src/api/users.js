import { BASE_URL } from "../../config";
import request from "../utils/request";
const url = BASE_URL.concat("/users");

export const getAllUsers = async () => {
  return await request.get(url)
};

export const getUserByName = async (searchNameInput) => {
  const params = { username: searchNameInput };
  return await request.get(url, params)
};

export const getUserByAge = async ({ minAge = 0, maxAge }) => {
  const params = { minAge, maxAge };
  return await request.get(url, params)
};
