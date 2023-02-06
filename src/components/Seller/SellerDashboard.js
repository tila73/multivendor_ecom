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
        <div class="md:pl-10 gap-10">
          <div className="flex flex-col md:flex-row">
            <div class="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center">
              <Link class="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Products
              </Link>
              <p>12</p>
            </div>
            <div class="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center">
              <Link class="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Orders
              </Link>
              <p>123</p>
            </div>
            <div class="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center">
              <Link class="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Customer
              </Link>
              <p>30</p>
            </div>
          </div>
        </div>
      </div>
      <SellerFooter/>
    </div>
  );
}

export default SellerDashboard;
