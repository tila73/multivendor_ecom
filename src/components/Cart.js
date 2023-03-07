import React from "react";
import { HiChevronLeft, HiTrash } from "react-icons/hi";
import CartItems from "./CartItem";
import { open } from "./State/Slice/CheckOutSlice";
import { clear } from "./State/Slice/CartSlice";
import { useDispatch, useSelector } from "react-redux";

function Checkout() {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);
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
                  return (
                    <CartItems key={cartItem.id} cartItem={cartItem} />
                  );
                })}
                <div className="flex justify-between items-center mt-12">
                  <div>Total Cost: ${total.toFixed(2)}</div>
                  <HiTrash
                    className="cursor-pointer text-3xl"
                    onClick={() => dispatch(clear())}
                  />
                </div>
                <div className="text-center cursor-pointer bg-purple-300 text-lg font-medium p-3 mt-8 hover:bg-purple-500 hover:text-white">
                  Proceed to Checkout
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
