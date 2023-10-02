import { createAction, createSlice } from "@reduxjs/toolkit";
import { getWithExpiry, setWithExpiry } from "../../utils/setStorage";

export const setProductsError = createAction("setProductsError");

const savedproducts = getWithExpiry("products")
  ? getWithExpiry("products")
  : [];

const initialValue = {
  products: savedproducts,
  searchedProducts: [],
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: initialValue,

  reducers: {
    setProducts: (state, action) => {
      setWithExpiry("products", action.payload, 900000);
      return { ...state, products: [...action.payload] };
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
