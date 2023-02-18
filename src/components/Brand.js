import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Pedigree from "../assets/pedigree.jpg";
// import dog from "../assets/shop-dog.png";

// const brands = [
//   {
//     name: "Hill's Science Diet",
//     image: dog,
//   },
//   {
//     name: "Purina",
//     image: dog,
//   },
//   {
//     name: "Royal Canin",
//     image: dog,
//   },
//   {
//     name: "Wellness",
//     image: Pedigree,
//   },
//   {
//     name: "Blue Buffalo",
//     image: Pedigree,
//   },
//   {
//     name: "Iams",
//     image: Pedigree,
//   },
//   {
//     name: "Eukanuba",
//     image: Pedigree,
//   },
//   {
//     name: "Nutro",
//     image: Pedigree,
//   },
//   {
//     name: "Taste of the Wild",
//     image: Pedigree,
//   },
//   {
//     name: "Orijen",
//     image: Pedigree,
//   },
// ];

function Brand() {
  const [brands, setBrand] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("http://127.0.0.1:8000/api/brands/");
  }, []);

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
        setBrand(data.data);
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
      <div className="container mx-auto px-5">
        <div className="mb-20">
          <h4 className="text-xl font-bold mt-4 p-2 text-center">
            Shop By Brand
          </h4>
          <div className="flex flex-wrap">
            {error ? (
              <div>Error: {error}</div>
            ) : loading ? (
              <div>Loading...</div>
            ) : brands.length ? (
              brands.map((brand) => (
                <div  key={brand.id} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 p-2">
                  <div className="border rounded-md hover:shadow-lg">
                    <Link to={`/brands/${brand.slug}`}>
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-48 object-contain object-center"
                      />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div>No data found</div>
            )}
            {/* {brands.map((brand) => (
              <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/5 p-2">
                <div className="border rounded-md hover:shadow-lg">
                  <Link to="/brands/pedigree">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-48 object-cover object-center"
                    />
                  </Link>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Brand;
