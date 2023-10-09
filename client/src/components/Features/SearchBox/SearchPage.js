import React, { useState } from "react";
import { useSelector } from "react-redux";
import DestinationsDisplayCard from "../destinationsDisplay/DestinationsDisplay.card";
import { useParams } from "react-router-dom";

function SearchPage({ props }) {
  const { products } = useSelector((state) => state.products);
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo ? userInfo.id : null;
  const { keyword } = useParams();

  const [foundDestinations] = useState(products);

  //   const newResults = useMemo(() => {
  //     return foundDestinations.filter((item) => {
  //       return item.name.toLowerCase().includes(keyword.toLowerCase());
  //     });
  //   }, [foundDestinations, keyword]);

  const newResults = foundDestinations.filter((item) => {
    return item.name.toLowerCase().includes(keyword.toLowerCase());
  });
  return (
    <div className="max-w-[1640px] m-auto min-h-screen ">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg"
        className="w-full h-20 object-cover object-top "
        alt="navbar background"
      />
      <h2 className="px-4 py-12">Search Results</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {newResults.length !== 0 ? (
          newResults.map((el) => {
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
        ) : (
          <p className="px-4">No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
