import React, { useState, useEffect, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext, CartContext } from "../Context";
// import axios from 'axios';

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { product_slug, product_id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [cartButtonClickStatus, setcartButtonClickStatus] = useState(false);
  const { cartItem, setCartItem } = useContext(CartContext);
  // const [isAddedToCart, setIsAddedToCart] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
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
    checkProductInCart(product_id);
  }, [product_slug]);
  // }, [maincategory_slug, category_slug, subcategory_slug, product_slug]);

  const changeImage = (img) => {
    setSelectedImage(img);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  function checkProductInCart(product_id) {
    var previousCart = localStorage.getItem("cartItem");
    var cartJson = JSON.parse(previousCart);
    if (cartJson != null) {
      cartJson.map((cart) => {
        if (cart !== null && cart.product.id === product_id) {
          setcartButtonClickStatus(true);
        }
      });
    }
  }

  const cartAddButtonHandler = () => {
    var previousCart = localStorage.getItem("cartItem");
    var cartJson = JSON.parse(previousCart);
    var cartItem = {
      product: {
        id: product.id,
        title: product.title,
      },
      user: {
        id: 1,
      },
    };
    // var cartItem = [
    //   {
    //     product: {
    //       id: product.id,
    //       title: product.title,
    //     },
    //     user: {
    //       id: 1,
    //     },
    //   },
    // ];
    if (cartJson != null) {
      cartJson.push(cartItem);
      var cartString = JSON.stringify(cartJson);
      localStorage.setItem("cartItem", cartString);
      setCartItem(cartJson);
    } else {
      var newCartList = [];
      newCartList.push(cartItem);
      var cartString = JSON.stringify(newCartList);
      // cartString = JSON.stringify(newCartList);
      localStorage.setItem("cartItem", cartString);
    }
    setcartButtonClickStatus(true);
  };

  const cartRemoveButtonHandler = () => {
    // localStorage.removeItem("cartItem");
    var previousCart = localStorage.getItem("cartItem");
    var cartJson = JSON.parse(previousCart);
    cartJson.map((cart, index) => {
      if (cart !== null && cart.product.id === product.id) {
        // delete cartJson[index];
        cartJson.splice(index, 1);
      }
    });
    var cartString = JSON.stringify(cartJson);
    localStorage.setItem("cartItem", cartString);
    setcartButtonClickStatus(false);
    setCartItem(cartJson);
  };

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
              style={{ height: "400px", width: "400px" }}
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
            <p className="text-base mt-6">{product.detail}</p>
            <p className="text-base mt-6">
              By{" "}
              <Link
                to=""
                className="text-blue-700 hover:text-blue-900 hover:underline"
              >
                {product.brand.name}
              </Link>
            </p>
            <p className="text-xl mt-6 font-bold">Rs. {product.price}</p>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            {!cartButtonClickStatus && (
              <button
                type="button"
                className="bg-blue-500 text-white p-3 mt-6"
                onClick={cartAddButtonHandler}
              >
                Add to Cart
              </button>
            )}
            {cartButtonClickStatus && (
              <button
                type="button"
                className="bg-red-500 text-white p-3 mt-6"
                onClick={cartRemoveButtonHandler}
              >
                Remove from cart
              </button>
            )}
            <div className="mt-6">
              <h2 className="text-lg font-bold">Customer Reviews:</h2>
              {product.product_ratings.map((rating, index) => (
                <p key={index} className="mt-2 text-base">
                  {rating.comment}
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

export default ProductDetail;
