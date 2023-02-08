import { useState, useEffect } from "react";
import { api } from "../api";

import { getAllUsersFromApi } from "./../services/userService";
export const useUser = () => {
  const { getALLUsersApi } = api;
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const {
        data: { persons },
      } = await getAllUsersFromApi(getALLUsersApi);
      setUsers([...persons]);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { users };
};
