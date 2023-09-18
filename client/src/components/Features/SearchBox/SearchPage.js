import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import DestinationsDisplayCard from "../destinationsDisplay/DestinationsDisplay.card";
import { useParams } from "react-router-dom";

function SearchPage({ props }) {
  const { products } = useSelector((state) => state.products);
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo ? userInfo.id : null;
  const { keyword } = useParams();

  const [foundDestinations, setFoundDestinations] =
    useState(products);

  //   const newResults = useMemo(() => {
  //     return foundDestinations.filter((item) => {
  //       return item.name.toLowerCase().includes(keyword.toLowerCase());
  //     });
  //   }, [foundDestinations, keyword]);

  const newResults = foundDestinations.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  });

  console.log(newResults, newResults.length === 0, "fDestinations");
  return (
    <div className="max-w-[1640px] m-auto min-h-screen px-8 py-12">
      <h2 className="mb-10">Search Results</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {newResults.length !== 0
          ? newResults.map((el) => {
              return (
                <DestinationsDisplayCard
                  key={el._id}
                  name={el.name}
                  description={el.description}
                  bg={el.image_url}
                  price={el.price}
                  prodId={el._id}
                  userId={userId}
                  favD={true}
                />
              );
            })
          : "No results found"}
      </div>
    </div>
  );
}

export default SearchPage;
