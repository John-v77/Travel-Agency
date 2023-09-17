import React, { useState } from "react";
import { useSelector } from "react-redux";
import DestinationsDisplayCard from "../destinationsDisplay/DestinationsDisplay.card";

function SearchPage({ searchedWord }) {
  const { products } = useSelector((state) => state.products);
  const { userInfo } = useSelector((state) => state.user);

  const [foundDestinations, setFoundDestinations] =
    useState(products);
  const secWord = "Venice";
  const newResults = foundDestinations.filter((el) => {
    console.log(el.name, "new|word", secWord, el.name === secWord);
    return el.name == secWord;
  });
  console.log(newResults, "do we have them?");
  return (
    <div className="max-w-[1640px] m-auto min-h-screen px-8 py-12">
      <h2 className="mb-10">Search Results</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {newResults.map((el) => {
          return (
            <DestinationsDisplayCard
              key={el._id}
              name={el.name}
              description={el.description}
              bg={el.image_url}
              price={el.price}
              prodId={el._id}
              userId={userInfo.id}
              favD={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage;
