import React from 'react';

function ViewCart({ cart, removeFromCart , checkout}) {
  const handleRemove = (itemId) => {
    const existingItem = cart.find(item => item.id === itemId);
    if (existingItem.quantity > 1) {
      removeFromCart(itemId, 1);
    } else {
      removeFromCart(itemId, 0);
    }
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <div>
              <span>{item.name} - ₱{item.price}.00 - Quantity: {item.quantity}        </span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      {/* Temporary Checkout Button */}
      <button onClick={checkout}>Checkout</button>
    </div>
  );
}

export default ViewCart;