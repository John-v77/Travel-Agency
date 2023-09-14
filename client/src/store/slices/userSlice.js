import {
  createAction,
  createSlice,
} from "@reduxjs/toolkit";
import {
  loginUser,
  registerUser,
} from "../actions/authActions";
import { getWithExpiry } from "../../utils/setStorage";

export const addFavoritesError = createAction(
  "addFavoritesError"
);

const savedUserInfo = getWithExpiry("userInfo")
  ? getWithExpiry("userInfo")
  : null;
const savedToken = getWithExpiry("userToken")
  ? getWithExpiry("userToken")
  : null;

const initialValue = {
  isLoading: false,
  userInfo: savedUserInfo,
  userToken: savedToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialValue,
  reducers: {
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
    addFavorites: (state, action) => {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          favorites: [...action.payload],
        },
      };
    },
  },
  extraReducers: (builder) => {
    // 1 login user
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(
        loginUser.fulfilled,
        (state, { payload }) => {
          console.log(
            payload.data.user,
            "what is the payload MMJ"
          );
          state.isLoading = false;
          state.success = true;
          state.userInfo = payload.data.user;
          state.userToken = payload.token;
        }
      )

      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // 2 register user
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.success = true;
          state.userInfo = payload;
          state.userToken = payload.token;
        }
      )
      .addCase(
        registerUser.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const { logOut, addFavorites } = authSlice.actions;

export default authSlice.reducer;
