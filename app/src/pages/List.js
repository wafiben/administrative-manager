import React from "react";
import { useUser } from "../hooks/useUser";
import { listStyle } from "../styles/global";
import { formStyle } from "../styles/global";
import Card from "react-bootstrap/Card";
import TitleCard from "../../atoms/Title";
import CustomButton from "../../atoms/Button";
import Description from "../../atoms/Paraghraph";

function List() {
  const {  usersFromRedux } = useUser();

  return (
    <div style={listStyle}>
      {usersFromRedux.map((user) => (
        <Card key={user._id} style={formStyle}>
          <TitleCard title={user.userName} />
          <Description content={user.age} />
          <CustomButton title="show details" variant="success" />
        </Card>
      ))}
    </div>
  );
}

export default List;
