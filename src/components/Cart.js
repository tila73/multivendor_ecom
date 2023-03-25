import React, { useEffect } from "react";
import { HiChevronLeft, HiTrash } from "react-icons/hi";
import CartItems from "./CartItem";
import { open } from "./State/Slice/CheckOutSlice";
import { clear } from "./State/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  const handleCheckoutClick = () => {
    dispatch(open());
  };

  return (
    <div className="bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen">
      <div className="h-full bg-gray-100 sm:w-[40rem] md:w-[50rem] min-w-[15rem] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => dispatch(open())}
            >
              <HiChevronLeft />
              <span className="uppercase text-[0.95rem] select-none">
                Continue Shopping
              </span>
            </div>
            <div>Shopping Cart ({amount})</div>
          </div>
          <div className="mt-8">
            {cartItems.length === 0 ? (
              <div className="uppercase text-center text-3xl">
                Your cart is empty
              </div>
            ) : (
              <>
                {cartItems.map((cartItem) => {
                  return <CartItems key={cartItem.id} cartItem={cartItem} />;
                })}
                <div className="flex justify-between items-center mt-12">
                  <div>Total Cost: Rs. {total.toFixed(2)}</div>
                  <HiTrash
                    className="cursor-pointer text-3xl"
                    onClick={() => dispatch(clear())}
                  />
                </div>
                <Link to="/checkout">
                  <div
                    className="text-center cursor-pointer bg-purple-300 text-lg font-medium p-3 mt-8 hover:bg-purple-500 hover:text-white"
                    onClick={handleCheckoutClick}
                  >
                    Proceed to Checkout
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
