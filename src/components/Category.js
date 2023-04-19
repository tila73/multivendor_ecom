import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function CategoryPage() {
  const { maincategory_slug, category_slug } = useParams();
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/${maincategory_slug}/${category_slug}/`)
      .then((response) => response.json())
      .then((data) => {
        setCategory(data);
        setSubcategories(data.subcategories);
        setProducts(data.products);
      });
  }, [maincategory_slug, category_slug]);
  // useEffect(() => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/dog/food/`)
  //     .then((res) => {
  //       setCategory(res.data);
  //       setProducts(res.data.products);
  //       setSubcategories(res.data.subcategories);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [categorySlug]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-5">
        <div className="mb-20">
          <p className="mt-3 p-2 ">
            <Link
              to={`/${maincategory_slug}`}
              className="underline text-blue-600 hover:text-blue-900"
            >
              {category.main_category_name}
            </Link>
            &nbsp;/ {category.name}
          </p>
          <h4 className="text-xl font-bold mt-2 p-2">
            {category.main_category_name} {category.name}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 p-2">
            {/* {subcategories.map((subcategory) => ( */}
            {subcategories &&
              subcategories.length > 0 &&
              subcategories.map((subcategory) => (
                <div
                  key={subcategory.id}
                  className="bg-white p-5 shadow-lg rounded-lg flex flex-col items-center"
                >
                  <Link
                    to={`/${maincategory_slug}/${category.slug}/${subcategory.slug}`}
                  >
                    <img
                      src={`http://127.0.0.1:8000${subcategory.image}`}
                      className="w-40 h-40 mb-5"
                      alt={subcategory.name}
                    />
                    <h5 className="text-lg font-bold">{subcategory.name}</h5>
                  </Link>
                </div>
              ))}
          </div>
          <p className="p-2 text-lg bold mb-2 mt-4">Results</p>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
              >
                <div className="border rounded-md">
                  <img
                    src={`http://127.0.0.1:8000${product.image}`}
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
