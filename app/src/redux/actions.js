import { actionType } from "./types";
import { api } from "../api";
import { getAllUsersFromApi } from "./../services/userService";
const { getALLUsersApi } = api;
const { GET_ALLL_USERS } = actionType;
export const getAllUsersAction = () => async (dispatch) => {
  try {
    const {
      data: { persons },
    } = await getAllUsersFromApi(getALLUsersApi);
    dispatch({ type: GET_ALLL_USERS, payload: persons });
  } catch (error) {
    console.log(error);
  }
};
