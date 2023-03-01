import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="lg:pl-10">
          <div className="flex flex-col md:flex-row">
            <div className="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center mr-2">
              <Link className="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Orders
              </Link>
              <p>123</p>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center  mr-2">
              <Link className="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Wishlist
              </Link>
              <p>123</p>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center  mr-2">
              <Link className="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Addresses
              </Link>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
