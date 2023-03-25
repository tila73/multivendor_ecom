import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CartItems from "./CartItem";
import { RadioGroup } from "@headlessui/react";
import Footer from "./Footer";
import Header from "./CheckoutHeader";

const baseUrl = "http://127.0.0.1:8000/api/";

const CheckoutPage = () => {
  const customerId = localStorage.getItem("customer_id");
  const { cartItems, total } = useSelector((state) => state.cart);

  const handleConfirmOrder = () => {
    const formData = new FormData();
    formData.append("customer", customerId);

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

  const [selectedPayment, setSelectedPayment] = useState("khalti");
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleShippingDetailsChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePaymentChange = (value) => {
    setSelectedPayment(value);
  };

  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mx-10">
        <div className="bg-white p-8 md:col-span-8">
          <h2 className="text-xl font-medium mb-4">Shipping details</h2>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={shippingDetails.name}
                onChange={handleShippingDetailsChange}
                placeholder="Name"
                className="border-gray-200 border-2 p-2 rounded-lg w-full"
                required
              />
              <input
                type="email"
                name="email"
                value={shippingDetails.email}
                onChange={handleShippingDetailsChange}
                placeholder="Email"
                className="border-gray-200 border-2 p-2 rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={handleShippingDetailsChange}
                placeholder="Address"
                className="border-gray-200 border-2 p-2 rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleShippingDetailsChange}
                placeholder="City"
                className="border-gray-200 border-2 p-2 rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="state"
                value={shippingDetails.state}
                onChange={handleShippingDetailsChange}
                placeholder="State"
                className="border-gray-200 border-2 p-2 rounded-lg w-full"
                required
              />
              <input
                type="text"
                name="zip"
                value={shippingDetails.zip}
                onChange={handleShippingDetailsChange}
                placeholder="Zip"
                className="border-gray-200 border-2 p-2 rounded-lg w-full"
                required
              />
            </div>
          </form>
          <h2 className="text-xl font-medium my-4">Payment</h2>
          <RadioGroup value={selectedPayment} onChange={handlePaymentChange}>
            <RadioGroup.Option value="cash_on_delivery" className="mb-4">
              {({ checked }) => (
                <div
                  className={`flex items-center ${
                    checked ? "text-blue-600" : ""
                  }`}
                >
                  <input
                    type="radio"
                    className="h-5 w-5 mr-2"
                    value="cash_on_delivery"
                    checked={checked}
                    onChange={() => handlePaymentChange("cash_on_delivery")}
                  />
                  <label className="font-medium text-lg">
                    Cash on delivery
                  </label>
                </div>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="khalti" className="mb-4">
              {({ checked }) => (
                <div
                  className={`flex items-center ${
                    checked ? "text-blue-600" : ""
                  }`}
                >
                  <input
                    type="radio"
                    className="h-5 w-5 mr-2"
                    value="khalti"
                    checked={checked}
                    onChange={() => handlePaymentChange("khalti")}
                  />
                  <label className="font-medium text-lg">Khalti</label>
                </div>
              )}
            </RadioGroup.Option>
          </RadioGroup>
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
                onClick={handleConfirmOrder}
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
