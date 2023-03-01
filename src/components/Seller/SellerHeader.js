import React from "react";
import { Link } from "react-router-dom";
import sellerlogo from "../../assets/sellerlogo.svg";

function SellerHeader() {
  return (
    <header className="bg-purple-300">
      <div className="flex flex-wrap justify-between mx-10 sm:mx-20 py-4">
        <img
          src={sellerlogo}
          alt="seller central logo"
          className="w-48 sm:w-64 h-auto"
        />
        <Link to="/seller/login" className="text-xs sm:text-base font-bold">
          Sign Out
        </Link>
      </div>
    </header>
  );
}

export default SellerHeader;
