import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";

const baseUrl = "http://127.0.0.1:8000/api/";
function Dashboard() {
  const [dashboardData, setDashboardData] = useState([]);
  const customer_id = localStorage.getItem("customer_id");

  useEffect(() => {
    // Fetch Address
    try {
      axios.get(baseUrl + "customer/dashboard/" + customer_id).then((res) => {
        console.log(res);
        setDashboardData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [customer_id]);

  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="lg:pl-10">
          <div className="flex flex-col md:flex-row">
            <div className="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center mr-2">
              <Link
                to="/customer/addresses"
                className="text-gray-900 text-xl font-medium mb-2 hover:underline"
              >
                Total Addresses
                <p>{dashboardData.total_customer_addresses}</p>
              </Link>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center  mr-2">
              <Link className="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Orders
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
