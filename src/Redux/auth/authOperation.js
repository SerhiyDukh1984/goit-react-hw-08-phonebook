import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from 'api/api';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const registerUserData = await registerUserApi(userData);
      return registerUserData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData, thunkApi) => {
    try {
      const loginUserData = await loginUserApi(userData);
      return loginUserData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
