import { useState } from "react";
import "./App.css";
import Users from "./components/User/Users";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Books from "./components/Book/Books";
import CreateUser from "./components/User/CreateUser";
import CreateBook from "./components/Book/CreateBooks";
import UpdateBooks from "./components/Book/UpdateBooks";
import UpdateUser from "./components/User/UpdateUser";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <><Users /><Books/></>} />
        <Route path="/addUser" element={<CreateUser />} />
        <Route path="/addBook" element={<CreateBook />} />
        <Route path="/updateBook/:id" element={<UpdateBooks />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
