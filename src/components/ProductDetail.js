import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { add } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";

function ProductDetail() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { product_slug } = useParams();
  // const { maincategory_slug, category_slug, subcategory_slug, product_slug  } = useParams();

  useEffect(() => {
    // fetch(`http://127.0.0.1:8000/api/${maincategory_slug}/${category_slug}/${subcategory_slug}/${product_slug}/`)
    fetch(`http://127.0.0.1:8000/api/products/${product_slug}/`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        if (data.product_images && data.product_images.length > 0) {
          setSelectedImage(data.product_images[0].image);
        }
      });
  }, [product_slug]);
  // }, [maincategory_slug, category_slug, subcategory_slug, product_slug]);

  const changeImage = (img) => {
    setSelectedImage(img);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  let listItems;
  if (product.detail.includes("<ul>")) {
    listItems = product.detail.match(/<li>(.*?)<\/li>/g) || [];
  } else {
    listItems = product.detail.split("\r\n").filter((item) => item !== "");
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-6 py-10">
        {/* <p className="mt-3 p-2 ">
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
        </p> */}
        {/* <p className="mt-3 p-2 ">
        {product.main_category_name} / {product.category.name} / {product.subcategory.name}
        </p> */}
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 text-center">
            <img
              src={selectedImage}
              alt="Product"
              className="m-auto"
              style={{ height: "400px", width: "300px" }}
            />
            <div className="flex mt-4 justify-center">
              {product.product_images.map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt={product.title}
                  className={`w-10 h-10 mr-2 cursor-pointer border border-gray-300 rounded-lg ${
                    img.image === selectedImage
                      ? "border-blue-500 border-2"
                      : ""
                  }`}
                  style={{ height: "80px", width: "80px" }}
                  onClick={() => changeImage(img.image)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3 p-6">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-base mt-3">
              By{" "}
              <Link
                to={`/brands/${product.brand.slug}`}
                className="text-blue-700 hover:text-blue-900 hover:underline font-semibold"
              >
                {product.brand.name}
              </Link>
            </p>
            <div className="mt-3">
              Price:{" "}
              <span className="text-xl font-bold">Rs. {product.price}</span>
            </div>
            <button
              className="bg-blue-500 text-white p-3 mt-6"
              onClick={() => dispatch(add(product))}
            >
              Add to Cart
            </button>
            <h2 className="text-lg font-bold mt-6">Product description</h2>
            <ul className="list-disc ml-5">
              {listItems.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
              ))}
            </ul>
            {/* <p className="text-base mt-4">{product.detail}</p>

            {/* <div className="mt-6">
              <h2 className="text-lg font-bold">Customer Reviews:</h2>
              {product.product_ratings.map((rating, index) => (
                <p key={index} className="mt-2 text-base">
                  {rating.comment}
                </p>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
