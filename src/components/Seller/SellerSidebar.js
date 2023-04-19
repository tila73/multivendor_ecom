import React from "react";
import { Link } from "react-router-dom";

function SellerSidebar() {
  return (
    <div className="bg-white rounded-lg border-gray-200 md:w-80 text-gray-900 sm:w-full mb-6">
      <Link
        to="/seller/dashboard"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Dashboard
      </Link>
      <Link
        to="/seller/products"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Products
      </Link>
      <Link
        to="/seller/add-product"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Add Product
      </Link>
      <Link
        to="/seller/orders"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Orders
      </Link>
      {/* <Link
        to="/seller/customers"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Customers
      </Link> */}
      {/* <Link
        to="#!"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Reports
      </Link> */}
      <Link
        to="/seller/profile"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Profile
      </Link>
      <Link
        to="/seller/change-password"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Change Password
      </Link>
    </div>
  );
}

export default SellerSidebar;
