import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products/")
      .then((response) => response.json())
      .then((data) => {
        setNextPage(data.links.next);
        setPrevPage(data.links.previous);
        setProducts(data.data);
        const totalPages = Math.ceil(data.count / 10);
        setTotalPages(totalPages);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleNextPage = () => {
    if (nextPage) {
      fetch(nextPage)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.data);
          setNextPage(data.links.next);
          setPrevPage(data.links.previous);
          setCurrentPage(currentPage + 1);
        })
        .catch((error) => console.log(error));
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      fetch(prevPage)
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.data);
          setNextPage(data.links.next);
          setPrevPage(data.links.previous);
          setCurrentPage(currentPage - 1);
        })
        .catch((error) => console.log(error));
    }
  };

  const handlePageClick = (pageNumber) => {
    fetch(`http://127.0.0.1:8000/api/products/?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
        setNextPage(data.links.next);
        setPrevPage(data.links.previous);
        setCurrentPage(pageNumber);
      })
      .catch((error) => console.log(error));
  };

  if (!products) {
    return <div>Loading...</div>;
  }

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
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
          <div className="flex justify-center mt-8">
            <ul className="flex pl-0 rounded list-none flex-wrap">
              <li
                className={`${
                  prevPage ? "" : "opacity-50 pointer-events-none"
                } px-3 py-2 rounded-lg border border-blue-300 mr-1 hover:bg-blue-200`}
              >
                <Link
                  to={`/shop/?page=${currentPage - 1}`}
                  onClick={handlePrevPage}
                >
                  Previous
                </Link>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i}
                  className={`${
                    currentPage === i + 1 ? "bg-blue-200" : ""
                  } px-3 py-2 rounded-lg border border-blue-300 mr-1 hover:bg-blue-200`}
                >
                  <Link to="#" onClick={() => handlePageClick(i + 1)}>
                    {i + 1}
                  </Link>
                </li>
              ))}
              <li
                className={`${
                  nextPage ? "" : "opacity-50 pointer-events-none"
                } px-3 py-2 rounded-lg border border-blue-300 mr-1 hover:bg-blue-200`}
              >
                <Link
                  to={`/shop/?page=${currentPage + 1}`}
                  onClick={handleNextPage}
                >
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Product;
