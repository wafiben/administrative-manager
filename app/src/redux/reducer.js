import { actionType } from "./types";
const { GET_ALLL_USERS } = actionType;
const initState = { users: [] };
const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALLL_USERS:
      return { ...state, users: [...action.payload] };
    default:
      return state;
  }
};

export default Reducer;
