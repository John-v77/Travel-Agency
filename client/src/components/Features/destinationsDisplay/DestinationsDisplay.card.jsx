import React, { useCallback, useState } from "react";

import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addProdToFavorites,
  removeProdFromFavorites,
} from "../../../store/services/userService";

function DestinationsDisplayCard(props) {
  const { prodId, userId, name, bg, price, favD } = props;
  const [favored, setFavored] = useState(favD);
  const dispatch = useDispatch();

  const addItemtoFav = useCallback(async () => {
    try {
      await dispatch(addProdToFavorites({ userId, prodId }));
      setFavored((currrent) => !currrent);
    } catch (err) {
      console.log(err);
    }
  }, [favored]);

  const removeItemFromFav = useCallback(async () => {
    console.log("removing item placeholder");

    try {
      await dispatch(removeProdFromFavorites({ userId, prodId }));
      setFavored((currrent) => !currrent);
    } catch (err) {
      console.log(err);
    }
  }, [favored]);
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={bg} alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-2 text-xl font-bold text-white absolute">
          {name}
        </p>
        <p className="right-4 bottom-2  text-white absolute">
          ${price}
        </p>

        {/* show add to favorite only if user is logged in */}
        {userId ? (
          <button
            onClick={favored ? removeItemFromFav : addItemtoFav}
            className="bg-transparent  hover:bg-orange-600 p-1 m-1"
          >
            {favored ? (
              <MdOutlineFavorite size={20} className="text-white" />
            ) : (
              <MdOutlineFavoriteBorder
                size={20}
                className="text-white"
              />
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DestinationsDisplayCard;
