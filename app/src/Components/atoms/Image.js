import React from "react";
import Card from "react-bootstrap/Card";

function Image({src}) {
  return <Card.Img variant="top" src={src} />;
}

export default Image;
