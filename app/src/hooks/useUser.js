import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "./../redux/actions";
import axios from "axios";
import { api } from "../api";
export const useUser = () => {
  const { searchByName } = api;
  const usersFromRedux = useSelector((state) => state.users);
  const [searchNameInput, setSearchName] = useState("");
  const search = async () => {
    const params = { params: { letter: searchNameInput } };
    try {
      await axios.get(searchByName, params);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);
  return { usersFromRedux, setSearchName, handleSubmit };
};
