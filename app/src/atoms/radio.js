import React from "react";
import Form from "react-bootstrap/Form";
function Radio({ type, label, style }) {
  return <Form.Check type={type} label={label} style={style} />;
}

export default Radio;
