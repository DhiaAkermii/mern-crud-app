import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import StudentComponent from "./Components/StudentComponent";
import FormStudentComponent from "./Components/FormStudentComponent";
import React from "react";

function App() {
  return (
    <div className="">
      <div className="App">
        <h6>Ⓒ Dhia Akermi</h6>
      </div>
      <div className="left">
        <div className="App">
          <h1>The list of students</h1>
        </div>
        <StudentComponent></StudentComponent>
      </div>
      <div className="right">
        <div className="App">
          <h1>Create new student</h1>
        </div>
        <FormStudentComponent></FormStudentComponent>
      </div>
    </div>
  );
}

export default App;
