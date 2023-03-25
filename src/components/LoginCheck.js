import React from "react";
import CheckoutLogin from "./Customer/CheckoutLogin";
import CheckoutPage from "./CheckoutPage";
import { useContext } from "react";
import { UserContext } from "../Context";

const LoginCheck = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    return <CheckoutLogin />;
  }
  return <CheckoutPage />;
};

export default LoginCheck;
