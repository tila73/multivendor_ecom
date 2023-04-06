import React, { useState } from "react";
import { Link } from "react-router-dom";
import sellerlogo from "../../assets/sellerlogo.svg";
import axios from "axios";
import { InformationCircleIcon } from "@heroicons/react/24/outline/";

function SellerRegister() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [registerFormData, setRegisterFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    mobile: "",
    username: "",
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
    const form = event.target;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
    } else {
      setPasswordsMatch(true);
      const formData = new FormData();
      formData.append("first_name", registerFormData.first_name);
      formData.append("last_name", registerFormData.last_name);
      formData.append("email", registerFormData.email);
      formData.append("address", registerFormData.address);
      formData.append("mobile", registerFormData.mobile);
      formData.append("username", registerFormData.username);
      formData.append("password", registerFormData.password);

      axios
        .post(baseUrl + "seller/register/", formData)
        .then(function (response) {
          if (response.data.bool === false) {
            setErrorMsg(response.data.msg);
            setSuccessMsg("");
          } else {
            setRegisterFormData({
              first_name: "",
              last_name: "",
              email: "",
              address: "",
              mobile: "",
              username: "",
              password: "",
            });
            setErrorMsg("");
            setSuccessMsg(response.data.msg);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const buttonEnable =
    registerFormData.first_name !== "" &&
    registerFormData.last_name !== "" &&
    registerFormData.email !== "" &&
    registerFormData.address !== "" &&
    registerFormData.mobile !== "" &&
    registerFormData.username !== "" &&
    registerFormData.password !== "" &&
    registerFormData.confirmPassword !== "";

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
          onSubmit={submitHandler}
        >
          <h2 className="text-2xl font-bold pb-4">Create Account</h2>
          <div className="flex">
            <InformationCircleIcon className="w-6 text-gray-700" />
            <p className="text-gray-700">&nbsp;All fields are required.</p>
          </div>
          <div className="flex flex-col py-2">
            <label className="mt-2">First Name</label>
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
            <label>Address</label>
            <input
              className="border p-2"
              name="address"
              type="text"
              onChange={inputHandler}
              value={registerFormData.address}
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
            <label>Username</label>
            <input
              className="border p-2"
              type="text"
              name="username"
              onChange={inputHandler}
              value={registerFormData.username}
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
          <div className="flex flex-col py-2">
            <label>Confirm Password</label>
            <input
              className="border p-2"
              name="confirmPassword"
              type="password"
              onChange={inputHandler}
            />
          </div>
          {successMsg && <p className="text-green-600">{successMsg}</p>}
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}
          {!passwordsMatch && (
            <p className="text-red-600 mb-2">Passwords do not match!!!</p>
          )}
          <button
            disabled={!buttonEnable}
            className={`border w-full my-4 py-2 ${
              buttonEnable
                ? "bg-purple-400 hover:bg-purple-500 hover:text-white"
                : "opacity-60 cursor-not-allowed bg-purple-400"
            }`}
          >
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
      <p className="mt-10 pb-10">
        Copyright @ 2023, Pampered Pets. All rights reserved.
      </p>
    </div>
  );
}

export default SellerRegister;
