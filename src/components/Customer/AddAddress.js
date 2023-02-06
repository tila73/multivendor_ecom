import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";

function AddAddress() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="p-6 bg-white rounded-lg shadow-xl lg:ml-6 lg:w-full">
          <h2 className="text-xl font-medium mb-4">Add Address</h2>
          <form>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="address"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddAddress;
