import React from "react";

const Button = ({ changeShow, show }) => {
  const setShow = () => {
    changeShow();
  };
  const Show = {
    color: 'white',
    backgroundColor: 'black',
  };
  const Hide = {
    color: 'black',
    backgroundColor: 'white',
  };

  return (
    <>
      <button className="btn" onClick={setShow} style={show ? Show : Hide}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
  
};

export default Button;
