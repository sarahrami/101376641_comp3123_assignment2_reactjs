import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Employee from "./components/Employee";
import Add from "./components/Add";
import Update from "./components/Update";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import View from "./components/View";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <h2 className="head">Employee Management App </h2>
 
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/signup"  element={<Signup />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
