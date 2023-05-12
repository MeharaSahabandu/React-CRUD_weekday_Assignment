import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./UserData";

const userSlice = createSlice({
    name: "users",
    initialState: UserList,
    reducers: {}
});

export default userSlice.reducer;