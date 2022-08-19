import { createAsyncThunk } from '@reduxjs/toolkit';
import { registerUserApi } from 'api/api';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, thunkApi) => {
    try {
      const postedUserData = await registerUserApi(userData);
      return postedUserData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
