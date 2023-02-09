import React, { useState } from "react";
import Radio from "../../atoms/radio";

function RadioGroup() {
  const [state, setState] = useState([
    { id: 0, val: "0-18", checked: false, type: "radio" },
    { id: 1, val: "18-30", checked: false, type: "radio" },
    { id: 2, val: "+30", checked: false, type: "radio" },
  ]);
  return <div>RadioGroup</div>;
}

export default RadioGroup;
