import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  image: "",
  address : "",
  _id: "",
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
      state.image = "";
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.name = "";
      state.address = "";
      state.email = "";
      state.image = "";
    },
  },
});

export const { loginRedux ,logoutRedux} = userSlice.actions;

export default userSlice.reducer;
