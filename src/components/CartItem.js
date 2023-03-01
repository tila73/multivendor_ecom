import React from 'react';

function CartItem({ item }) {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center w-2/3">
        <img className="h-24 w-24 rounded-full mr-4" src={item.image} alt={item.name} />
        <div>
          <p className="text-lg font-bold">{item.name}</p>
          <p className="text-gray-600">{item.description}</p>
          <p className="text-gray-700">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex w-1/3 justify-end items-center">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2">
          -
        </button>
        <span className="font-bold text-lg">{item.quantity}</span>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ml-2">
          +
        </button>
      </div>
    </div>
  );
}

export default CartItem;
