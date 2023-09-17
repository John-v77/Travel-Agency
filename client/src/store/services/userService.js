import { createAsyncThunk } from "@reduxjs/toolkit";
import apiActions from "../../utils/api";

export const addProdToFavorites = createAsyncThunk(
  "auth/addFav",
  async ({ userId, prodId }, thunkApi) => {
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

export const removeProdFromFavorites = createAsyncThunk(
  "auth/removeFav",
  async ({ userId, prodId }, thunkApi) => {
    console.log(
      userId,
      prodId,
      "removign items from fav working? jk$"
    );
    try {
      const data = await apiActions.removeProdFromUserFav(
        userId,
        prodId
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
