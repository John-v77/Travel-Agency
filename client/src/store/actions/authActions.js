import { createAsyncThunk } from '@reduxjs/toolkit';
import actions from '../../api';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    console.log('thunk2', email, password);
    try {
      const data = await actions.loginUser(email, password);
      console.log('thunk step 1, data::', data);
      localStorage.setItem('userToken', data.token);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
