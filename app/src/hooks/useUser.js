import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "./../redux/actions";
import { getUserByName } from "../api/users";

export const useUser = () => {
  const usersFromRedux = useSelector((state) => state.users);
  const [searchNameInput, setSearchName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getUserByName(searchNameInput);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  return { users: usersFromRedux, setSearchName, handleSubmit };
};
