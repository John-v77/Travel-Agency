import { createSlice } from "@reduxjs/toolkit";
import { setWithExpiry, getWithExpiry } from "../../utils/setStorage";

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
    addToCart: (state, action) => {
      console.log(action.payload, "assit car");

      console.log(state.cartItems, "statej");

      const exitingCartProdIndex = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?.product?._id
      );

      if (exitingCartProdIndex >= 0) {
        state.cartItems[exitingCartProdIndex].qty += 1;
      } else {
        //constructs a new object with qty key
        let cartItem = { ...action.payload, qty: 1 };
        console.log(cartItem, "xxkd");
        state.cartItems.push(cartItem);
        setWithExpiry("cartItems", state.cartItems, 900000);
      }
    },
    removeItem: (state, action) => {
      console.log(action.payload, "remove tty");
      const updatedCartItems = state.cartItems.filter(
        (item) => item?.product?._id !== action.payload?._id
      );
      state.cartItems = updatedCartItems;
      setWithExpiry("cartItems", state.cartItems, 900000);
    },
    clearAllCart: (state) => {
      state.cartItems = [];
      setWithExpiry("cartItems", state.cartItems, 900000);
    },
    incrementQty: (state, action) => {
      console.log(action.payload, "add cartItem tty");
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?._id
      );

      console.log(existingCartItemIndex, "add cartItem tty");
      if (existingCartItemIndex >= 0) {
        state.cartItems[existingCartItemIndex].qty += 1;
      }
      // state.cartItems = "updatedCartItems";
      setWithExpiry("cartItems", state.cartItems, 900000);
    },
    decrementQty: (state, action) => {
      console.log(action.payload, "add cartItem tty");
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?._id
      );

      console.log(existingCartItemIndex, "add cartItem tty");

      if (existingCartItemIndex >= 0) {
        state.cartItems[existingCartItemIndex].qty -= 1;
      }

      if (state.cartItems[existingCartItemIndex].qty === 0) {
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
} = cartSlice.actions;

export default cartSlice.reducer;
