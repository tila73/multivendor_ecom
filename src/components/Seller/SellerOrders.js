import React from "react";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import SellerSidebar from "./SellerSidebar";

const SellerOrders = () => {
  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
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
                      Order ID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Customer
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      Leanne Graham
                    </td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      500
                    </td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      2023/01/01
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      Leanne Graham
                    </td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      500
                    </td>
                    <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                      2023/01/01
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <SellerFooter />
    </div>
  );
};

export default SellerOrders;
