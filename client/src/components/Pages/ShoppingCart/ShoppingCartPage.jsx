import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllCart,
  decrementQty,
  incrementQty,
  removeItem,
} from "../../../store/slices/cartSlice";
import { GetCart } from "../../../store/services/cartService";
import { MdOutlineCancel } from "react-icons/md";
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

      <div className="grid md:grid-cols-4 mt-10 mb-4 shadow-sm">
        <div className="prod-list md:col-span-3 bg-slate-100 p-4">
          <div class="flex justify-between border-b">
            <h1 class="font-semibold text-xl">Shopping Cart</h1>
            <h2 class="font-semibold text-xl">
              {cartItems.length} Items
            </h2>
          </div>

          <div class="grid grid-cols-5 mt-4 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase col-span-2">
              Product Details
            </h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase  text-right">
              Quantity
            </h3>
            <h3 class="font-semibold  text-gray-600 text-xs uppercase  text-right">
              Price
            </h3>
            <h3 class="font-semibold text-gray-600 text-xs uppercase  text-right">
              Total
            </h3>
          </div>
          <div className="w-full mt-4">
            <div>
              <div className="col-span-2">
                {cartItems.map((el, index) => {
                  return (
                    <div
                      key={`${index}cart`}
                      className="grid grid-cols-5 gap-1 py-2"
                    >
                      <div className="col-span-2 flex justify-start">
                        <img
                          src={el?.image_url}
                          alt=""
                          className="w-20 h-16 rounded-md"
                        />
                        <p className="mt-2 mx-4">{el?.name}</p>
                      </div>
                      <div className="flex justify-end">
                        {/* <p
                          className="mt-1 text-red-600 md:hidden text-2xl mx-2"
                          onClick={() => dispatch(decrementQty(el))}
                        >
                          x
                        </p> */}
                        <p
                          className="mt-0.5 text-blue-600 text-2xl cursor-pointer"
                          onClick={() => dispatch(decrementQty(el))}
                        >
                          -
                        </p>
                        <p
                          className="hidden text-red"
                          onClick={() => dispatch(decrementQty(el))}
                        >
                          remove
                        </p>
                        <p className="mt-2 mx-2">{el.quantity}</p>
                        <p
                          className="mt-1 text-blue-600 text-2xl cursor-pointer"
                          onClick={() => dispatch(incrementQty(el))}
                        >
                          +
                        </p>
                      </div>
                      <p className="mt-2 text-right">${el?.price}</p>
                      <p className="mt-2 text-right">
                        ${el.quantity * el?.price}
                      </p>
                      {/* <p
                        className="mt-2 text-red-600 text-right cursor-pointer"
                        onClick={() => dispatch(removeItem(el))}
                      >
                        remove
                      </p> */}
                    </div>
                  );
                })}
                <button
                  onClick={() => dispatch(clearAllCart())}
                  className="py-1 mt-10 bg-indigo-500 hover:bg-indigo-600"
                >
                  clear cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-slate-200 p-8 ">
          <p class="font-semibold text-xl border-b pb-4">
            Order Summary
          </p>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">
              {cartItems.length} Items
            </span>
            <span class="font-semibold text-sm">${orderTotal}</span>
          </div>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Tax</span>
            <span class="font-semibold text-sm">
              ${orderTotal * 0.065}
            </span>
          </div>
          {/* <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
            </select>
          </div> */}
          <div class="py-4">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
          </div>
          <button class="bg-indigo-500 hover:bg-indigo-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div class="border-t mt-4">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>${orderTotal * 1.065} </span>
            </div>
            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
