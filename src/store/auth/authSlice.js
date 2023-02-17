import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: "",
    isAuthorized: false,
  },
  reducers: {
    login(state, action) {
      state.email = action.payload;
      state.isAuthorized = true;
    },
    logout(state) {
      state.email = "";
      state.isAuthorized = false;
    },
  },
});

export const authActions = authSlice.actions;
