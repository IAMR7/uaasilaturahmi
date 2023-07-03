import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    // eslint-disable-next-line no-unused-vars
    clearUser: (state) => {
      return null;
    },
  },
});

export const { setUser, clearUser, setToken, fetchUser } = userSlice.actions;
export default userSlice.reducer;
