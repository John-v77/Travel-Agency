import React, { useCallback } from "react";

import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AddProdToFavorites } from "../../../store/services/userService";

function DestinationsDisplayCard(props) {
  // we might have to pass functions as props to prevent infinite loop

  const { prodId, userId, name, bg } = props;
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  const addItemtoFav = useCallback(() => dispatch(AddProdToFavorites(dispatch, userId, prodId)), []);
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={bg} alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">{name}</p>
        <button onClick={addItemtoFav}>
          {token ? (
            <MdOutlineFavorite size={20} className="text-white" />
          ) : (
            <MdOutlineFavoriteBorder size={20} className="text-white" />
          )}
        </button>
      </div>
    </div>
  );
}

export default DestinationsDisplayCard;
