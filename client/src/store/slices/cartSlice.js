import { createAction, createSlice } from "@reduxjs/toolkit";
import { setWithExpiry, getWithExpiry } from "../../utils/setStorage";

export const setCartItemsError = createAction("setCartItemsError");

const localCartItems = getWithExpiry("cartItems")
  ? getWithExpiry("cartItems")
  : [];

const initialValue = {
  cartItems: localCartItems,
};

const cartSlice = createSlice({
  name: "CartSlice",
  initialState: initialValue,
  reducers: {
    setCartItems: (state, action) => {
      console.log(action.payload, "waht is the cart payload");
      setWithExpiry("cartItems", state.cartItems, 900000);
      return {
        ...state,
        cartItems: [...action.payload.items],
      };
    },
    addToCart: (state, action) => {
      const exitingCartProdIndex = state.cartItems.findIndex(
        (item) => item?._id === action.payload?._id
      );
      if (exitingCartProdIndex >= 0) {
        state.cartItems[exitingCartProdIndex].quantity += 1;
      } else {
        //constructs a new object with quantity key
        let cartItem = { ...action.payload, quantity: 1 };
        state.cartItems.push(cartItem);
        setWithExpiry("cartItems", state.cartItems, 900000);
      }
    },
    removeItem: (state, action) => {
      console.log(action.payload, "remove tty");
      const updatedCartItems = state.cartItems.filter(
        (item) => item?._id !== action.payload?._id
      );
      state.cartItems = updatedCartItems;
      setWithExpiry("cartItems", state.cartItems, 900000);
    },
    clearAllCart: (state) => {
      state.cartItems = [];
      setWithExpiry("cartItems", state.cartItems, 900000);
    },
    incrementQty: (state, action) => {
      console.log(action.payload, "add cartItem qu");
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item?._id === action.payload?._id
      );

      console.log(existingCartItemIndex, "add cartItem tty");
      if (existingCartItemIndex >= 0) {
        state.cartItems[existingCartItemIndex].quantity += 1;
      }
      // state.cartItems = "updatedCartItems";
      setWithExpiry("cartItems", state.cartItems, 900000);
    },
    decrementQty: (state, action) => {
      console.log(action.payload, "minus cartItem tty");
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item?._id === action.payload?._id
      );

      console.log(existingCartItemIndex, "minus cartItem tty");

      if (existingCartItemIndex >= 0) {
        state.cartItems[existingCartItemIndex].quantity -= 1;
      }

      if (state.cartItems[existingCartItemIndex].quantity === 0) {
        state.cartItems.splice(existingCartItemIndex, 1);
      }

      setWithExpiry("cartItems", state.cartItems, 900000);
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearAllCart,
  incrementQty,
  decrementQty,
  setCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;
