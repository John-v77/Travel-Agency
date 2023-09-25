import { createAction, createSlice } from "@reduxjs/toolkit";

export const setProductsError = createAction("setProductsError");

const initialValue = {
  products: [],
  searchedProducts: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialValue,

  reducers: {
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
