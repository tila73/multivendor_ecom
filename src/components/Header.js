// import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Header() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const handleClick = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownOpen && !event.target.closest(".dropdown")) {
  //       setDropdownOpen(false);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [dropdownOpen]);

  return (
    <header className="bg-purple-300">
      <div className="mx-20 py-3">
        {/* Top nav */}
        <div className="flex items-center p-1 flex-grow py-2">
          {/* Logo */}
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link to='/'>
          <img
              className="mr-16"
              src={logo}
              alt="logo"
              width={200}
              height={40}
              //objectFit="contain"
            />
          </Link>
          </div>

          {/* Search */}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-white">
            <input
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
              placeholder="Search"
            />
            <MagnifyingGlassIcon className="h-14 p-4" />
          </div>

          {/* Right */}
          <div className="flex items-center text-sm font-bold whitespace-nowrap">
            {/* <div
              className="cursor-pointer mx-16 dropdown"
              onClick={handleClick}
            >
              <div className="flex items-center">
                <UserCircleIcon className="h-7" />
                <ChevronDownIcon className="h-5" />
              </div>
              <a className="hidden md:inline">Account</a>
              {dropdownOpen && (
                <div className="bg-white rounded-lg shadow-md py-2">
                  <Link to="/customer/login" className="block px-4 py-2">
                    Sign In
                  </Link>
                  <Link to="/customer/register" className="block px-4 py-2">
                    Create Account
                  </Link>
                  <hr className="border-gray-300 my-1" />
                  <Link to="/customer/dashboard" className="block px-4 py-2">
                    Dashboard
                  </Link>
                  <Link to="/customer/login" className="block px-4 py-2">
                    Sign out
                  </Link>
                </div>
              )}
            </div> */}

            <Link to='/customer/login'>
            <div className="cursor-pointer mx-16">
              <div className="flex items-center">
                <UserCircleIcon className="h-7" />
                <ChevronDownIcon className="h-5" />
              </div>
              <a className="hidden md:inline">Account</a>
            </div>
            </Link>

            <div className="cursor-pointer">
              <ShoppingCartIcon className="h-18" />
              <a className="hidden md:inline">Cart</a>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center space-x-10 p-2 font-bold">
          <Link to="/shop" className="flex items-center">
            Shop
            <ChevronDownIcon className="h-4" />
          </Link>
          <a className="cursor-pointer">Brands</a>
          <Link to="/sell">Sell</Link>
          <a className="cursor-pointer  flex items-center">
            Customer Service
            <ChevronDownIcon className="h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
