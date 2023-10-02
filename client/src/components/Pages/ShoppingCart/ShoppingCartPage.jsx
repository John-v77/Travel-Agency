import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearAllCart,
  decrementQty,
  incrementII,
  incrementQty,
  removeItem,
} from "../../../store/slices/cartSlice";
import { GetCart } from "../../../store/services/cartService";

function ShoppingCartPage(props) {
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });

  const [isLoading, setIsLoading] = useState(true);
  const { userInfo } = useSelector((state) => state.user);
  const userId = userInfo ? userInfo.id : null;
  const dispatch = useDispatch();

  const orderTotal = cartItems.reduce((acc, el) => {
    return (acc += el?.price * el.quantity);
  }, 0);

  useEffect(() => {
    const fetchCart = async () => {
      await GetCart(dispatch, userId);
      setIsLoading(false);
    };
    if (userId) fetchCart();
  }, []);

  return (
    <div className="min-h-screen">
      <img
        src="https://www.wallpaperup.com/uploads/wallpapers/2013/09/29/153361/44e5a3fd8a183ce3ab4d2130ba1b66bb.jpg"
        className="w-full h-20 object-cover object-top "
        alt="navbar background"
      />

      <div className="grid md:grid-cols-3 md:gap-2 ">
        <div className="flex justify-between col-span-2 xl:px-20 border-b-2">
          <h3>Shopping Cart</h3>
          <h3>{`${cartItems.length} items`}</h3>
        </div>

        <div className="col-span-2">
          {cartItems.map((el, index) => {
            return (
              <div
                key={`${index}cart`}
                className="grid grid-cols-6 gap-3 xl:px-20 py-2"
              >
                <img
                  src={el?.image_url}
                  alt=""
                  className="w-16 h-10 rounded-md"
                />
                <p className="mt-2">{el?.name}</p>
                <p className="mt-2">${el?.price}</p>
                <div className="flex">
                  <button
                    className="p-1 bg-transparent text-black border"
                    onClick={() => dispatch(decrementQty(el))}
                  >
                    -
                  </button>
                  <p className="mt-2">{el.quantity}</p>
                  <button
                    className="py-0 bg-transparent text-black border "
                    onClick={() => dispatch(incrementQty(el))}
                  >
                    +
                  </button>
                </div>
                <p className="mt-2">
                  Total: ${el.quantity * el?.price}
                </p>
                <p
                  className="mt-2 text-red-600 text-right cursor-pointer"
                  onClick={() => dispatch(removeItem(el))}
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
