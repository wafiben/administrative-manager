import React from "react";
import Form from "react-bootstrap/Form";
import { useUser } from "../hooks/useUser";
function Radio({ type, label, style, handleClick, value, checked, id }) {
  return (
    <Form.Check
      type={type}
      label={label}
      style={style}
      onChange={() => handleClick(id)}
      value={value}
      checked={checked}
    />
  );
}

export default Radio;
