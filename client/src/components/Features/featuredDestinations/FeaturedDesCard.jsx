import React from "react";
import { Link } from "react-router-dom";

function FeaturedDesCard(props) {
  return (
    <div className="rounded-xl relative">
      <div>
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white text-left">
          <p className="font-bold text-2xl pt-4 ml-4">{props.name}</p>
          <p className="ml-4">Through 8/26</p>

          <Link to={`/details/${props.itemId}`}>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 right-4 p-1.5">
            Book Now
          </button>
          </Link>
        </div>
        <img
          className="h-52 max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={props.bg}
          alt=""
        />
      </div>
    </div>
  );
}

export default FeaturedDesCard;
