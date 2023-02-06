import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";

function Profile() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="p-6 bg-white rounded-lg shadow-xl lg:ml-6 lg:w-full">
          <h2 className="text-xl font-bold mb-4">Update Profile</h2>
          <form>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="firstName"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="lastName"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="username"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-400 p-2"
                id="email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="profileImage"
              >
                Profile Image
              </label>
              <input
                className="w-full"
                type="file"
                id="profileImage"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
