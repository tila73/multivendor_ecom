import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";

const baseUrl = "http://127.0.0.1:8000/api/";
function SellerDashboard() {
  const [dashboardData, setDashboardData] = useState([]);
  const seller_id = localStorage.getItem("seller_id");

  useEffect(() => {
    // Fetch Products
    try {
      axios.get(baseUrl + "vendor/dashboard/" + seller_id).then((res) => {
        console.log(res);
        setDashboardData(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [seller_id]);
  
  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
        <div className="md:pl-10 gap-10">
          <div className="flex flex-col md:flex-row">
            <div className="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center">
              <Link
                to="/seller/products"
                className="text-gray-900 text-xl font-medium mb-2 hover:underline"
              >
                Total Products
                <p>{dashboardData.total_vendor_products}</p>
              </Link>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center">
              <Link className="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Orders
              </Link>
              <p>123</p>
            </div>
            <div className="block p-6 rounded-lg shadow-lg w-auto md:w-64 text-center">
              <Link className="text-gray-900 text-xl font-medium mb-2 hover:underline">
                Total Customer
              </Link>
              <p>30</p>
            </div>
          </div>
        </div>
      </div>
      <SellerFooter />
    </div>
  );
}

export default SellerDashboard;
