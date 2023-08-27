import React from "react";
import DestinationsDisplayCard from "./DestinationsDisplay.card";
import { useSelector } from "react-redux";

function DestinationsDisplay(props) {
  const { destPackages } = props;
  const { userInfo } = useSelector((state) => {
    return state.user;
  });

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {destPackages.map((el) => {
        console.log(el._id, "kkks");
        return (
          <DestinationsDisplayCard
            key={el._id}
            name={el.name}
            description={el.dcescription}
            bg={el.image_url}
            price={el.price}
            userId={userInfo._id}
            prodId={el._id}
          />
        );
      })}
    </div>
  );
}

export default DestinationsDisplay;
