import { createSlice } from "@reduxjs/toolkit";
import { BookList } from "./BookData";

const bookSlice = createSlice({
  name: "books",
  initialState: BookList,
  reducers: {
    addBook: (state, action) => {
      //   state.push(action.payload);
      console.log(action);
      state.push(action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { addBook } = bookSlice.actions;
