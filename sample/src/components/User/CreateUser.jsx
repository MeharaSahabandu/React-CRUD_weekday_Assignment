import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./UserReducer";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [books, setBooks] = useState("");
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users [users.length-1].id+1,name, email, phone, books }));
    navigate("/");
  };


  return (
    <div>
      <h1>Create User</h1>
      {/* form to get user details */}
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <br />
        <label>Books</label>
        <input
          type="text"
          name="books"
          onChange={(e) => setBooks(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
