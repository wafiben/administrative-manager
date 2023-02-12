import { actionType } from "./types";
const { GET_ALLL_USERS, SEARCHE_USER_BY_NAME } = actionType;
const initState = { singleUser: {}, users: [] };
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALLL_USERS:
    case SEARCHE_USER_BY_NAME:
      return { ...state, users: [...action.payload] };
    default:
      return state;
  }
};

export default Reducer;
