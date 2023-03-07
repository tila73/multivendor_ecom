import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Website
import Home from "./components/Home";
import Shop from "./components/Shop";
import MainCategory from "./components/MainCategory";
import Category from "./components/Category";
import SubCategory from "./components/SubCategory";
import ProductDetail from "./components/ProductDetail";
import Brand from "./components/Brand";
import BrandProduct from "./components/BrandProduct";
import Sell from "./components/Sell";
import Cart from "./components/Cart";
// import Cart from "./components/Checkout";
import OrderSuccess from "./components/OrderSuccess";
import OrderFailure from "./components/OrderFailure";

// Customer Panel
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import Logout from "./components/Customer/Logout";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import Whishlist from "./components/Customer/Whishlist";
import Profile from "./components/Customer/Profile";
import ChangePassword from "./components/Customer/ChangePassword";
import AddressList from "./components/Customer/AddressList";
import AddAddress from "./components/Customer/AddAddress";

// Seller Panel
import SellerRegister from "./components/Seller/SellerRegister";
import SellerLogin from "./components/Seller/SellerLogin";
import SellerDashboard from "./components/Seller/SellerDashboard";
import SellerProducts from "./components/Seller/SellerProducts";
import AddProduct from "./components/Seller/AddProduct";
import SellerOrders from "./components/Seller/SellerOrders";
import Customers from "./components/Seller/Customers";
import SellerProfile from "./components/Seller/SellerProfile";
import SellerChangePassword from "./components/Seller/SellerChangePassword";

import AddToCart from "./components/AddToCart";

// import { CartContext } from "./Context";
// import { useState } from "react";
// const checkCart = localStorage.getItem("cartItem");

import { useSelector, useDispatch } from "react-redux";
import { total } from "./components/State/Slice/CartSlice";

function App() {
  const { isOpen } = useSelector((state) => state.checkout);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [cartItems]);

  return (
    <>
      {isOpen && <Cart />}
      <Routes>
        {/* Customer routes */}
        <Route path="/customer/register" element={<Register />} />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/logout" element={<Logout />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/orders" element={<Orders />} />
        <Route path="/customer/whishlist" element={<Whishlist />} />
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/customer/change-password" element={<ChangePassword />} />
        <Route path="/customer/addresses" element={<AddressList />} />
        <Route path="/customer/add-address" element={<AddAddress />} />

        {/* Seller routes */}
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/products" element={<SellerProducts />} />
        <Route path="/seller/add-product" element={<AddProduct />} />
        <Route path="/seller/orders" element={<SellerOrders />} />
        <Route path="/seller/customers" element={<Customers />} />
        <Route path="/seller/profile" element={<SellerProfile />} />
        <Route
          path="/seller/change-password"
          element={<SellerChangePassword />}
        />

        {/* Website routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/shop/dog" element={<MainCategory />} /> */}
        <Route path="/:maincategory_slug" element={<MainCategory />} />
        <Route
          path="/:maincategory_slug/:category_slug"
          element={<Category />}
        />
        <Route
          path="/:maincategory_slug/:category_slug/:subcategory_slug"
          element={<SubCategory />}
        />
        {/* <Route path="/products/:product_slug" element={<ProductDetail />} /> */}
        <Route
          path="/products/:product_slug/:product_id"
          element={<ProductDetail />}
        />
        {/* <Route path="/:maincategory_slug/:category_slug/:subcategory_slug/:product_slug" element={<ProductDetail />} /> */}
        <Route path="/brands" element={<Brand />} />
        <Route path="/brands/:brand_slug" element={<BrandProduct />} />
        <Route path="/sell" element={<Sell />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Checkout /> */}
        <Route element={<Cart />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route path="/order/failure" element={<OrderFailure />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
      </Routes>
    </>
  );
}

export default App;
