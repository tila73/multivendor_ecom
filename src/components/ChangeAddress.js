import React, { useState, useEffect } from "react";
import axios from "axios";
import AddAddressForm from "./Customer/AddAddressForm";

const baseUrl = "http://127.0.0.1:8000/api/";

function ChangeAddress() {
  const customerId = localStorage.getItem("customer_id");
  const [addresses, setAddresses] = useState([]);
  const [showAddAddress, setShowAddAddress] = useState(false);

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

  const handleCancel = () => {
    setShowAddAddress(false);
  };

  const handleAddressAdded = (newAddress) => {
    // setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
    setShowAddAddress(false);
  };

  const handleAddressSelect = async (address) => {
    // Find the previous default address
    const previousDefault = addresses.find((a) => a.default_address);

    // Update the previous default address to be non-default
    if (previousDefault) {
      try {
        await axios.put(
          baseUrl + `customer-address/${previousDefault.id}/detail/`,
          {
            ...previousDefault,
            default_address: false,
          }
        );
        setAddresses((prevAddresses) => {
          const updatedAddresses = prevAddresses.map((a) => {
            if (a.id === previousDefault.id) {
              return { ...a, default_address: false };
            }
            return a;
          });
          return updatedAddresses;
        });
      } catch (error) {
        console.log(error);
      }
    }

    // Update the selected address to be the new default
    try {
      await axios.put(baseUrl + `customer-address/${address.id}/detail/`, {
        ...address,
        default_address: true,
      });
      setAddresses((prevAddresses) => {
        const updatedAddresses = prevAddresses.map((a) => {
          if (a.id === address.id) {
            return { ...a, default_address: true };
          }
          return a;
        });
        return updatedAddresses;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Show the "AddAddress" component when the button is clicked */}
      {/* {showAddAddress ? (
        <AddAddressForm onClose={() => setShowAddAddress(false)} />
      ) : (
        <button
          className="border border-blue-700 py-1 px-4 rounded mt-2"
          onClick={() => setShowAddAddress(true)}
        >
          + Add new address
        </button>
      )} */}
      {!showAddAddress && (
        <button
          className="border border-blue-700 py-1 px-4 rounded mt-2"
          onClick={() => setShowAddAddress(true)}
        >
          + Add new address
        </button>
      )}

      {showAddAddress ? (
        <div>
          <AddAddressForm
            onCancel={handleCancel}
            onAddressAdded={handleAddressAdded}
          />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {addresses.map((address) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 my-4 px-2"
              key={address.id}
            >
              <div className="flex flex-col flex-1 py-1.5 pr-6 max-w-sm mx-auto">
                <div className="flex-1">
                  <p className="text-lg font-medium">
                    {address.street_address}
                  </p>
                  <p>{`${address.city}, ${address.province} ${address.zip}`}</p>
                </div>
                {address.default_address ? (
                  <button
                    disabled
                    className="bg-gray-300 py-1 px-4 rounded mt-2"
                  >
                    Selected
                  </button>
                ) : (
                  <button
                    className="border border-blue-700 py-1 px-4 rounded mt-2"
                    onClick={() => handleAddressSelect(address)}
                  >
                    Select this address
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChangeAddress;
