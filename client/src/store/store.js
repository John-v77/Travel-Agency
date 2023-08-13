import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import counterSlice from "./slices/counterSlice";
import userSlice from "./slices/userSlice";

const reducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: reducer,
});
