import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Website
import Home from "./components/Home";
import Search from "./components/Search";
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
// import CheckoutPage from "./components/CheckoutPage";
import LoginCheck from "./components/LoginCheck";
// import OrderSuccess from "./components/OrderSuccess";
// import OrderFailure from "./components/OrderFailure";

// for cart
import { loadCart } from "./components/State/Slice/CartSlice";

// Customer Panel
import Register from "./components/Customer/Register";
import Login from "./components/Customer/Login";
import CheckoutLogin from "./components/Customer/CheckoutLogin";
import CheckoutRegister from "./components/Customer/CheckoutRegister";
import Logout from "./components/Customer/Logout";
import Dashboard from "./components/Customer/Dashboard";
import Orders from "./components/Customer/Orders";
import Whishlist from "./components/Customer/Whishlist";
import Profile from "./components/Customer/Profile";
import ChangePassword from "./components/Customer/ChangePassword";
import AddressList from "./components/Customer/AddressList";
import AddAddress from "./components/Customer/AddAddress";
import EditAddress from "./components/Customer/EditAddress";

// Seller Panel
import SellerRegister from "./components/Seller/SellerRegister";
import SellerLogin from "./components/Seller/SellerLogin";
import SellerLogout from "./components/Seller/SellerLogout";
import SellerDashboard from "./components/Seller/SellerDashboard";
import SellerProducts from "./components/Seller/SellerProducts";
import AddProduct from "./components/Seller/AddProduct";
import EditProduct from "./components/Seller/EditProduct";
import ViewProduct from "./components/Seller/ViewProduct";
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
    // Retrieve cart data from local storage
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      dispatch({ type: "cart/load", payload: JSON.parse(savedCartItems) });
    }
  }, [dispatch]);

  useEffect(() => {
    // Save cart data to local storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch(total());
  }, [cartItems, dispatch]);

  return (
    <>
      {isOpen && <Cart />}
      <Routes>
        {/* Customer routes */}
        <Route path="/customer/register" element={<Register />} />
        <Route
          path="/customer/checkout-register"
          element={<CheckoutRegister />}
        />
        <Route path="/customer/login" element={<Login />} />
        <Route path="/customer/checkout-login" element={<CheckoutLogin />} />
        <Route path="/customer/logout" element={<Logout />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/customer/orders" element={<Orders />} />
        <Route path="/customer/whishlist" element={<Whishlist />} />
        <Route path="/customer/profile" element={<Profile />} />
        <Route path="/customer/change-password" element={<ChangePassword />} />
        <Route path="/customer/addresses" element={<AddressList />} />
        <Route path="/customer/add-address" element={<AddAddress />} />
        <Route path="/customer/edit-address/:address_id" element={<EditAddress />} />

        {/* Seller routes */}
        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/logout" element={<SellerLogout />} />
        <Route path="/seller/register" element={<SellerRegister />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/products" element={<SellerProducts />} />
        <Route path="/seller/add-product" element={<AddProduct />} />
        <Route path="/seller/view-product/:product_id" element={<ViewProduct />} />
        <Route path="/seller/edit-product/:product_id" element={<EditProduct />} />
        <Route path="/seller/orders" element={<SellerOrders />} />
        <Route path="/seller/customers" element={<Customers />} />
        <Route path="/seller/profile" element={<SellerProfile />} />
        <Route
          path="/seller/change-password"
          element={<SellerChangePassword />}
        />

        {/* Website routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search/:searchString" element={<Search />} />
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
        {/* <Route path="/checkout" element={<CheckoutPage />} /> */}
        <Route path="/checkout" element={<LoginCheck />} />
        {/* <Route path="/order/failure" element={<OrderFailure />} /> */}
        <Route path="/add-to-cart" element={<AddToCart />} />
      </Routes>
    </>
  );
}

export default App;
