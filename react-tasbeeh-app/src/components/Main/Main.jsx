import React from "react";
import Counter from "../Counter/Counter";
import "./Main.css";
import Header from "../Header/Header";
import ButtonMain from "../Button/ButtonMain";

const Main = ({ count,add,clear }) => {
  return (
    <div className="main">
      <Header />
      <Counter count={count} />
      <ButtonMain add={add} clear={clear}/>
    </div>
  );
};

export default Main;
