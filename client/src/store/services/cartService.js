import apiActions from "../../utils/api";
import { setCartItems, setCartItemsError } from "../slices/cartSlice";

export const GetCart = async (dispatch, user_id) => {
  console.log("we are fetching the cart", user_id);
  try {
    const data = await apiActions.getUserCart(user_id);

    console.log(data, "what id the cumulative data");

    dispatch(setCartItems(data));
  } catch {
    dispatch(setCartItemsError());
  }
};
