import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import {
  MagnifyingGlassIcon,
  // ShoppingCartIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context";
import { open } from "./State/Slice/CheckOutSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);
  const userContext = useContext(UserContext);
  console.log(userContext); //comment this later

  // Search
  const [searchString, setsearchString] = useState({
    search: "",
  });

  const handleChange = (event) => {
    setsearchString({
      ...searchString,
      [event.target.name]: event.target.value,
    });
  };

  const searchProduct = () => {
    if (searchString.search !== "") {
      window.location.href = "/search/" + searchString.search;
    }
  };

  //Dropdown
  const [accountdropdownOpen, setAccountDropdownOpen] = useState(false);
  const [csdropdownOpen, setCSDropdownOpen] = useState(false);
  const handleClick = () => {
    setAccountDropdownOpen(!accountdropdownOpen);
    setCSDropdownOpen(!csdropdownOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (accountdropdownOpen && !event.target.closest(".dropdown1")) {
        setAccountDropdownOpen(false);
      }
      if (csdropdownOpen && !event.target.closest(".dropdown2")) {
        setCSDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [accountdropdownOpen, csdropdownOpen]);

  return (
    <header className="bg-purple-300 relative z-10">
      <div className="mx-16 py-3">
        {/* Top nav */}
        <div className="flex items-center p-1 flex-grow py-2">
          {/* Logo */}
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <Link to="/">
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
              name="search"
              onChange={handleChange}
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
              placeholder="Search"
            />
            <button onClick={searchProduct} type="button">
              <MagnifyingGlassIcon className="h-14 p-4" />
            </button>
          </div>

          {/* Right */}
          <div className="flex items-center text-sm font-bold whitespace-nowrap">
            {/* Dropdown code from here */}
            <div
              className="cursor-pointer mx-16 dropdown1 relative z-50"
              onClick={handleClick}
            >
              <div className="flex items-center">
                <UserCircleIcon className="h-8" />
                <ChevronDownIcon className="h-5" />
              </div>
              {/* <Link className="hidden md:inline">Account</Link> */}
              {accountdropdownOpen && (
                <div className="bg-white rounded-lg shadow-md py-2 absolute top-10 right-0">
                  {userContext !== "true" && (
                    <>
                      <Link
                        to="/customer/login"
                        className="block p-2 mx-3 mb-1 text-center rounded-md hover:bg-slate-300"
                      >
                        Sign In
                      </Link>
                      <Link
                        to="/customer/register"
                        className="block p-2 mx-3 text-center rounded-md hover:bg-slate-300"
                      >
                        Create Account
                      </Link>
                    </>
                  )}
                  {userContext === "true" && (
                    <>
                      <Link
                        to="/customer/dashboard"
                        className="block p-2 mx-3 text-center rounded-md hover:bg-slate-300"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/customer/logout"
                        className="block p-2 mx-3 text-center rounded-md hover:bg-slate-300"
                      >
                        Sign out
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            {/* To here */}

            {/* Before */}
            {/* <Link to="/cart">
              <ShoppingCartIcon className="h-18" />
              <a className="hidden md:inline">Cart</a>
            </Link> */}

            <div className="relative" onClick={() => dispatch(open())}>
              {/* <Link to="/cart"> */}
              <AiOutlineShoppingCart className="text-3xl" />
              <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] bottom-[-3px] flex items-center justify-center text-[10px] bg-black text-white">
                {amount}
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="flex items-center space-x-10 p-2 font-bold">
          <Link to="/shop">Shop</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/sell">Sell</Link>
          {/* <Link className="flex items-center">
            Customer Service
            <ChevronDownIcon className="h-4" />
          </Link> */}
          <div className="dropdown2  mx-16 relative z-50" onClick={handleClick}>
            <span className="flex items-center cursor-pointer">
              Customer Service
              <ChevronDownIcon className="h-4" />
            </span>
            {csdropdownOpen && (
              <div className="absolute bg-white rounded-lg shadow-md py-2 top-8 right-0">
                <Link
                  to="/contact-us"
                  className="block p-2 mx-3 mb-1 text-center rounded-md hover:bg-slate-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/faqs"
                  className="block p-2 mx-3 mb-1 text-center rounded-md hover:bg-slate-300"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;