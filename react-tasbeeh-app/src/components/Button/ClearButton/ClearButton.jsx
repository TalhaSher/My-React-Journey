import React from "react";
import './ClearButton.css'
const ClearButton = ({clear}) => {
  return (
    <button className="ClearButton" onClick={clear}>
      <span> Clear </span>
      <i></i>
    </button>
  );
};

export default ClearButton;
