import React from "react";
import { Link } from "react-router-dom";
import sellerlogo from "../../assets/sellerlogo.svg";

function SellerRegister() {
  return (
    <div className="h-screen flex flex-col items-center">
      <div>
        <img
          className="mt-6 mb-1 mr-2 object-contain w-60"
          src={sellerlogo}
          alt="Logo"
        />
      </div>

      <div className="border-gray-200 border-solid border-2 mt-5 sm:w-80 flex flex-col justify-center">
        <form
          id="registrationForm"
          className="max-w-[400px] w-full mx-auto bg-white p-4"
        >
          <h2 className="text-2xl font-bold pb-4">Create Account</h2>
          <div className="flex flex-col py-2">
            <label>Full Name</label>
            <input className="border p-2" name="name" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2" name="email" type="email" />
          </div>
          <div className="flex flex-col py-2">
            <label>Address</label>
            <input className="border p-2" name="address" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input className="border p-2" type="text" name="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" name="password" type="password" />
          </div>
          <div className="flex flex-col py-2">
            <label>Confirm Password</label>
            <input
              className="border p-2"
              name="confirmPassword"
              type="password"
            />
          </div>
          <button className="border w-full my-4 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
            Create account
          </button>
          <p className="text-center">Already have an account?</p>
          <Link to="/seller/login">
            <button className="border w-full my-3 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
              Sign in
            </button>
          </Link>
        </form>
      </div>
      <p className="mt-10">
        Copyright @ 2023, Pampered Pets. All rights reserved.
      </p>
    </div>
  );
}

export default SellerRegister;
