import React from "react";
import Radio from "../../atoms/radio";
import Form from "react-bootstrap/Form";
import { SideBarStyle } from "../../styles/styles";
import CustomButton from "../../atoms/Button";
import SearchBloc from "./searchBloc";
import { useUser } from "../../hooks/useUser";

function SideBar() {
  const { checkboxList, handleClick } = useUser();
  return (
    <Form style={SideBarStyle}>
      <SearchBloc />
      <CustomButton title="add user" />
      {checkboxList.map(({ id, val, checked }) => (
        <Radio
          key={id}
          type={"radio"}
          label={val}
          id={id}
          checked={checked}
          handleClick={handleClick}
          value={val}
        />
      ))}
    </Form>
  );
}

export default SideBar;
