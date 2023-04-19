import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
// import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./Sidebar";

function Orders() {
  const baseUrl = "http://127.0.0.1:8000/api/";
  const customerId = localStorage.getItem("customer_id");
  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    fetchData(baseUrl + "customer/" + customerId + "/orderitems");
  }, []);

  function fetchData(baseUrl) {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setOrderItems(data.data);
      });
  }

  // console.log(orderItems);

  return (
    <div>
      <Header />
      <div className="flex flex-col pt-8 px-12 sm:px-24 pb-20 lg:flex-row">
        <Sidebar />
        <div className="overflow-x-auto lg:w-full">
          <div className="py-4 md:py-0 inline-block min-w-full sm:px-6 lg:px-8">
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
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderItems.map((item, index) => {
                    return (
                      <tr className="bg-white border-b" key={item.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 wrap flex items-center">
                          <img
                            // className="mx-auto mb-2"
                            src={item.product.image}
                            alt={item.product.title}
                            className="w-20 mr-4"
                          />
                          {item.product.title}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.quantity}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {item.price}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
