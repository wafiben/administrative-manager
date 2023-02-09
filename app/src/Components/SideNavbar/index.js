import React, { useState, useEffect } from "react";
import Radio from "../../atoms/radio";
import Form from "react-bootstrap/Form";
import { SideBarStyle } from "../../styles/styles";
import CustomButton from "../../atoms/Button";
import { useUser } from "../../hooks/useUser";

function SideBar() {
  const { handleClick, state } = useUser();
  return (
    <Form style={SideBarStyle}>
      <CustomButton title="add user" />
      {state.map(({ id, val, checked }) => (
        <Radio
          key={id}
          handleClick={handleClick}
          type={"radio"}
          label={val}
          value={val}
          checked={checked}
          id={id}
        />
      ))}
      {/*   {console.log("sssssssss", filtered)} */}
      {/*  <Radio
        type={"radio"}
        label={"0-18"}
        value={state[0].val}
        handleClick={handleClick}
        checked={state[0].checked}
        id={state[0].id}
      />

      <Radio
        type={"radio"}
        label={"18-30"}
        value={state[1].val}
        handleClick={handleClick}
        checked={state[1].checked}
        id={state[1].id}
      />
      <Radio
        type={"radio"}
        label={"+30"}
        value={state[2].val}
        handleClick={handleClick}
        checked={state[2].checked}
        id={state[2].id}
      /> */}
    </Form>
  );
}

export default SideBar;
