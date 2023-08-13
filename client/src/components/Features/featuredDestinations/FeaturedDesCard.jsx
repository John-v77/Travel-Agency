import React from "react";

function FeaturedDesCard(props) {
  return (
    <div className="rounded-xl relative">
      <div>
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white text-center">
          <p className="font-bold text-2xl pt-4">Sun's Out</p>
          <p className="px-2">Throught 8/26</p>

          <button className="border-white bg-white text-black mx-2 absolute bottom-4 right-4 p-1.5">
            Book Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src={props.bg}
          alt=""
        />
      </div>
    </div>
  );
}

export default FeaturedDesCard;
