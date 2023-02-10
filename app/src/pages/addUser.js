import React from "react";
import InputField from "../../atoms/Input";
import Form from "react-bootstrap/Form";
import CustomButton from "../../atoms/Button";
import { formStyle } from "../styles/global";

function AddUser() {
  return (
    <Form style={formStyle}>
      <InputField
        type={"text"}
        placeholder="type your name"
        titelFieald="username"
      />
      <InputField
        type={"number"}
        placeholder="type your age"
        titelFieald="age"
      />
      <CustomButton type="submit" title="submit" variant={"primary"} />
    </Form>
  );
}

export default AddUser;
