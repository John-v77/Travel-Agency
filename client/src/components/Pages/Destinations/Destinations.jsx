import React, { useEffect, useState } from "react";
import FeaturedDes from "../../Features/featuredDestinations/FeaturedDes";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../store/slices/counterSlice";
import DestinationsDisplay from "../../Features/destinationsDisplay/DestinationsDisplay";
import { GetProducts } from "../../../store/services/productsService";
function Destinations(props) {
  // const { favorites } = useSelector((state) => {
  //   console.log(state.user.favorites, "what is state new23");
  //   return state.user;
  // });

  const { products } = useSelector((state) => state.products);

  // console.log(counter, 'hello1');
  const dispatch = useDispatch();

  useEffect(() => {
    GetProducts(dispatch);
  }, []);

  console.log(products, "are destinations set?");
  return (
    <div className="max-w-[1600px] mx-auto md:p-0">
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full max-h-[500px] bg-black/40 flex flex-col justify-center text-gray-200 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The Best Travel Experience</h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          //   src='https://jeunessetravel.com/wp-content/uploads/jeunesse-travel-video-thumbnail.jpg?auto=compress@cs=tinysrgb@w=1260&h=750&pr=2'
          src="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1600"
          alt="/"
        />
      </div>

      <FeaturedDes />
      <DestinationsDisplay destPacks={products} />
    </div>
  );
}

export default Destinations;
