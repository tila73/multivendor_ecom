import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CheckoutHeader from "../CheckoutHeader";

function CartLogin() {
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

    axios
      .post(baseUrl + "customer/login/", formData)
      .then(function (response) {
        if (response.data.bool === false) {
          setFormError(true);
          setErrorMsg(response.data.msg);
        } else {
          console.log(response.data);
          localStorage.setItem("customer_login", true);
          localStorage.setItem("customer_id", response.data.id);
          localStorage.setItem("customer_username", response.data.user);
          setFormError(false);
          setErrorMsg("");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const checkCustomer = localStorage.getItem("customer_login");
  if (checkCustomer) {
    window.location.href = "/checkout";
  }

  const buttonEnable =
    loginFormData.username !== "" && loginFormData.password !== "";

  return (
    <>
      <CheckoutHeader />
      <div className="h-screen flex flex-col items-center">
        <h2 className="text-xl font-bold pt-4">
          Sign In or Register to Add Products to Cart
        </h2>
        <div
          className="border-gray-200 border-solid border-2 mt-5 sm:w-80
       flex flex-col justify-center"
        >
          <form
            className="max-w-[400px] w-full mx-auto bg-white p-4"
            id="loginForm"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col py-2">
              <label htmlFor="username">Username</label>
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
              <label htmlFor="password">Password</label>
              <input
                className="border p-2"
                type="password"
                name="password"
                value={loginFormData.password}
                onChange={inputHandler}
                id="password"
              />
            </div>
            {formError && <p className="text-red-700">{errorMsg}</p>}
            <button
              disabled={!buttonEnable}
              className="border w-full my-4 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white"
            >
              Sign in
            </button>
            <p className="text-center">New Customer?</p>
            <Link to="/customer/checkout-register">
              <button className="border w-full my-3 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white">
                Register
              </button>
            </Link>
          </form>
        </div>
        <p className="mt-10">
          Copyright @ 2023, Pampered Pets. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default CartLogin;
