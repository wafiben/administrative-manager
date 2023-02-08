import React from "react";
import Button from "react-bootstrap/Button";

function CustomButton({ type, title, variant,style }) {
  return (
    <Button type={type} variant={variant}>
      {title}
    </Button>
  );
}

export default CustomButton;
