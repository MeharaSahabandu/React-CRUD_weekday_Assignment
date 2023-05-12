import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./UserData";

const userSlice = createSlice({
  name: "users",
  initialState: UserList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default userSlice.reducer;
export const { addUser } = userSlice.actions;
