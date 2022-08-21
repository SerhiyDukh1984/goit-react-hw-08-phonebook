import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authOperation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    isAuth: false,
    isLoading: false,
    error: null,
    token: null,
  },
  reducers: {
    authToggle(state) {
      state.isAuth = !state.isAuth;
    },
  },
  extraReducers: {
    [registerUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { token, ...rest } = payload;
      state.isLoading = false;
      state.user = rest;
      state.isAuth = true;
      state.token = token;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { token, ...rest } = payload;
      state.isLoading = false;
      state.user = rest;
      state.isAuth = true;
      state.token = token;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { authToggle } = authSlice.actions;
export default authSlice.reducer;
