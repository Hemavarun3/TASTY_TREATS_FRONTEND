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
      state._id = action.payload.data.user._id;
      state.name = action.payload.data.user.name;
      state.address = action.payload.data.user.address;
      state.email = action.payload.data.user.email;
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
