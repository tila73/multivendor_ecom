import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function SubCategory() {
  const { maincategory_slug, category_slug, subcategory_slug } = useParams();
  const [subcategory, setSubcategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/${maincategory_slug}/${category_slug}/${subcategory_slug}/`
    )
      .then((response) => response.json())
      .then((data) => {
        setSubcategory(data);
        setProducts(data.products);
      });
  }, [maincategory_slug, category_slug, subcategory_slug]);

  if (!subcategory) {
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
              {subcategory.main_category_name}
            </Link>
            &nbsp;/&nbsp;
            <Link
              to={`/${maincategory_slug}/${category_slug}`}
              className="underline text-blue-600 hover:text-blue-900"
            >
              {subcategory.category_name}
            </Link>
            &nbsp;/ {subcategory.name}
          </p>
          <h4 className="text-xl font-bold mt-4 p-2">
            {subcategory.main_category_name} {subcategory.name}
          </h4>
          <p className="p-2 text-lg">Results</p>
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
              >
                {/* <Link to={`/${maincategory_slug}/${category_slug}/${subcategory_slug}/${product.slug}`}> */}
                {/* <Link to={`/products/${product.slug}`}> */}
                <Link to={`/products/${product.slug}/${product.id}`}>
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
