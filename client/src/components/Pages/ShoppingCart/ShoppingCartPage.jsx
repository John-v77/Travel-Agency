import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearAllCart,
  decrementQty,
  incrementII,
  incrementQty,
  removeItem,
} from "../../../store/slices/cartSlice";

function ShoppingCartPage(props) {
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });
  console.log(cartItems, cartItems.length, "what is state");
  const dispatch = useDispatch();

  const orderTotal = cartItems.reduce((acc, el) => {
    return (acc += el?.product?.price * el.qty);
  }, 0);

  return (
    <div className="min-h-screen mt-10">
      <div className="grid md:grid-cols-3 md:gap-2 ">
        <div className="flex justify-between col-span-2 xl:px-20 border-b-2">
          <h3>Shopping Cart</h3>
          <h3>{`${cartItems.length} items`}</h3>
        </div>

        <div className="col-span-2">
          {cartItems.map((el, index) => {
            console.log(el, el.product.name);
            return (
              <div
                key={`${index}cart`}
                className="grid grid-cols-6 gap-3 xl:px-20 py-2"
              >
                <img
                  src={el?.product?.image_url}
                  alt=""
                  className="w-16 h-10 rounded-md"
                />
                <p className="mt-2">{el?.product?.name}</p>
                <p className="mt-2">${el?.product?.price}</p>
                <div className="flex">
                  <button
                    className="p-1 bg-transparent text-black border"
                    onClick={() =>
                      dispatch(decrementQty(el?.product))
                    }
                  >
                    -
                  </button>
                  <p className="mt-2">{el.qty}</p>
                  <button
                    className="py-0 bg-transparent text-black border "
                    onClick={() =>
                      dispatch(incrementQty(el?.product))
                    }
                  >
                    +
                  </button>
                </div>
                <p className="mt-2">
                  Total: ${el.qty * el?.product?.price}
                </p>
                <p
                  className="mt-2 text-red-600 text-right cursor-pointer"
                  onClick={() => dispatch(removeItem(el?.product))}
                >
                  remove
                </p>
              </div>
            );
          })}
          <button
            onClick={() => dispatch(clearAllCart())}
            className="p-1 ml-20 mt-10"
          >
            clear cart
          </button>
        </div>
        <div className="bg-gray-200">
          <h3 className="text-center">Order Summary</h3>

          <div className="text-center mt-20">Total</div>
          <p className="text-center">${orderTotal}</p>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
