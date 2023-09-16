import { createAsyncThunk } from "@reduxjs/toolkit";
import apiActions from "../../utils/api";
import { setWithExpiry } from "../../utils/setStorage";

export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email, password, "is this working? jk$");
    try {
      const data = await apiActions.loginUser(
        email,
        password
      );

      console.log("thunk1 - login::", data);
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
  async (
    { name, email, password },
    { rejectWithValue }
  ) => {
    console.log("thunk - register", name, email, password);
    try {
      const data = await apiActions.registerUser(
        name,
        email,
        password
      );
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
