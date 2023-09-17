import { createAsyncThunk } from "@reduxjs/toolkit";
import apiActions from "../../utils/api";

export const addProdToFavorites = createAsyncThunk(
  "auth/addFav",
  async ({ userId, prodId }, thunkApi) => {
    console.log(userId, prodId, "is this working? jk$");
    try {
      const data = await apiActions.addProdToUserFav(
        userId,
        prodId
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
