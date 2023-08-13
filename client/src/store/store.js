import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from "./slices/counterSlice";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice";

const reducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
  products: productSlice,
});

export const store = configureStore({
  reducer: reducer,
});
