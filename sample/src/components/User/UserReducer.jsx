import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./UserData";

const userSlice = createSlice({
  name: "users",
  initialState: UserList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email, phone, books } = action.payload;
      const uu = state.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
        uu.phone = phone;
        uu.books = books;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const du = state.find((user) => user.id == id);
      return state.filter((user) => user.id !== du.id);
    },
  },
});

export default userSlice.reducer;
export const { deleteUser } = userSlice.actions;
export const { addUser } = userSlice.actions;
export const { updateUser } = userSlice.actions;
