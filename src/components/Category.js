import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import customers from "../assets/customers.png";
import bar from "../assets/bar.png";
import payment from "../assets/payment.png";
import { Link } from "react-router-dom";

function CategoryPage() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: bar,
      price: "$10",
    },
    {
      id: 2,
      name: "Product 2",
      image: payment,
      price: "$20",
    },
    {
      id: 3,
      name: "Product 3",
      image: customers,
      price: "$30",
    },
    {
      id: 4,
      name: "Product 4",
      image: bar,
      price: "$40",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-5">
        <div className="mb-20">
          <h4 className="text-xl font-bold mt-4 p-2">Dog Food</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 p-2">
            <div className="bg-white p-5 shadow-lg rounded-lg flex flex-col items-center">
              <img src={customers} className="w-40 h-40 mb-5" alt="Category" />
              <Link to="/dog/food/dry-food">
                <h5 className="text-lg font-bold">Dry Food</h5>
              </Link>
            </div>
            <div className="bg-white p-5 shadow-lg rounded-lg flex flex-col items-center">
              <img src={bar} className="w-40 h-40 mb-5" alt="Category" />
              <h5 className="text-lg font-bold">Wet Food</h5>
            </div>
            <div className="bg-white p-5 shadow-lg rounded-lg flex flex-col items-center">
              <img src={payment} className="w-40 h-40 mb-5" alt="Category" />
              <h5 className="text-lg font-bold">Prescription Food</h5>
            </div>
          </div>
          <p className="p-2">Results</p>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
                <div className="border rounded-md">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover bg-slate-50"
                  />
                  <h5 className="text-lg font-bold mt-5 px-5">
                    {product.name}
                  </h5>
                  <p className="text-sm text-gray-600 mt-2 px-5">
                    {product.price}
                  </p>
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

export default CategoryPage;
