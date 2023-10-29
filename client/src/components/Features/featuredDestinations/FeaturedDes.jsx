import React from "react";
import { goodPictures } from "../../../data/data";
import FeaturedDesCard from "./FeaturedDesCard";

function FeaturedDes(props) {
  const { destPacks } = props;
  return (
    <div className="max-w-[1600px] mx-auto py-12 md:py-6 grid md:grid-cols-3 gap-6 md:mb-6">
      {destPacks.map((item, index) => {
        if (item.featured === true) {
          console.log(item.featured === true)
          return (
            <FeaturedDesCard
              bg={item.image_url}
              name={item.name}
              key={item.id}
              itemId={item.id}
            />
          );
        }
      })}
    </div>
  );
}

export default FeaturedDes;
