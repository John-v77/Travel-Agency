import { createSlice } from '@reduxjs/toolkit';
import actions from '../api';
import { loginUser } from './actions/authActions';

const initialValue = {
  isLoading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialValue,
  reducers: {
    login: (state) => {
      actions.loginUser().then((res) => {
        console.log(res, 'this is the responseXXXXXXXX');
        // history.pushState('/');
      });
    },
  },
  extraReducers: {
    // login user
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },

    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
