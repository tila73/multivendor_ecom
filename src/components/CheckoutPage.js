import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CartItems from "./CartItem";
import Footer from "./Footer";
import Header from "./CheckoutHeader";
import DefaultAddress from "./DefaultAddress";
import ChangeAddress from "./ChangeAddress";

import KhaltiCheckout from "khalti-checkout-web";
import config from "./Khalti/KhaltiConfig";

const baseUrl = "http://127.0.0.1:8000/api/";

const CheckoutPage = () => {
  let checkout = new KhaltiCheckout({
    ...config,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  });

  const customerId = localStorage.getItem("customer_id");
  const { cartItems, total } = useSelector((state) => state.cart);
  const [showChangeAddress, setShowChangeAddress] = useState(false);
  const [addressId, setAddressId] = useState(null);

  const handleConfirmOrder = () => {
    const formData = new FormData();
    formData.append("customer", customerId);
    formData.append("address", addressId);
    formData.append("total_cost", total.toFixed(2)); // pass the total cost from state

    // Submit data
    axios
      .post(baseUrl + "orders/", formData)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleShowChangeAddress = () => {
    setShowChangeAddress(true);
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-10">
        <div className="bg-white p-8 md:col-span-8">
          <div className="border border-solid border-glass p-6">
            <h2 className="text-xl font-medium mb-4">Your Shipping Address</h2>
            {showChangeAddress ? (
              <ChangeAddress />
            ) : (
              <DefaultAddress
                setAddressId={setAddressId}
                onChangeAddressClick={handleShowChangeAddress}
              />
            )}
          </div>
          <div>
            <h2 className="text-xl font-medium my-4">Your Items</h2>
            {cartItems.map((item) => (
              <CartItems key={item.id} cartItem={item} />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="mt-6 py-2 px-5 rounded-lg bg-purple-500 hover:bg-purple-600 text-white"
              onClick={handleConfirmOrder}
            >
              Place Order
            </button>
          </div>
        </div>
        <div className="bg-white p-8 md:col-span-4">
          <h2 className="text-xl font-medium mb-4">Order summary</h2>
          <div>
            <div>Total Cost: Rs. {total.toFixed(2)}</div>
            <div>
              <button
                className="mt-6 py-2 px-5 rounded-lg bg-purple-500 hover:bg-purple-600 text-white"
                // onClick={handleConfirmOrder}
                onClick={() => checkout.show({ amount: total*100 })}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default CheckoutPage;
