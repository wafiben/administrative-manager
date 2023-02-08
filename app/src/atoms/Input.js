import React from "react";

import Form from "react-bootstrap/Form";

function InputFieald({ titelFieald, type, placeholder }) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{titelFieald}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  );
}

export default InputFieald;
