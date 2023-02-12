import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAction,
  searchUserByNameAction,
  searchUserByAgeAction,
} from "./../redux/actions";

export const useUser = () => {
  const usersFromRedux = useSelector((state) => state.users);
  const [searchNameInput, setSearchName] = useState("");
  const [checkboxList, setCheckboxList] = useState([
    { id: 0, val: "0-18", checked: false },
    { id: 1, val: "18-30", checked: false },
    { id: 2, val: "+30", checked: false },
  ]);
  const [params, setParams] = useState({ min: "", max: "" });
  const handleClick = (Id) => {
    let foudsChecked = checkboxList.filter((elt) => elt.checked);
    if (foudsChecked.length === 0) {
      let temp = checkboxList.map((elt) => {
        if (elt.id === Id) {
          const min = elt.val.split("-")[0];
          const max = elt.val.split("-")[1];
          setParams({ min, max });
          return { ...elt, checked: true };
        } else {
          return elt;
        }
      });
      setCheckboxList(temp);
    } else if (foudsChecked.length === 1) {
      let tem = checkboxList.map((elt) => {
        if (elt.id !== Id && elt.checked) {
          return { ...elt, checked: false };
        } else if (elt.id === Id && !elt.checked) {
          const min = elt.val.split("-")[0];
          const max = elt.val.split("-")[1];
          setParams({ min, max });
          return { ...elt, checked: true };
        } else if (elt.id === Id && elt.checked) {
          return { ...elt, checked: false };
        } else {
          return elt;
        }
      });
      setCheckboxList(tem);
    }
  };
  useEffect(() => {
    dispatch(searchUserByNameAction({ params: { letter: searchNameInput } }));
    dispatch(searchUserByAgeAction({ params }));
  }, [searchNameInput, checkboxList, params]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);
  return { usersFromRedux, setSearchName, checkboxList, handleClick };
};
