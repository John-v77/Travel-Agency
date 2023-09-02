import React, { useCallback } from "react";

import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AddProdToFavorites } from "../../../store/services/userService";

function DestinationsDisplayCard(props) {
  // we might have to pass functions as props to prevent infinite loop

  const { prodId, userToken, name, bg, price } = props;
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");

  const addItemtoFav = useCallback(() => dispatch(AddProdToFavorites(dispatch, userToken, prodId)), []);
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={bg} alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-2 text-xl font-bold text-white absolute">{name}</p>
        <p className="right-4 bottom-2  text-white absolute">${price}</p>

        {/* show add to favorite only if user is logged in */}
        {userToken ? (
          <button onClick={addItemtoFav} className="bg-transparent  hover:bg-orange-600 p-1 m-1">
            {token ? (
              <MdOutlineFavorite size={20} className="text-white" />
            ) : (
              <MdOutlineFavoriteBorder size={20} className="text-white" />
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DestinationsDisplayCard;
