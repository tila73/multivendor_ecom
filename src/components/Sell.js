import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import business from "../assets/business.jpg";
import registration from "../assets/registration.png";
import customers from "../assets/customers.png";
import bar from "../assets/bar.png";
import payment from "../assets/payment.png";
import support from "../assets/support.png";
import commission from "../assets/commission.png";
import signup from "../assets/signup.jpg";
import products from "../assets/products.jpg";
import growth from "../assets/growth.jpg";

function Sell() {
  return (
    <div>
      <Header />
      <div className="relative">
        <img
          className="object-cover h-72 w-full"
          src={business}
          alt="business"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl md:text-4xl font-semibold text-center">
            Grow Your Business With Pampered Pets
          </h1>
          <h1 className="text-xl md:text-2xl font-medium my-3">
            Open Your Online Store Now
          </h1>
          <Link to="/seller/login">
            <button className="w-full mt-2 py-2 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 hover:text-white">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* Why sell section */}
      <div className="bg-orange-200 pb-8">
        <h1 className="text-xl md:text-2xl font-medium pt-4 text-center">
          Why sell on Pampered Pets
        </h1>
        <div className="flex flex-wrap mx-4 md:mx-8 lg:mx-12 xl:mx-16">
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img
              src={registration}
              alt="registration"
              className="h-40 w-40 mx-auto"
            />
            <p className="text-center pt-2">No Registration Fee Required</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img
              src={customers}
              alt="customers"
              className="h-40 w-40 mx-auto"
            />
            <p className="text-center pt-2">Reach Millions of Customers</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img src={bar} alt="bargraph" className="h-40 w-40 mx-auto" />
            <p className="text-center pt-2">Sell More Products</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img src={payment} alt="money" className="h-40 w-40 mx-auto" />
            <p className="text-center pt-2">Get Timely Payment</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img src={support} alt="support" className="h-40 w-40 mx-auto" />
            <p className="text-center pt-2">24/7 Support</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img
              src={commission}
              alt="commission"
              className="h-40 w-40 mx-auto"
            />
            <p className="text-center pt-2">Low Commission</p>
          </div>
        </div>
      </div>
      {/* How it works section */}
      <div className="mb-10">
        <h1 className="text-xl md:text-2xl font-medium pt-4 text-center">How it works</h1>
        <div className="flex flex-wrap mx-4 md:mx-8 lg:mx-12 xl:mx-16 items-center">
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img src={signup} alt="signup" className="h-30 w-40 mx-auto" />
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl max-w-md pt-3 block">
              Step 1: Register under <br></br> five minutes
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img src={products} alt="products" className="h-30 w-40 mx-auto" />
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl max-w-md pt-3 block">
              Step 2: List your <br></br> products and sell
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 mt-5">
            <img src={growth} alt="growth" className="h-30 w-40 mx-auto" />
            <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl max-w-md pt-3 block">
              Step 3: Get payments and <br></br> grow your business
            </p>
          </div>
        </div>
        <Link to="/seller/login" className="flex justify-center">
          <button className="mt-6 py-2 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white">
            Start Selling
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Sell;
