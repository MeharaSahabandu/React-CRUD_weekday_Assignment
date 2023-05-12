import React from "react";

export default function CreateBooks() {
  return (
    <div>
      <h2>Add Books</h2>
      <form>
        <label>Book Name</label>
        <input type="text" name="name" />
        <br />
        <br />
        <label>Author</label>
        <input type="text" name="author" />
        <br />
        <br />
        <label>Price</label>
        <input type="text" name="price" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
