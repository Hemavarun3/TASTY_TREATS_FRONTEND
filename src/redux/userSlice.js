import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  image: "",
  address : "",
  _id: "",
  isAdmin : false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state._id = action.payload._id;
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.email = action.payload.email;
      state.isAdmin =action.payload.isAdmin;
      state.image = "";
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.name = "";
      state.address = "";
      state.email = "";
      state.image = "";
      state.isAdmin = false
    },
  },
});

export const { loginRedux ,logoutRedux} = userSlice.actions;

export default userSlice.reducer;
