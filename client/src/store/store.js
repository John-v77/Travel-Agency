import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterSlice from './counterSlice';
import userSlice from './userSlice';

const reducer = combineReducers({
  counter: counterSlice,
  user: userSlice,
});

export const store = configureStore({
  reducer: reducer,
});