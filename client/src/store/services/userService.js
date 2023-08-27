import apiActions from "../../api";
import { addFavorites, addFavoritesError } from "../slices/userSlice";

export const AddProdToFavorites = async (dispatch, user_id, prod_id) => {
  console.log(dispatch, user_id, prod_id, "waht is dispatch 22s");
  try {
    // api call
    const data = await apiActions.addProdToUserFav(user_id, prod_id);

    dispatch(addFavorites(data));
  } catch {
    dispatch(addFavoritesError());
  }
};
