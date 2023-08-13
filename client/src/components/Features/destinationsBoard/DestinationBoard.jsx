import React from "react";
import { homeCategories } from "../../../data/data";

function DestinationBoard(props) {
  return (
    <div className="py-16 px-4 max-w-[1600px]">
      <div>
        <h1>All-inclusive Resorts</h1>
        <p>on Caribbean best beaches</p>
      </div>

      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={homeCategories[5].image}
          alt="img1"
        />
        <img
          className="w-full h-full object-cover"
          src={homeCategories[1].image}
          alt="img2"
        />
        <img
          className="w-full h-full object-cover"
          src={homeCategories[2].image}
          alt="img3"
        />
        <img
          className="w-full h-full object-cover"
          src={homeCategories[3].image}
          alt="img4"
        />
        <img
          className="w-full h-full object-cover"
          src={homeCategories[4].image}
          alt="img4"
        />
      </div>
    </div>
  );
}

export default DestinationBoard;
