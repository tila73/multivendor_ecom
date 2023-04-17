import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./KhaltiConfig";

export default function Khalti() {
  let checkout = new KhaltiCheckout({
    ...config,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return (
    <div>
      <button onClick={() => checkout.show({ amount: 10000 })}>
        Pay Via Khalti
      </button>
    </div>
  );
}
