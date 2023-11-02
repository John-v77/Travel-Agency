import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../../store/slices/cartSlice";


import {
  AiFillCar,
  AiFillCamera,
  AiTwotoneTags
} from "react-icons/ai";


import {
  BsCupHotFill
} from "react-icons/bs";




function DestinationDetails(props) {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const featuredProduct = products.filter((item) => {
    return item.id.includes(productId.toLowerCase());
  })[0];
  // console.log(productId, products, featuredProduct);

  const addToCartHandler = (product) => {
    dispatch(addToCart({ ...product, qty: 1 }));
  };
  return (
    <div className="min-h-screen bg-slate-200 pb-4">
      <img
        data="header_image"
        src="https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg"
        className="w-full h-20 object-cover object-top "
        alt="navbar background"
      />



      <div className="w-full max-w-[900px] mx-auto mt-10 px-4 md:flex">
        <div>
          <img
            className="w-full h-full object-cover rounded-t-md md:rounded-none md:rounded-l-md"
            src={featuredProduct.image_url}
            alt="/"
          />
        </div>
        <div className="w-full md:flex min-w-[400px] justify-between pt-6 mx-auto bg-white rounded-b-md  md:rounded-none md:rounded-r-lg p-4">
          <div className="">
            <div className="flex justify-between">

            <p className="font-semibold text-xl mb-4">{featuredProduct.name} </p>
            <p className="text-xl mb-4">${featuredProduct.price} </p>
            </div>
            <p className="break-normal max-w-20">
              {featuredProduct.description}.
               lorem Ipsum
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
           
           <div className="flex my-4 justify-between">
              <p className="block font-semibold">Ameneties:</p>
           
           <div className="flex">
              <BsCupHotFill
                size={20}
                className="text-gray-600 mr-2"
              />

              
              <AiFillCar
                size={20}
                className="text-gray-600 mx-2"
                alt="car rental"
              />

              <AiFillCamera
                size={20}
                className="text-gray-600 mx-2"
              />

              <AiTwotoneTags
                size={20}
                className="text-gray-600 mx-2"
              />
           </div>
           </div>
           <div className="text-center my-8">
            <button
              className="py-1 px-5 mx-auto rounded-full "
              onClick={() => addToCartHandler(featuredProduct)}
            >
              book now
            </button>
           </div>

            <div className="flex justify-between ">
              <Link
                to="/destinations"
                className="hover:text-blue-600 text-md"
              >
                <span>&#60; </span>
                Continue Shopping
              </Link>
              <Link
                to="/cart"
                className="hover:text-blue-600 text-md"
              >
                Shopping Cart
                <span> &#62;</span>
                
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
