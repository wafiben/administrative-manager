import React from "react";
import { useUser } from "../../hooks/useUser";
import CardCustom from "./card";
import { listStyle } from "../../styles/styles";

function List() {
  const { users } = useUser();

  return (
    <div style={listStyle}>
      {users.map((user) => (
        <CardCustom user={user} key={user._id} />
      ))}
    </div>
  );
}

export default List;
