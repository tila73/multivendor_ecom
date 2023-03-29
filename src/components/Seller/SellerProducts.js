import React from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import SellerHeader from "./SellerHeader";
import SellerFooter from "./SellerFooter";
import { useState, useEffect } from "react";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
// import { BsEyeFill } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";

function SellerDashboard() {
  const baseUrl = "http://127.0.0.1:8000/api/";

  const [productData, setProductData] = useState([]);
  // const [slug, setSlug] = useState([]);
  const seller_id = localStorage.getItem("seller_id");

  // Fetch products
  useEffect(() => {
    try {
      axios.get(baseUrl + "vendor-products/" + seller_id).then((res) => {
        setProductData(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [seller_id]);

  // Delete data
  const Swal = require("sweetalert2");
  const handleDeleteClick = (slug) => {
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this product?",
      icon: "warning",
      confirmButtonText: "Continue",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(baseUrl + "products/" + slug).then((res) => {
            Swal.fire("Success", "Product has been deleted.");
            try {
              axios
                .get(baseUrl + "vendor-products/" + seller_id)
                .then((res) => {
                  setProductData(res.data.data);
                });
            } catch (error) {
              console.log(error);
            }
          });
        } catch (error) {
          Swal.fire("Error", "Product has not been deleted.");
        }
      }
    });
  };

  return (
    <div>
      <SellerHeader />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <SellerSidebar />
        <div className="flex flex-col pl-5 md:pl-10">
          <Link
            to="/seller/add-product"
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
                        Quantity
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
                    {productData.map((product, index) => (
                      <tr key={index} className="bg-white border-b">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 wrap flex items-center">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-20 mr-4"
                          />
                          {product.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {product.quantity}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {product.price}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-2xl font-medium text-gray-900">
                          <div className="flex">
                            {/* <Link to={`/seller/view-product/` + product.id}>
                              <BsEyeFill className="bg-green-500 text-white rounded p-1" />
                            </Link> */}
                            <Link to={`/seller/edit-product/` + product.id}>
                              <FiEdit className="bg-blue-500 text-white rounded p-1 ml-2" />
                            </Link>
                            <button
                              onClick={() => handleDeleteClick(product.slug)}
                            >
                              <FaTrashAlt className="bg-red-500 text-white rounded p-1 ml-2" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
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
