import { createAsyncThunk } from "@reduxjs/toolkit";
import apiActions from "../../utils/api";
import { setWithExpiry } from "../../utils/setStorage";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await apiActions.loginUser(email, password);

      setWithExpiry("userToken", data.token, 900000);
      setWithExpiry("userInfo", data.data.user, 900000);

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

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const data = await apiActions.registerUser(
        name,
        email,
        password
      );

      setWithExpiry("userToken", data.token, 900000);
      setWithExpiry("userInfo", data.data.user, 900000);

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
