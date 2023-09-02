import apiActions from "../../utils/api";
import { incrementZ, setProducts, setProductsError } from "../slices/productSlice";

export const GetProducts = async (dispatch) => {
  try {
    // api call
    // const data = await apiActions.getDestinations();

    const data = await apiActions.getDestinations2();

    console.log(data, "what id the cumulative data");

    dispatch(setProducts(data));
  } catch {
    dispatch(setProductsError());
  }
};
