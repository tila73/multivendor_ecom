import React from "react";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import SellerSidebar from "./SellerSidebar";

const Customers = () => {
  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
        <div className="overflow-x-auto lg:w-full">
          <div className="py-4 md:py-0 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center">
                <thead>
                  <tr className="text-gray-700">
                    <th
                      scope="col"
                      className="py-4 px-6 bg-gray-200 font-medium"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 bg-gray-200 font-medium"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 bg-gray-200 font-medium"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 bg-gray-200 font-medium"
                    >
                      Mobile
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 bg-gray-200 font-medium"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="text-sm py-4 px-6 whitespace-nowrap">1</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">Leanne Graham</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">Sincere@april.biz</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">1-770-736-8031 x56442</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">
                      <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
                        Remove from list
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-sm py-4 px-6 whitespace-nowrap">2</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">Ervin Howell</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">Sherwood@rosamond.me</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">1-770-736-8031 x56442</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">
                      <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
                        Remove from list
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-sm py-4 px-6 whitespace-nowrap">3</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">Clementine Bauch</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">Nathan@yesenia.net</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">1-770-736-8031 x56442</td>
                    <td className="text-sm py-4 px-6 whitespace-nowrap">
                      <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
                        Remove from list
                      </button>
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

export default Customers;
