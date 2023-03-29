import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewProduct() {
  const { product_id } = useParams();
  const baseUrl = "http://127.0.0.1:8000/api/";
  const [product, setProduct] = useState({});

  useEffect(() => {
    try {
      axios.get(baseUrl + "vendor-product-detail/" + product_id).then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [product_id]);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-96 lg:h-auto lg:max-h-96 flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="text-gray-600 text-base mb-4">${product.price}</p>
        <p className="text-base mb-8" dangerouslySetInnerHTML={{ __html: product.detail }} />
        <div className="flex flex-wrap">
          {product.product_images &&
            product.product_images.map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt={product.title}
                className="w-24 h-24 mr-2 mb-2 object-cover cursor-pointer"
              />
            ))}
        </div>
        <p className="text-base mt-8">Category: {product.category}</p>
        <p className="text-base">Subcategory: {product.subcategory}</p>
        <p className="text-base">Brand: {product.brand}</p>
        <p className="text-base">Vendor: {product.vendor}</p>
        <p className="text-base">Quantity: {product.quantity}</p>
      </div>
    </div>
  );
}

export default ViewProduct;