import React from "react";
import { HiX } from "react-icons/hi";
import { increase, decrease, remove } from "./State/Slice/CartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const decreaseQuantity = (customerId, productId) => {
  const formData = new FormData();
  formData.append("product_id", productId);
  formData.append("customer_id", customerId);
  axios
    .post("http://127.0.0.1:8000/api/decrease_quantity/", formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const increaseQuantity = (customerId, productId) => {
  const formData = new FormData();
  formData.append("product_id", productId);
  formData.append("customer_id", customerId);
  axios
    .post("http://127.0.0.1:8000/api/increase_quantity/", formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const removeItem = (customerId, productId) => {
  const formData = new FormData();
  formData.append("product_id", productId);
  formData.append("customer_id", customerId);
  axios
    .post("http://127.0.0.1:8000/api/remove_from_cart/", formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

const CartItems = ({ cartItem }) => {
  const customerId = localStorage.getItem("customer_id");
  const dispatch = useDispatch();
  const { id, price, amount, title, image } = cartItem;
  return (
    <div className="flex justify-between items-start border border-solid border-glass p-4 mb-6">
      <div className="flex items-center gap-4">
        <img src={image} alt="" className="w-20 h-20 object-cover" />
      </div>
      <div className="flex flex-col items-center max-w-[6.8rem] md:max-w-[20rem]">
        <div>{title}</div>
        {/* <div className="flex items-center gap-4 mt-2"> */}
        <div className="flex gap-4 mt-2">
          <button
            className="w-8 h-8 text-white bg-black rounded-full "
            onClick={() => {
              dispatch(decrease(cartItem));
              decreaseQuantity(customerId, cartItem.id);
            }}
          >
            -
          </button>
          <div>{amount}</div>
          <button
            className="w-8 h-8 text-white bg-black rounded-full "
            onClick={() => {
              dispatch(increase(cartItem));
              increaseQuantity(customerId, cartItem.id);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <HiX
          className="cursor-pointer text-xl"
          onClick={() => {
            dispatch(remove(cartItem));
            removeItem(customerId, cartItem.id);
          }}
        />
        <div>Rs. {(price * amount).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default CartItems;
