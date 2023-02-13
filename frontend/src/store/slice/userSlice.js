import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  accessTime: null,
  refreshToken: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    LOGIN_TOKEN: (state, action) => {
      console.log(action.payload);
      state.accessToken = action.payload[0];
      state.refreshToken = action.payload[1];
    },

    LOG_OUT: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },

    WITH_DRAW: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const { LOGIN_TOKEN, LOG_OUT, WITH_DRAW } =
  userSlice.actions;
export default userSlice;
