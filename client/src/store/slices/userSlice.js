import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../actions/authActions';

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
      loginUser().then((res) => {
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
    signUp: (state) => {
      registerUser().then((res) => {
        // history.pushState('/');
      });
    },
  },
  extraReducers: {
    // 1 login user
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.success = true;
      state.userInfo = payload;
      state.userToken = payload.token;
    },

    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    // 2 register user

    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.success = true;
      state.userInfo = payload;
      state.userToken = payload.token;
    },

    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
