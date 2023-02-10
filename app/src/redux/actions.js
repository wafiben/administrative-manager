import { actionType } from "./types";
import { api } from "../../config";
import { getAllUsersFromApi } from "./../services/userService";
import { getAllUsers } from "../api/users";
const { getALLUsersApi } = api;
const { GET_ALLL_USERS } = actionType;

export const getAllUsersAction = async () => {
  const { persons } = await getAllUsers();
  return { type: GET_ALLL_USERS, payload: persons };
};
