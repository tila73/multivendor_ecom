import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-white rounded-lg border-gray-200 md:w-80 text-gray-900 sm:w-full mb-6">
      <Link
        to="/customer/dashboard"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Dashboard
      </Link>
      <Link
        to="/customer/orders"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Orders
      </Link>
      <Link
        to="/customer/whishlist"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Whishlist
      </Link>
      <Link
        to="/customer/profile"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Profile
      </Link>
      <Link
        to="/customer/change-password"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Change Password
      </Link>
      <Link
        to="/customer/addresses"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Addresses
      </Link>
      <Link
        to="/customer/logout"
        className="block px-6 py-2 border border-gray-200 w-full hover:bg-gray-100 hover:text-gray-700"
      >
        Logout
      </Link>
    </div>
  );
}

export default Sidebar;
