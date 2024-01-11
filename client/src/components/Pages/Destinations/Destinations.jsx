import React, { useEffect, useState } from "react";
import FeaturedDes from "../../Features/featuredDestinations/FeaturedDes";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../../store/slices/counterSlice";
import DestinationsDisplay from "../../Features/destinationsDisplay/DestinationsDisplay";
import { GetProducts } from "../../../store/services/productsService";
import Spinner from "../../Features/spinner/Spinner";
import tropicalBg from "../../../assets/Tropical.jpg";
function Destinations(props) {
  const { products } = useSelector((state) => state.products);

  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      await GetProducts(dispatch);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <Spinner />;
  } else {
    return (
      <div className="max-w-[1600px] mx-auto md:p-0">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full max-h-[500px]  flex flex-col justify-center text-gray-200 text-center">
            <div className="bg-black/80 py-5 px-10 m-auto inline-block w-fit">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold ">
                The Best Travel Experience
              </h1>
            </div>
          </div>
          <img
            className="w-full max-h-[500px] object-cover object-top"
            // src="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1600"
            // src="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2021/03/GettyImages-479711885.jpg"
            src={tropicalBg}
            alt="/"
          />
        </div>

        <FeaturedDes destPacks={products} />
        <DestinationsDisplay destPacks={products} />
      </div>
    );
  }
}

export default Destinations;
