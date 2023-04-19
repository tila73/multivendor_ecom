import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/logo.svg";

function Login() {
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

  // console.log(loginFormData);

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", loginFormData.username);
    formData.append("password", loginFormData.password);
    // console.log(formData);
    // console.log(loginFormData.username, loginFormData.password);
    // for (const value of formData.values()) {
    //   console.log(value);

    axios
      .post(baseUrl + "customer/login/", formData)
      .then(function (response) {
        // console.log(response);
        if (response.data.bool === false) {
          setFormError(true);
          setErrorMsg(response.data.msg);
        } else {
          console.log(response.data);
          localStorage.setItem("customer_login", true);
          localStorage.setItem("customer_username", response.data.user);
          localStorage.setItem("customer_id", response.data.id);
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
    window.location.href = "/";
  }

  const buttonEnable =
    loginFormData.username !== "" && loginFormData.password !== "";

  return (
    <div className="h-screen flex flex-col items-center">
      <Link to="/">
        <img
          className="mt-6 mb-1 object-contain ml-auto mr-auto w-48 h-10"
          src={logo}
          alt="Logo"
        />
      </Link>

      <div
        className="border-gray-200 border-solid border-2 mt-5 sm:w-80
       flex flex-col justify-center"
      >
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4"
          id="loginForm"
          onSubmit={submitHandler}
        >
          <h2 className="text-2xl font-bold pb-4">Sign In</h2>
          <div className="flex flex-col py-2">
            <label htmlFor="username" className="mb-2">Username</label>
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
          <p className="text-center">New Customer?</p>
          <Link to="/customer/register">
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

export default Login;
