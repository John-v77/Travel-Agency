import React from "react";
import DestinationsDisplayCard from "./DestinationsDisplay.card";

function DestinationsDisplay(props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {props.destPackages.map((el) => {
        return (
          <DestinationsDisplayCard
            key={el._id}
            name={el.name}
            description={el.dcescription}
            bg={el.image_url}
            price={el.price}
          />
        );
      })}
    </div>
  );
}

export default DestinationsDisplay;
