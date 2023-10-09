import React, { useCallback, useState } from "react";

import {
  MdOutlineFavoriteBorder,
  MdOutlineFavorite,
  MdRemoveRedEye,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  addProdToFavorites,
  removeProdFromFavorites,
} from "../../../store/services/userService";
import { Link } from "react-router-dom";

function DestinationsDisplayCard(props) {
  const { prodId, userId, name, bg, price, favD } = props;
  const [favored, setFavored] = useState(favD);
  const dispatch = useDispatch();

  const addItemtoFav = useCallback(async () => {
    try {
      await dispatch(addProdToFavorites({ userId, prodId }));
      setFavored((currrent) => !currrent);
    } catch (err) {
      // console.log(err);
    }
  }, [favored]);

  const removeItemFromFav = useCallback(async () => {
    console.log("removing item placeholder");
    try {
      await dispatch(removeProdFromFavorites({ userId, prodId }));
      setFavored((currrent) => !currrent);
    } catch (err) {
      // console.log(err);
    }
  }, [favored]);

  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={bg} alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <Link to={`/details/${prodId}`}>
          <p className="left-4 bottom-2 text-xl font-bold text-white hover:border-b-2 absolute">
            {name}
          </p>
        </Link>
        <p className="right-4 bottom-2  text-white absolute">
          ${price}
        </p>

        {/* show add to favorite only if user is logged in */}
        {userId ? (
          <button
            onClick={favored ? removeItemFromFav : addItemtoFav}
            className="bg-transparent   p-1 m-1"
          >
            {favored ? (
              <MdOutlineFavorite
                size={20}
                className="text-white hover:text-orange-400"
              />
            ) : (
              <MdOutlineFavoriteBorder
                size={20}
                className="text-white hover:text-orange-400"
              />
            )}
          </button>
        ) : null}
        <br />
      </div>
    </div>
  );
}

export default DestinationsDisplayCard;
