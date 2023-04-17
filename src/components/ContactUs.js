import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import axios from "axios";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

function ContactUs() {
  const baseUrl = "http://127.0.0.1:8000/api/";

  const [contactData, setContactData] = useState({
    full_name: "",
    email: "",
    message: "",
    status: "",
  });

  const inputHandler = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("full_name", contactData.full_name);
    formData.append("email", contactData.email);
    formData.append("message", contactData.message);
    axios
      .post(baseUrl + "contact/", formData)
      .then(function (response) {
        setContactData({
          full_name: "",
          email: "",
          message: "",
          status: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
        setContactData({ status: "error" });
      });
  };

  const buttonEnable =
    contactData.full_name !== "" &&
    contactData.email !== "" &&
    contactData.message !== "";

  useEffect(() => {
    document.title = "Contact Us";
  });

  return (
    <div>
      <Header />
      <div className="mx-4 lg:mx-20 mb-16">
        <h1 className="text-gray-800 font-bold my-4 text-xl text-center lg:text-left">
          Get in touch
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-7/12 shadow-md rounded px-8 pt-4 pb-8 mb-4 lg:my-2 lg:mr-4">
            <form onSubmit={handleSubmit}>
              {contactData.status === "success" && (
                <p className="text-green-500 mb-4 text-lg">Thanks for contacting us!</p>
              )}
              {contactData.status === "error" && (
                <p className="text-red-500  mb-4 text-lg">Oops! Something went wrong.</p>
              )}
              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="full_name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="full_name"
                  name="full_name"
                  placeholder="John Doe"
                  onChange={inputHandler}
                  value={contactData.full_name}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  onChange={inputHandler}
                  value={contactData.email}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                  name="message"
                  rows="6"
                  onChange={inputHandler}
                  value={contactData.message}
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  disabled={!buttonEnable}
                  className={`border py-2 px-4 rounded font-black ${
                    buttonEnable
                      ? "bg-purple-400 hover:bg-purple-500 hover:text-white"
                      : "opacity-60 cursor-not-allowed bg-purple-500"
                  }`}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-5/12 text-center mt-8 lg:mt-0">
            <div className="mb-6 flex flex-col items-center justify-center">
              <EnvelopeIcon className="text-gray-900 w-8" />
              <p className="mt-2">pamperedpets71@gmail.com</p>
            </div>
            <div className="mb-3 flex flex-col items-center justify-center">
              <PhoneIcon className="text-gray-900 w-8" />
              <p className="mt-2">+977 9828372828</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
