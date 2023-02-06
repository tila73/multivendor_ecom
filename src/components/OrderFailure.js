import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { XCircleIcon } from "@heroicons/react/24/solid";
// import { Link } from "react-router-dom";

function OrderFailure() {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center py-4 px-10 sm:px-28 md:px-48 lg:px-72 xl:px-80 bg-white">
        <XCircleIcon className="h-32 text-red-500" />
        <h1 className="text-2xl font-medium text-red-500 mt-2">Order Failed</h1>
        <p className="text-lg text-gray-600 mt-2">
          We apologize for the inconvenience. There was an issue processing your
          order. Please try again later or contact customer support for
          assistance.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg mb-8 mt-4">
          Try Again
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default OrderFailure;
