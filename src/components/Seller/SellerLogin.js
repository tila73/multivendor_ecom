import React, { useState } from "react";
import { Link } from "react-router-dom";
import sellerlogo from "../../assets/sellerlogo.svg";

function SellerLogin() {
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (event) => {
    setLoginFormData({
      ...loginFormData,
      [event.target.name]: event.target.value,
    });
  };

  // console.log(loginFormData);

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', loginFormData.username);
    formData.append('password', loginFormData.password);
    console.log(formData);
    // console.dir(formData)
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <div>
        <img
          className="mt-6 mb-1 mr-2 object-contain w-60"
          src={sellerlogo}
          alt="Logo"
        />
      </div>
      {/* <div className="flex">
        <img
          className="mt-6 mb-1 mr-2 object-contain w-40 h-10"
          src={logo}
          alt="Logo"
        />
        <p className="mt-7 mb-1 font-medium text-lg">seller central</p>
      </div> */}
      <div
        className="border-gray-200 border-solid border-2 mt-5 sm:w-80
       flex flex-col justify-center"
      >
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4"
          id="loginForm" onSubmit={submitHandler}
        >
          <h2 className="text-xl font-medium pb-4">
            Get started selling on Pampered Pets
          </h2>
          <div className="flex flex-col py-2">
            <label>Username</label>
            <input className="border p-2" type="text" name="username" value={loginFormData.username} onChange={inputHandler} />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" name="password" value={loginFormData.password} onChange={inputHandler} />
          </div>
          {/* <Link to="/seller/dashboard"> */}
            <button className="border w-full my-4 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
              Sign in
            </button>
          {/* </Link> */}
          <p className="text-center">New to Pampered Pets?</p>
          <Link to="/seller/register">
            <button className="border w-full my-3 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
              Create your account
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

export default SellerLogin;
