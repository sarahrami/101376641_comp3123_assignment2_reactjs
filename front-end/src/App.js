import React, { useState, useEffect } from "react";
import "./App.css";
import Home from './components/Home';
import Login from './components/Login';
import Employee from "./components/Employee";
import Add from "./components/Add";
import Update from "./components/Update";

function App() {



  return (
    <div className="App">
      <h2 className="head">Employee Management App </h2>
      <Employee/>
    </div>
  );
}

export default App;
