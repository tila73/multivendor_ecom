import React from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";

function SellerDashboard() {
  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
        <div className="flex flex-col pl-5 md:pl-10">
          <Link to="/seller/add-product"
            className="w-40 text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center mb-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 pr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add Product
          </Link>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Dry Food
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Food
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        200
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-1">
                          View
                        </button>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg mr-1">
                          Edit
                        </button>
                        <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SellerFooter />
    </div>
  );
}

export default SellerDashboard;
