import apiActions from "../../utils/api";
import {
  setProducts,
  setProductsError,
} from "../slices/productSlice";

export const GetProducts = async (dispatch) => {
  try {
    // api call
    // const data = await apiActions.getDestinations();

    const data = await apiActions.getDestinations();

    console.log(data, "what id the cumulative data");

    dispatch(setProducts(data));
  } catch {
    dispatch(setProductsError());
  }
};

export const SearchProducts = async (dispatch, searchedWord) => {
  try {
    const data = await apiActions.getDestinations();

    console.log(data, "what id the cumulative data");

    dispatch(setProducts(data));
  } catch {
    dispatch(setProductsError());
  }
};
