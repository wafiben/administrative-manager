import React from "react";
import TitleCard from "../../atoms/Title";
import CustomButton from "../../atoms/Button";
import Card from "react-bootstrap/Card";
import Description from "../../atoms/Paraghraph";
import { formStyle } from "../../styles/styles";
const styleForm = { ...formStyle, width: "18rem" };
function CardCustom({ user }) {
  return (
    <Card style={styleForm}>
      <TitleCard title={user.userName} />
      <Description content={user.age} />
      <CustomButton title="show details" variant="success" />
    </Card>
  );
}

export default CardCustom;
