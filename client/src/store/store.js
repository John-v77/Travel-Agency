import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from "./slices/counterSlice";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

const reducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
  products: productSlice,
  cart: cartSlice,
});

export const store = configureStore({
  reducer: reducer,
});
