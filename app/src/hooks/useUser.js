import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "./../redux/actions";
export const useUser = () => {
  const usersFromRedux = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);
  return { usersFromRedux };
};
