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
  },
});

export default bookSlice.reducer;
export const { updateBook } = bookSlice.actions;
export const { addBook } = bookSlice.actions;
