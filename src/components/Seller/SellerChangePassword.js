import React from "react";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import SellerSidebar from "./SellerSidebar";

function SellerChangePassword() {
  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
        <div className="p-6 bg-white rounded-lg shadow-xl lg:ml-6 lg:w-full">
          <h2 className="text-xl font-medium mb-4">Change Password</h2>
          <form>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="currentPassword"
              >
                Current Password
              </label>
              <input
                type="password"
                className="border border-gray-400 p-2 w-full"
                id="currentPassword"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                type="password"
                className="border border-gray-400 p-2 w-full"
                id="newPassword"
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="border border-gray-400 p-2 w-full"
                id="confirmPassword"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <SellerFooter />
    </div>
  );
}

export default SellerChangePassword;
