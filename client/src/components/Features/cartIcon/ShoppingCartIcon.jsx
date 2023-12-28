import React from "react";
import { useSelector } from "react-redux";
import { TiShoppingCart } from "react-icons/ti";

function ShoppingCartIcon(props) {
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });

  console.log(cartItems);
  const totalCartItems = cartItems.reduce((acc, el) => acc + el.qty, 0);

  return (
    <div>
      <TiShoppingCart size={20} />
      {totalCartItems ? (
        <div className="bg-orange-600 w-4 h-4 rounded-full flex justify-center relative -top-3 left-2">
          <p className="text-xs leading-4">{totalCartItems}</p>
        </div>
      ) : null}
    </div>
  );
}

export default ShoppingCartIcon;
