import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import reactlogo from "../logo.svg";
import dog from "../assets/shop-dog.png";
import kitty from "../assets/kitty.jpg";
import { Link } from "react-router-dom";

function SubCategory() {
  const products = [
    {
      id: 1,
      name: "Product 1",
      image: kitty,
      price: "$10",
    },
    {
      id: 2,
      name: "Product 2",
      image: dog,
      price: "$20",
    },
    {
      id: 3,
      name: "Product 3",
      image: reactlogo,
      price: "$30",
    },
    {
      id: 4,
      name: "Product 4",
      image: reactlogo,
      price: "$40",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-5">
        <div className="mb-20">
          <h4 className="text-xl font-bold mt-4 p-2">Dry Dog Food</h4>
          <p className="p-2">Results</p>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2">
                <Link to="/dog/food/dry-food/Purina Pro Plan Focus Adult Dry Dog Food ">
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SubCategory;
