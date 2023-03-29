import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function Search() {
  const [products, setProducts] = useState([]);
  const { searchString } = useParams();

  useEffect(() => {
    try {
      axios.get(baseUrl + "/search-products/" + searchString).then((res) => {
        setProducts(res.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [searchString]);

  return (
    <div>
      <Header />
      <div className="container mx-auto px-5">
        <div className="mb-20">
          <h4 className="text-xl font-bold mt-4 p-2">Search results for <span className="text-blue-500">{searchString}</span></h4>
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

export default Search;
