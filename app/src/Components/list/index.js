import React from "react";
import { useUser } from "../../hooks/useUser";
import CardCustom from "./card";
import { listStyle } from "../../styles/styles";

function List() {
  const { users, searchedUsers } = useUser();

  return (
    <div style={listStyle}>
      {users.map((user) => (
        <CardCustom user={user} key={user._id} />
      ))}
      <hr />
      {searchedUsers.map((user) => (
        <CardCustom user={user} key={user._id} />
      ))}
    </div>
  );
}

export default List;
