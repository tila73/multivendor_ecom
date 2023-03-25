import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-5">
        <div className="mb-20">
          <h4 className="text-xl font-bold mt-4 p-2">All Products</h4>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
              >
                <Link to={`/products/${product.slug}/${product.id}`}>
                  <div className="border rounded-md">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover bg-slate-50"
                    />
                    <h5 className="text-lg font-bold mt-5 px-5">
                      {product.title}
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

export default Product;
