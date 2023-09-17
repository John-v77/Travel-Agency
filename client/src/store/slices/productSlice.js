import { createAction, createSlice } from "@reduxjs/toolkit";

export const setProductsError = createAction("setProductsError");

const initialValue = {
  coin: 2,
  products: [],
  searchedProducts: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialValue,

  reducers: {
    incrementZ: (state, action) => {
      console.log("dipatching increment", action);
      state.coi += 1;
    },
    setProducts: (state, action) => {
      return { ...state, products: [...action.payload] };
    },
  },
});

export const { incrementZ, setProducts } = productSlice.actions;

export default productSlice.reducer;
