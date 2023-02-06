import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center py-4 px-10 sm:px-15 md:px-25 bg-white">
        <CheckCircleIcon className="h-32 text-green-500" />
        <h1 className="text-2xl font-medium text-green-500 mt-2">
          Order Successful!
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Thank you for your purchase! Your order has been received and is being
          processed.
        </p>
        <Link to="/" className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg mb-8 mt-4">
          Continue Shopping
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default OrderSuccess;
