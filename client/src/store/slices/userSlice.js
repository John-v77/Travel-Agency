import { createAction, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions/authActions";
import { getWithExpiry } from "../../utils/setStorage";

export const addFavoritesError = createAction("addFavoritesError");

// const items = sessionStorage.getItem("cartItems") !== null ? JSON.parse(sessionStorage.getItem("cartItems")) : [];
// const totalAmount = sessionStorage.getItem("totalAmount") !== null ? JSON.parse(sessionStorage.getItem("totalAmount")) : 0;
// const totalQty = sessionStorage.getItem("totalQty") !== null ? JSON.parse(sessionStorage.getItem("totalQty")) : 0;

// sessionStorage.setItem("cartItems", JSON.stringify(state.cartItems.map((item) => item)));
// sessionStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
// sessionStorage.setItem("totalqty", JSON.stringify(state.totalqty));

// setItemFunc = (item, totalAmount, totalQty){

// }
//
//

const savedUserToken = getWithExpiry("userToken") ?? getWithExpiry("userToken");
const savedUserName = getWithExpiry("userName") ?? getWithExpiry("userName");
const savedUserFavorites = getWithExpiry("userFavorites") ? getWithExpiry("userFavorites") : [];

console.log(savedUserToken, "userToken user slice");

const initialValue = {
  isLoading: false,
  userInfo: null,
  userName: savedUserName,
  userToken: savedUserToken,
  error: null,
  success: false,
  favorites: [],
};

const authSlice = createSlice({
  name: "auth",
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

    addFavorites: (state, action) => {
      return { ...state, favorites: [...action.payload] };
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
      state.userName = payload.userName;
      state.userToken = payload.token;
      state.favorites = payload.favorites;
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

export const { logOut, addFavorites } = authSlice.actions;

export default authSlice.reducer;
