import React, { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutHeader from "../CheckoutHeader";
import axios from "axios";

function CheckoutRegister() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [registerFormData, setRegisterFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const inputHandler = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("first_name", registerFormData.first_name);
    formData.append("last_name", registerFormData.last_name);
    formData.append("username", registerFormData.username);
    formData.append("email", registerFormData.email);
    formData.append("mobile", registerFormData.mobile);
    formData.append("password", registerFormData.password);

    axios
      .post(baseUrl + "customer/register/", formData)
      .then(function (response) {
        if (response.data.bool === false) {
          // setFormError(true);
          setErrorMsg(response.data.msg);
          setSuccessMsg("");
        } else {
          setRegisterFormData({
            first_name: "",
            last_name: "",
            username: "",
            email: "",
            mobile: "",
            password: "",
          });
          setErrorMsg("");
          setSuccessMsg(response.data.msg);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const buttonEnable =
    registerFormData.first_name !== "" &&
    registerFormData.last_name !== "" &&
    registerFormData.username !== "" &&
    registerFormData.email !== "" &&
    registerFormData.mobile !== "" &&
    registerFormData.password !== "";

  return (
    <>
      <CheckoutHeader />
      <div className="h-screen flex flex-col items-center">
        <h2 className="text-xl font-bold pt-4">Create Account</h2>
        <div className="border-gray-200 border-solid border-2 mt-5 sm:w-80 flex flex-col justify-center">
          <form
            id="registrationForm"
            className="max-w-[400px] w-full mx-auto bg-white p-4"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col py-2">
              <label>First Name</label>
              <input
                className="border p-2"
                name="first_name"
                type="text"
                onChange={inputHandler}
                value={registerFormData.first_name}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Last Name</label>
              <input
                className="border p-2"
                name="last_name"
                type="text"
                onChange={inputHandler}
                value={registerFormData.last_name}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Username</label>
              <input
                className="border p-2"
                name="username"
                type="text"
                onChange={inputHandler}
                value={registerFormData.username}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Email</label>
              <input
                className="border p-2"
                name="email"
                type="email"
                onChange={inputHandler}
                value={registerFormData.email}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Mobile</label>
              <input
                className="border p-2"
                name="mobile"
                type="number"
                onChange={inputHandler}
                value={registerFormData.mobile}
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Password</label>
              <input
                className="border p-2"
                name="password"
                type="password"
                onChange={inputHandler}
                value={registerFormData.password}
              />
            </div>
            {successMsg && <p className="text-green-600">{successMsg}</p>}
            {errorMsg && <p className="text-red-600">{errorMsg}</p>}
            <button
              disabled={!buttonEnable}
              className="border w-full my-4 py-2 bg-purple-400 hover:bg-purple-500 hover:text-white"
            >
              Create account
            </button>
            <p className="text-center">Already have an account?</p>
            <Link to="/customer/checkout-login">
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
    </>
  );
}

export default CheckoutRegister;
