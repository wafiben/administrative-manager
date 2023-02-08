import React from "react";
import InputFieald from "../../atoms/Input";
import Form from "react-bootstrap/Form";
import CustomButton from "../../atoms/Button";
import { formStyle } from "../../styles/styles";

function AddUser() {
  return (
    <Form style={formStyle}>
      <InputFieald
        type={"text"}
        placeholder="type your name"
        titelFieald="username"
      />
      <InputFieald
        type={"number"}
        placeholder="type your age"
        titelFieald="age"
      />
      <CustomButton type="submit" title="submit" variant={"primary"} />
    </Form>
  );
}

export default AddUser;
