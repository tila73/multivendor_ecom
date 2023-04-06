import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";

function AddressList() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [addresses, setAddresses] = useState([]);
  const customer_id = localStorage.getItem("customer_id");

  // Fetch Address
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(
          baseUrl + "customer-address/" + customer_id
        );
        setAddresses(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddresses();
  }, [customer_id]);

  // Delete data
  const Swal = require("sweetalert2");
  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this address?",
      icon: "warning",
      confirmButtonText: "Continue",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(baseUrl + "customer-address/" + id + "/detail/").then((res) => {
            Swal.fire("Success", "Address has been deleted.");
            try {
              axios
                .get(baseUrl + "customer-address/" + customer_id)
                .then((res) => {
                  setAddresses(res.data.data);
                });
            } catch (error) {
              console.log(error);
            }
          });
        } catch (error) {
          Swal.fire("Error", "Address has not been deleted.");
        }
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="flex flex-col pl-5 md:pl-10">
          <Link
            to="/customer/add-address"
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
            Add Address
          </Link>
          <h2 className="text-xl font-medium my-4">Your Addresses</h2>
          <div className="max-w-screen-xl grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {addresses.map((address) => (
              <div
                className="flex flex-col flex-1 p-4 bg-white rounded-lg shadow-lg"
                key={address.id}
              >
                <div className="flex-1">
                  <p className="text-lg font-medium">
                    {address.street_address}
                  </p>
                  <p>{`${address.city}, ${address.province} ${address.zip}`}</p>
                  <div className="flex mt-3">
                    <Link
                      to={`/customer/edit-address/` + address.id}
                      className="flex items-center bg-blue-500 text-white rounded py-1 px-4"
                    >
                      <FiEdit className="mr-1" />
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteClick(address.id)}
                      className="flex items-center bg-red-500 text-white rounded py-1 px-4 ml-2"
                    >
                      <FaTrashAlt className="mr-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AddressList;
