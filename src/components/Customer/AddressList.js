import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function AddressList() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="flex flex-col pl-5 md:pl-10">
          <Link
            to="/customer/add-address"
            className="w-40 text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 pr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Address
          </Link>
          <div className="max-w-screen-xl grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <button className="px-2 py-1 bg-green-400 text-gray-800 hover:bg-gray-400 rounded-sm mb-2">
                  Default
                </button>
                <p className="text-gray-700">123 Main St, San Francisco, CA</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <button className="px-2 py-1 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-sm mb-2">
                  Mark as Default
                </button>
                <p className="text-gray-700">123 Main St, San Francisco, CA</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <button className="px-2 py-1 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-sm mb-2">
                  Mark as Default
                </button>
                <p className="text-gray-700">123 Main St, San Francisco, CA</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <button className="px-2 py-1 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-sm mb-2">
                  Mark as Default
                </button>
                <p className="text-gray-700">123 Main St, San Francisco, CA</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <button className="px-2 py-1 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-sm mb-2">
                  Mark as Default
                </button>
                <p className="text-gray-700">123 Main St, San Francisco, CA</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg">
              <div className="flex-1">
                <button className="px-2 py-1 bg-gray-300 text-gray-800 hover:bg-gray-400 rounded-sm mb-2">
                  Mark as Default
                </button>
                <p className="text-gray-700">123 Main St, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddressList;
