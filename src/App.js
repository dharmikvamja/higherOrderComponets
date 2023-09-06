import React from "react";
import Student from "./student1"; // Correct the import statement

import "./styles.css";
import Student2 from "./student2";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Student /> 
      <Student2 />
    </div>
  );
}
