import { createSlice } from '@reduxjs/toolkit';
import {
  getCurUser,
  loginUser,
  registerUser,
  logoutUser,
} from './authOperation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    isLoading: false,
    error: null,
    token: null,
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
      const { token, user } = payload;
      console.log('🚀 ~ payload', payload);

      state.isLoading = false;
      state.user = user;
      state.token = token;
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCurUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    },
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logoutUser.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: state => {
      state.isLoading = false;
      state.user = {
        name: null,
        email: null,
      };
      state.token = null;
    },
    [logoutUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

// export const { logOut } = authSlice.actions;
export default authSlice.reducer;
