import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../api";
import { getAllUsersFromApi, serchAge } from "./../services/userService";
export const useUser = () => {
  const { getALLUsersApi, filterByAgeApi } = api;
  const [users, setUsers] = useState([]);
  const [state, setState] = useState([
    { id: 0, val: "0-18", checked: false, type: "radio" },
    { id: 1, val: "18-30", checked: false, type: "radio" },
    { id: 2, val: "+30", checked: false, type: "radio" },
  ]);
  const [filtered, setFiltered] = useState([]);
  const [max, setMax] = useState(null);
  const [min, setMin] = useState(null);

  const [searchedUsers, setSearchedUsers] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        const {
          data: { searchedPersons },
        } = await axios.get(filterByAgeApi, {
          params: { max: max, min: min },
        });
        setSearchedUsers([...searchedPersons]);
      } catch (e) {
        console.log(e);
      }
    };

    let x = state.find((elt) => elt.checked === true);
    setFiltered(x);
    if (filtered) {
      let tableMinMax = filtered.val;
      switch (tableMinMax) {
        case "0-18":
          setMax("18");
          setMin("0");
          search();
          break;
        case "18-30":
          setMax("30");
          setMin("18");
          search();
          break;
        case "+30":
          setMax("120");
          setMin("30");
          search();
          break;
        default:
          setMax(null);
          setMin(null);
      }
    } else {
      setMax(null);
      setMin(null);
    }
  }, [state, filtered, max, min, filterByAgeApi]);

  const handleClick = (id) => {
    let found = state.filter((elt) => elt.checked === true);
    if (found.length === 0) {
      const x = state.map((elt) => {
        if (elt.id === id && elt.checked === false) {
          return { ...elt, checked: true };
        } else {
          return elt;
        }
      });
      setState(x);
    } else if (found.length === 1) {
      let temp = state.map((elt) => {
        if (elt.checked === true) {
          return { ...elt, checked: false };
        } else if (elt.id === id && elt.checked === false) {
          return { ...elt, checked: true };
        } else {
          return elt;
        }
      });
      setState(temp);
    }
  };

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

  return { users, handleClick, state, searchedUsers };
};
