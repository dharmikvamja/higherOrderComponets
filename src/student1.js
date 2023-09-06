// Student.js
import React from "react";
import Hoc from "./Hoc";

const Student = (props) => {
  return (
    <>
      <h1>count: {props.value}</h1>
      <button onClick={props.changeNum}>increment</button>
    </>
  );
};

export default Hoc(Student);