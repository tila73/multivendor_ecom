// import React, { useState, useEffect } from "react";

function ProductList() {
  // const products = [
  //   {
  //     id: 1,
  //     name: 'Product 1',
  //     description: 'Lorem ipsum dolor sit amet',
  //     price: '$10',
  //     image: 'https://via.placeholder.com/150',
  //   },
  //   {
  //     id: 2,
  //     name: 'Product 2',
  //     description: 'Lorem ipsum dolor sit amet',
  //     price: '$20',
  //     image: 'https://via.placeholder.com/150',
  //   },
  // ];

  // const [products, setProduct] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchData("http://127.0.0.1:8000/api/products/");
  // }, []);

  // function fetchData(baseurl) {
  //   setLoading(true);
  //   setError(null);

  //   fetch(baseurl)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setProduct(data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       setLoading(false);
  //     });
  // }

  return (
    <div className="flex flex-wrap justify-between">
      {/* {products.map((product) => (
        <div key={product.id} className="w-1/4 px-2 mb-4">
          <img src={product.image} alt={product.title} className="w-full" />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="mt-2 font-bold">{product.price}</p>
        </div>
      ))} */}
    </div>
  );
}

export default ProductList;
