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
        // history.pushState('/');
      });
    },

    logOut: (state) => {
      return {
        ...state.initialState,
        isLoading: false,
        userInfo: null,
        userToken: null,
        error: null,
        success: false,
      };
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
      state.userToken = payload.token;
    },

    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
