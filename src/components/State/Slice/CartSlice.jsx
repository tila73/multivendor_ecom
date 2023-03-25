import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  amount: JSON.parse(localStorage.getItem("amount")) || 0,
  total: JSON.parse(localStorage.getItem("total")) || 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.amount++;
      const cartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.id
      );
      cartItem
        ? (cartItem.amount = cartItem.amount + 1)
        : state.cartItems.push({ ...action.payload, amount: 1 });
      state.total += action.payload.price;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("amount", JSON.stringify(state.amount));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    increase: (state, action) => {
      state.amount++;
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].amount += 1;
      state.total += action.payload.price;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("amount", JSON.stringify(state.amount));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    decrease: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      state.cartItems[itemIndex].amount > 0 &&
        state.cartItems[itemIndex].amount-- &&
        state.amount--;
      state.total -= action.payload.price;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("amount", JSON.stringify(state.amount));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    remove: (state, action) => {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.amount = state.amount - cartItem.amount;
          state.total -= cartItem.price * cartItem.amount;
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
          localStorage.setItem("amount", JSON.stringify(state.amount));
          localStorage.setItem("total", JSON.stringify(state.total));
        }
      });
    },
    total: (state) => {
      let total = 0;
      state.cartItems.forEach((cartItem) => {
        total += cartItem.amount * cartItem.price;
      });
      state.total = total;
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    clear: (state) => {
      state.cartItems = [];
      state.amount = 0;
      state.total = 0;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("amount", JSON.stringify(state.amount));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
  },
});

export const { add, increase, decrease, remove, total, clear } =
  CartSlice.actions;
export default CartSlice.reducer;
