import React, { useState } from 'react';
import axios from 'axios';

function AddToCart({ productId }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    axios.post('http://127.0.0.1:8000/api/add-to-cart/', {
      product_id: productId,
      quantity: quantity,
    })
      .then(response => {
        // Update the cart UI to show the new item(s) added to the cart
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}

export default AddToCart
