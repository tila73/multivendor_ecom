import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditAddress() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const customerId = localStorage.getItem("customer_id");
  const baseUrl = "http://127.0.0.1:8000/api/";
  const { address_id } = useParams();

  const [addressData, setAddressData] = useState({
    street_address: "",
    city: "",
    province: "",
    zip: "",
    default_address: false,
  });

  const handleChange = (event) => {
    setAddressData({
      ...addressData,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    // Check if all required fields are filled
    const requiredFields = ["street_address", "city", "province", "zip"];
    const missingFields = requiredFields.filter((field) => !addressData[field]);
    const errorMessage = document.getElementById("error-message");
    if (missingFields.length > 0) {
      errorMessage.innerText = `Please fill all required fields: ${missingFields.join(
        ", "
      )}`;
    } else {
      const _formData = new FormData();
      _formData.append("customer", customerId);
      _formData.append("street_address", addressData.street_address);
      _formData.append("city", addressData.city);
      _formData.append("province", addressData.province);
      _formData.append("zip", addressData.zip);
      _formData.append("default_address", addressData.default_address);

      try {
        const response = await axios.put(
          baseUrl + "customer-address/" + address_id + "/detail/",
          _formData
        );
        console.log(response.data);
        event.target.reset();
        setFormSubmitted(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Fetch current address data and set it to the form fields
  useEffect(() => {
    try {
      axios
        .get(baseUrl + "customer-address/" + address_id + "/detail/")
        .then((res) => {
          console.log(res.data);
          setAddressData({
            street_address: res.data.street_address,
            city: res.data.city,
            province: res.data.province,
            zip: res.data.zip,
            default_address: res.data.default_address,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, [address_id]);

  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="p-6 bg-white rounded-lg shadow-xl lg:ml-6 lg:w-full">
          <h2 className="text-xl font-medium mb-4">Update Address</h2>
          <form onSubmit={formSubmit}>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="street_address"
              >
                Street Address
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="street_address"
                name="street_address"
                value={addressData.street_address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="city"
              >
                City
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="city"
                name="city"
                value={addressData.city}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="province"
              >
                Province
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="province"
                name="province"
                value={addressData.province}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block font-medium mb-2 text-gray-700"
                htmlFor="zip"
              >
                Zip
              </label>
              <input
                type="text"
                className="border border-gray-400 p-2 w-full"
                id="zip"
                name="zip"
                value={addressData.zip}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                className="block font-medium mb-2 text-gray-700 mr-4"
                htmlFor="default_address"
              >
                Make this my primary address
              </label>
              <input
                className="h-6 w-6"
                type="checkbox"
                id="default_address"
                name="default_address"
                value={addressData.default_address}
                checked={addressData.default_address}
                onChange={handleChange}
              />
            </div>
            {formSubmitted && (
              <p className="text-green-600 text-lg pb-2 font-semibold">
                Address updated successfully!
              </p>
            )}
            <div
              className="text-red-600 text-lg pb-2 font-semibold"
              id="error-message"
            ></div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
              type="submit"
            >
              Update Address
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EditAddress;
