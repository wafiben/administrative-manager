import { actionType } from "./types";
import { api } from "../api";
import {
  getAllUsersFromApi,
  searchUserByNameApi,
  searchUserByAgeApi,
} from "./../services/userService";
const { getALLUsersApi, searchByName, filterByAgeApi } = api;
const { GET_ALLL_USERS, SEARCHE_USER_BY_NAME } = actionType;
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
export const searchUserByNameAction = (params) => async (dispatch) => {
  try {
    const {
      data: { searchedPersons },
    } = await searchUserByNameApi(searchByName, params);
    dispatch({ type: SEARCHE_USER_BY_NAME, payload: searchedPersons });
  } catch (error) {
    console.log(error);
  }
};
export const searchUserByAgeAction = (params) => async (dispatch) => {
  try {
    const res = await searchUserByAgeApi(filterByAgeApi, params);
    console.log({ res });
    /*     dispatch({ type: SEARCHE_USER_BY_NAME, payload: searchedPersons }); */
  } catch (error) {
    console.log(error);
  }
};
