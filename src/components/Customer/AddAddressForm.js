import React, { useState } from "react";
import axios from "axios";

function AddAddressForm({ onCancel, onAddressAdded }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const customerId = localStorage.getItem("customer_id");
  const baseUrl = "http://127.0.0.1:8000/api/";

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
        const response = await axios.post(
          baseUrl + "customer/address/",
          _formData
        );
        console.log(response.data);
        event.target.reset();
        setFormSubmitted(true);
        onAddressAdded(); // call the onAddressAdded function when the address is added successfully
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel(); // call the onCancel function when the cancel button is clicked
  };

  return (
    <div className=" bg-white rounded-lg">
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
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2 text-gray-700" htmlFor="zip">
            Zip
          </label>
          <input
            type="text"
            className="border border-gray-400 p-2 w-full"
            id="zip"
            name="zip"
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
            type="checkbox"
            id="default_address"
            name="default_address"
            checked={addressData.default_address}
            onChange={handleChange}
            className="h-6 w-6"
          />
        </div>
        {formSubmitted && (
          <p className="text-green-600 text-lg pb-2 font-semibold">
            Address added successfully!
          </p>
        )}
        <div
          className="text-red-600 text-lg pb-2 font-semibold"
          id="error-message"
        ></div>
        <button
          className="mt-4 py-1 mr-4 px-4 rounded bg-purple-500 hover:bg-purple-600 text-white"
          type="submit"
        >
          Add Address
        </button>
        <button
          className="border border-blue-700 py-1 px-4 rounded mt-2"
          onClick={handleCancel} // call the handleCancel function when the cancel button is clicked
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddAddressForm;
