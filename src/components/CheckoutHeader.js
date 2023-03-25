import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function CheckoutHeader() {
  return (
    <header className="bg-purple-300">
      <div className="mx-16 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="mt-2">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              width={200}
              height={40}
            />
          </Link>
        </div>

        <div className="hidden md:flex">
          <h1 className="md:text-lg font-bold">Checkout</h1>
        </div>

        <div>
          <Link to="/shop" className="text-sm sm: text-md md:text-lg font-bold">Continue Shopping</Link>
        </div>
      </div>
    </header>
  );
}

export default CheckoutHeader;
