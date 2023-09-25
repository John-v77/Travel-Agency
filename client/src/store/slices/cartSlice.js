import { createSlice } from "@reduxjs/toolkit";

const localCartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
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

        localStorage.setItem(
          "cartItems",
          JSON.stringify(state.cartItems)
        );
      }
    },
    removeItem: (state, action) => {
      console.log(action.payload, "remove tty");
      const updatedCartItems = state.cartItems.filter(
        (item) => item?.product?._id !== action.payload?._id
      );
      state.cartItems = updatedCartItems;
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
    },
    clearAllCart: (state) => {
      state.cartItems = [];
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
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
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
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

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems)
      );
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
