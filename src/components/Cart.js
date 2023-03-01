import React from 'react'
import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import reactlogo from "../logo.svg";

function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image: reactlogo,
      description: "Product 1 description",
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      image: reactlogo,
      description: "Product 2 description",
      price: 20,
      quantity: 2,
    },
  ]);
  const removeCartItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-center bg-gray-100 p-6">
        <div className="w-full md:w-2/3 lg:w-2/3 px-4 shadow-lg rounded-lg bg-white">
          <h2 className="text-2xl font-bold mb-2">Shopping cart</h2>
          <div className="overflow-hidden p-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center border-b border-gray-200 py-3"
              >
                <img
                  src={item.image}
                  alt={item.description} 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-gray-900 font-semibold">
                    {item.description}
                  </h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center mt-4">
                

                
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    className="w-16 text-center border-gray-300 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                  <button
                    onClick={() => removeCartItem(item.id)}
                    className="ml-4 text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/3 px-4 shadow-md rounded-lg bg-white">
          <h2 className="text-2xl font-bold mb-2">Subtotal</h2>
          <div className="overflow-hidden p-4">
            <div className="flex items-center py-3">
              <div className="text-gray-600 flex-1">Subtotal</div>
              <div className="text-gray-900">${calculateSubtotal()}</div>
            </div>
            <div className="flex justify-end pt-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
