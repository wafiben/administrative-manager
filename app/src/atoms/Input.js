import React from "react";

import Form from "react-bootstrap/Form";

function InputFieald({ titelFieald, type, placeholder, handleChange, style }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail" style={style}>
      <Form.Label>{titelFieald}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default InputFieald;
