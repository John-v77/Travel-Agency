import React from "react";
import DestinationsDisplayCard from "./DestinationsDisplay.card";
import { useSelector } from "react-redux";

function DestinationsDisplay(props) {
  const { destPackages } = props;
  const { userInfo } = useSelector((state) => {
    return state.user;
  });
  const userId = userInfo ? userInfo._id : null;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
      {destPackages.length == 0 ? (
        <div className="bg bg-red-500 text-white">
          Destinations could not be fetched
        </div>
      ) : (
        // mapping products
        destPackages.map((el) => {
          return (
            <DestinationsDisplayCard
              key={el._id}
              name={el.name}
              description={el.dcescription}
              bg={el.image_url}
              price={el.price}
              userId={userId}
              prodId={el._id}
            />
          );
        })
      )}
    </div>
  );
}

export default DestinationsDisplay;
