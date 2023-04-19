import React, { useState, useEffect } from "react";
import axios from "axios";
import ChangeAddress from "./ChangeAddress";

const baseUrl = "http://127.0.0.1:8000/api/";

function DefaultAddress({ onChangeAddressClick, setAddressId }) {
  const customerId = localStorage.getItem("customer_id");
  const [addresses, setAddresses] = useState([]);
  const [showAllAddresses, setShowAllAddresses] = useState(false);

  // Fetch Address
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(
          baseUrl + "customer-address/" + customerId
        );
        setAddresses(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAddresses();
  }, [customerId]);

  const handleChangeAddress = () => {
    setShowAllAddresses(true);
    onChangeAddressClick();
  };

  useEffect(() => {
    const defaultAddress = addresses.find((address) => address.default_address);
    if (defaultAddress) {
      setAddressId(defaultAddress.id);
    }
  }, [addresses, setAddressId]);

  return (
    <div>
      {addresses
        .filter((address) => address.default_address)
        .map((address) => (
          <div className="flex flex-col flex-1 py-1.5" key={address.id}>
            <div className="flex-1">
              <p className="text-lg font-medium">{address.street_address}</p>
              <p>{`${address.city}, ${address.province} ${address.zip}`}</p>
            </div>
          </div>
        ))}
      <button
        onClick={handleChangeAddress}
        className="border border-blue-700 py-1 px-4 rounded mt-2"
      >
        Change Address
      </button>
    </div>
  );
}

export default DefaultAddress;
