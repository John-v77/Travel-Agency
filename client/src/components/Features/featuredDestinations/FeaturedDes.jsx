import React from "react";
import { goodPictures } from "../../../data/data";
import FeaturedDesCard from "./FeaturedDesCard";

function FeaturedDes(props) {
  return (
    <div className="max-w-[1600px] mx-auto py-12 md:py-6 grid md:grid-cols-3 gap-6 md:mb-6">
      {goodPictures.map((item, index) => {
        if (index < 3) {
          return <FeaturedDesCard bg={item.image} key={index} />;
        }
      })}
    </div>
  );
}

export default FeaturedDes;
