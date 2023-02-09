import React from "react";
import { useUser } from "../../hooks/useUser";
import CardCustom from "./card";
import { listStyle } from "../../styles/styles";

function List() {
  const {  usersFromRedux } = useUser();
  return (
    <div style={listStyle}>
      {usersFromRedux.map((user) => (
        <CardCustom user={user} key={user._id} />
      ))}
    </div>
  );
}

export default List;
