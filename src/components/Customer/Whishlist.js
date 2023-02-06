import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import logo from "../../logo.svg";
import Sidebar from "./Sidebar";

function Whishlist() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="overflow-x-auto lg:w-full">
          <div className="py-4 md:py-0 inline-block min-w-full sm:px-6 lg:px-8">
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
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <img
                        className="mx-auto mb-2"
                        src={logo}
                        alt="logo"
                        width={100}
                        height={100}
                      />
                      Dry Food
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      500
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-500 font-medium rounded-md text-sm px-5 py-2.5"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <img
                        className="mx-auto mb-2"
                        src={logo}
                        alt="logo"
                        width={100}
                        height={100}
                      />
                      Dry Food
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      500
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <button
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-500 font-medium rounded-md text-sm px-5 py-2.5"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Whishlist;
