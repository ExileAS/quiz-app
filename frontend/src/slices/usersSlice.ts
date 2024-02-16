import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    login(state, action) {
      state.isLogged = true;
      return state;
    },
    logout(state, action) {
      state.isLogged = false;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
