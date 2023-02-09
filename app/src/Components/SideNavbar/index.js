import React from "react";
import Radio from "../../atoms/radio";
import Form from "react-bootstrap/Form";
import { SideBarStyle } from "../../styles/styles";
import CustomButton from "../../atoms/Button";
import SearchBloc from "./searchBloc";

function SideBar() {
  return (
    <Form style={SideBarStyle}>
      <SearchBloc />
      <CustomButton title="add user" />
      <Radio type={"radio"} label={"0-18"} />
      <Radio type={"radio"} label={"18-30"} />
      <Radio type={"radio"} label={"+30"} />
    </Form>
  );
}

export default SideBar;
