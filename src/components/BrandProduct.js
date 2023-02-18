import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function BrandProduct() {
  const [brandName, setBrandName] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { brand_slug } = useParams();

  useEffect(() => {
    fetchData(`http://127.0.0.1:8000/api/brands/${brand_slug}/`);
  }, [brand_slug]);

  function fetchData(baseurl) {
    setLoading(true);
    setError(null);

    fetch(baseurl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setBrandName(data.brand_name);
        setProducts(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-5 mb-12">
        <h4 className="text-xl font-bold mt-4 p-2 text-center">
        Products by {brandName}
        </h4>
        <div className="flex flex-wrap">
          {error ? (
            <div>Error: {error}</div>
          ) : loading ? (
            <div>Loading...</div>
          ) : products.length ? (
            products.map((product) => (
              <div key={product.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 p-2">
                <div className="border rounded-md hover:shadow-lg">
                  {/* <Link to={`/products/${product.slug}`}> */}
                  <Link>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-contain object-center"
                    />
                  </Link>
                  <div className="p-2">
                    <Link to={`/products/${product.slug}`} className="text-sm font-bold text-gray-800">
                      {product.title}
                    </Link>
                    <p className="text-sm font-bold text-gray-600">By {product.brand.name}</p>
                    <p className="text-sm font-bold text-gray-600">Rs. {product.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BrandProduct;
