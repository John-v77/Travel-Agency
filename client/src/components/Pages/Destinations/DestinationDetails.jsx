import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function DestinationDetails(props) {
  const { productId } = useParams();
  const { products } = useSelector((state) => state.products);

  const productDetails = products.filter((item) => {
    return item.id.includes(productId.toLowerCase());
  })[0];
  console.log(productId, products, productDetails);
  return (
    <div className="min-h-screen">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg"
        className="w-full h-20 object-cover object-top "
        alt="navbar background"
      />
      <div className="w-2/3 mx-auto mt-10 ">
        <div className="w-2/3 h-1/2 mx-auto">
          <img
            className="w-full h-full object-cover rounded-md"
            src={productDetails.image_url}
            alt="/"
          />
        </div>
        <div className="w-2/3 md:flex justify-between pt-6 mx-auto">
          <div>
            <h3>{productDetails.name} </h3>
            <button className="my-5 p-1 mx-auto">book now</button>
          </div>
          <p className="break-normal max-w-20">
            {productDetails.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
