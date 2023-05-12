import {createSlice } from "@reduxjs/toolkit";
import { BookList } from "./BookData";


const bookSlice = createSlice({
    name: "books",
    initialState: BookList,
    reducers: {}
});

export default bookSlice.reducer;