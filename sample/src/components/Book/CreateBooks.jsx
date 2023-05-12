import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addBook} from "./BookReducer"


export default function CreateBooks() {
  const [bname, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({ id: books[books.length - 1].id + 1, bname, author, price })
    );
    navigate("/");
  };

  return (
    <div>
      <h2>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <label>Book Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setBookName(e.target.value)}
        />
        <br />
        <br />
        <label>Author</label>
        <input
          type="text"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <br />
        <label>Price</label>
        <input
          type="text"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
