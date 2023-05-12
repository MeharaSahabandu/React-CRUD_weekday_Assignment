import { useState } from "react";
import "./App.css";
import Users from "./components/User/Users";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Books from "./components/Book/Books";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <><Users /><Books/></>} />
      </Routes>
    </Router>
  );
}

export default App;
