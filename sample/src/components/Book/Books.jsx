import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      <h1>Books</h1>
      <Link to ='/addBook'>Add Book</Link>
      {/* table to display books */}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Author</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* map through books and display them in the table */}
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <td>{book.id}</td>
                <td>{book.bname}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>
                  {/* <button>Edit</button> */}
                  <Link to={`/updateBook/${book.id}`}>Edit</Link>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
