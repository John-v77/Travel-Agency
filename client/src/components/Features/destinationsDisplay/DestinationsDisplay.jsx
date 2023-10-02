import React, { useCallback, useEffect, useState } from "react";
import DestinationsDisplayCard from "./DestinationsDisplay.card";
import { useSelector } from "react-redux";

function DestinationsDisplay(props) {
  const { destPacks } = props;
  const [destPackages, setDestPackages] = useState([]);
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo ? userInfo.id : null;

  useEffect(() => {
    setDestPackages(destPacks);
    console.log(destPackages, "double render?");
  }, []);

  const priceFilters = ["$", "$$", "$$$"];
  // const regionFilters = ["Asia", "Europa", "America", "Africa"];

  // const filterByRegion = (region) => {
  //   destPackages.filter((item) => item.region === region);
  // };
  const filterByPrice = useCallback(
    (price) => {
      setDestPackages(
        destPacks.filter(
          (item) => item.price >= price && item.price < price + 500
        )
      );
    },
    [destPackages]
  );
  return (
    <div className="max-w-[1640px] mx-auto py-12">
      <h1 className="text-center mb-10">Top Rated Destinations</h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          {/* Filter Region */}
          <p className="font-bold text-gray-700">
            {/* Filter by Continent */}
          </p>
          <div className="flex justfiy-between flex-wrap">
            {/* {regionFilters.map((el, index) => {
              return (
                <button
                  key={`${index}regionFilter`}
                  onClick={() => filterByRegion(el)}
                  className="mr-1 my-1 w-20 p-0
                            border border-orange-600 bg-white text-orange-600 
                            hover:bg-orange-600 hover:text-white
                            rounded-xl"
                >
                  {el}
                </button>
              );
            })} */}
            <button
              onClick={() => setDestPackages(destPacks)}
              className="mr-1 my-1 w-20 p-0
                            border border-orange-600 bg-white text-orange-600 
                            hover:bg-orange-600 hover:text-white
                            rounded-xl"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700 lg:text-right">
            Filter Price
          </p>
          <div className="flex justify-start lg:justify-end w-40">
            {priceFilters.map((el, index) => {
              return (
                <button
                  key={`${index}priceFilter`}
                  onClick={() => filterByPrice((index + 1) * 500)}
                  className="mr-1 my-1 w-12 p-0  border border-orange-600 bg-white text-orange-600 rounded-xl hover:bg-orange-600 hover:text-white lg:mr-0 lg:ml-1"
                >
                  {el}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
        {destPacks.length === 0 ? (
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
                favD={false}
              />
            );
          })
        )}
        {destPacks.length === 0 ?? <p>no products</p>}
        {/* Test the products */}
      </div>
    </div>
  );
}

export default DestinationsDisplay;
