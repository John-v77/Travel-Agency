import { createSlice } from '@reduxjs/toolkit';

const initialValue = { coin: 10 };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.coin += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
