import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import sellerlogo from "../../assets/sellerlogo.svg";

function SellerLogin() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [formError, setFormError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", loginFormData.username);
    formData.append("password", loginFormData.password);
    console.log(formData);

    axios
      .post(baseUrl + "seller/login/", formData)
      .then(function (response) {
        if (response.data.bool === false) {
          setFormError(true);
          setErrorMsg(response.data.msg);
        } else {
          console.log(response.data);
          localStorage.setItem("seller_login", true);
          localStorage.setItem("seller_id", response.data.id);
          localStorage.setItem("seller_username", response.data.user);
          setFormError(false);
          setErrorMsg("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const checkSeller = localStorage.getItem("seller_login");
  if (checkSeller) {
    window.location.href = "/seller/dashboard";
  }

  const buttonEnable =
    loginFormData.username !== "" && loginFormData.password !== "";

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
          id="loginForm"
          onSubmit={submitHandler}
        >
          <h2 className="text-xl font-medium pb-4">
            Get started selling on Pampered Pets
          </h2>
          {/* <div className="flex">
            <InformationCircleIcon className="w-6 text-gray-700" />
            <p className="text-gray-700">&nbsp;All fields are required.</p>
          </div> */}
          <div className="flex flex-col py-2">
            <label htmlFor="username" className="my-2">Username</label>
            <input
              className="border p-2"
              type="text"
              name="username"
              value={loginFormData.username}
              onChange={inputHandler}
              id="username"
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="password" className="mb-2">Password</label>
            <input
              className="border p-2"
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={inputHandler}
              id="password"
            />
          </div>
          {/* <Link to="/seller/dashboard"> */}
          {formError && <p className="text-red-700 my-1">{errorMsg}</p>}
          <p className="text-sm hover:underline mt-2 mb-1">Forgot Password?</p>
          <button
            disabled={!buttonEnable}
            className={`border w-full my-4 py-2 ${
              buttonEnable
                ? "bg-purple-400 hover:bg-purple-500 hover:text-white"
                : "opacity-60 cursor-not-allowed bg-purple-400"
            }`}
          >
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
