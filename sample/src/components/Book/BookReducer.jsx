import { createSlice } from "@reduxjs/toolkit";
import { BookList } from "./BookData";

const bookSlice = createSlice({
  name: "books",
  initialState: BookList,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, bname, author, price } = action.payload;
      const ub = state.find((book) => book.id == id);
      if (ub) {
        ub.bname = bname;
        ub.author = author;
        ub.price = price;
      }
    },

    deleteBook: (state, action) => {
      const { id } = action.payload;
      const db = state.find((book) => book.id == id);
      return state.filter((book) => book.id !== db.id);
    },
  },
});

export default bookSlice.reducer;
export const { updateBook } = bookSlice.actions;
export const { addBook } = bookSlice.actions;
export const { deleteBook } = bookSlice.actions;
