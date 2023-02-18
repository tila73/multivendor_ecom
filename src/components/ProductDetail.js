import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product1 from "../assets/category1.jpg";
import Cat from "../assets/kitty.jpg";
import Dog from "../assets/dog.jpg";

function PrdouctDetail() {
  const [product] = useState({
    title: "Product Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In auctor, magna eu convallis bibendum, sapien eros bibendum velit, id sollicitudin diam sapien vel odio.",
    brand: "Pedigree",
    price: 19.99,
    images: [Product1, Cat, Dog],
    image: Product1,
    reviews: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "In auctor, magna eu convallis bibendum, sapien eros bibendum velit.",
    ],
  });

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  const changeImage = (img) => {
    setSelectedImage(img);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 text-center">
            <img
              src={selectedImage}
              alt="Product"
              className="m-auto"
              style={{ height: "400px", width: "400px" }}
            />
            <div className="flex mt-4 justify-center">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Product Thumbnail"
                  className={`w-10 h-10 mr-2 cursor-pointer border border-gray-300 rounded-lg ${
                    img === selectedImage ? "border-blue-500 border-2" : ""
                  }`}
                  style={{ height: "80px", width: "80px" }}
                  onClick={() => changeImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3 p-6">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-base mt-6">{product.description}</p>
            <p className="text-base mt-6">By {product.brand}</p>
            <p className="text-xl mt-6 font-bold">${product.price}</p>
            <button className="bg-blue-500 text-white p-3 mt-6">
              Add to Cart
            </button>
            <div className="mt-6">
              <h2 className="text-lg font-bold">Customer Reviews:</h2>
              {product.reviews.map((review, index) => (
                <p key={index} className="mt-2 text-base">
                  {review}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PrdouctDetail;
