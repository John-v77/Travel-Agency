import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterSlice from './slices/counterSlice';
import userSlice from './slices/userSlice';
import shoppingCartSlice from './slices/shoppingCartSlice';

const reducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
  cart: shoppingCartSlice,
});

export const store = configureStore({
  reducer: reducer,
});
