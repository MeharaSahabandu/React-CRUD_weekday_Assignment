import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateBook } from "./BookReducer";

export default function UpdateBooks() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const existingBook = books.filter(f => f.id == id)
  const { bname, author, price } = existingBook[0];
  const dispatch = useDispatch();

  const [uname, setUname] = useState(bname);
  const [uauthor, setUAuthor] = useState(author);
  const [uprice, setPrice] = useState(price);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateBook({
        id,
        bname: uname,
        author: uauthor,
        price: uprice,
      })
    );
    navigate("/");
  };


  return (
    <div>
      <h1>Update Books</h1>
      <form onSubmit={handleUpdate}>
        <label>Book Name</label>
        <input
          type="text"
          name="name"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
        />
        <br />
        <br />
        <label>Author</label>
        <input
          type="text"
          name="author"
          value={uauthor}
          onChange={(e) => setUAuthor(e.target.value)}
        />
        <br />
        <br />
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={uprice}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
