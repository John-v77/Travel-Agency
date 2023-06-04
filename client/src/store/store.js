import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import counterSlice from './counterSlice';

const reducer = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({
  reducer: reducer,
});
