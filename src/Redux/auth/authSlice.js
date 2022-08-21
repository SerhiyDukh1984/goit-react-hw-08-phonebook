import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './authOperation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    isLoading: false,
    error: null,
    user: {
      token: null,
      name: null,
      email: null,
    },
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
      state.isLoading = false;
      state.user = payload;
      state.isAuth = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { authToggle } = authSlice.actions;
export default authSlice.reducer;
