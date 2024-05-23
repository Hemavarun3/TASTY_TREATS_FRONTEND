import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  image: "",
  lastName: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      //console.log(action.payload.data.user);
      state._id = action.payload.data.user._id;
      state.firstName = action.payload.data.user.firstName;
      state.lastName = action.payload.data.user.lastName;
      state.email = action.payload.data.user.email;
      state.image = "";
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
    },
  },
});

export const { loginRedux ,logoutRedux} = userSlice.actions;

export default userSlice.reducer;
