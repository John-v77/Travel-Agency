import { createAsyncThunk } from "@reduxjs/toolkit";
import apiActions from "../../api";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    // console.log('thunk2', email, password);
    try {
      const data = await apiActions.loginUser(email, password);
      console.log("thunk step 1, data::", data);
      localStorage.setItem("userToken", data.token);

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
  "auth/register22",
  async ({ name, email, password }, { rejectWithValue }) => {
    console.log("thunk - register", name, email, password);
    try {
      const data = await apiActions.registerUser(name, email, password);
      console.log("thunk register - data::", data);
      localStorage.setItem("userToken", data.token);

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
