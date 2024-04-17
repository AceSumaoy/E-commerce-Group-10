import React from 'react';

function ViewCart({ cart, removeFromCart, checkout }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul className="list-group">
        {cart.map(item => (
          <li className="list-group-item" key={item.id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.name}</strong> - ₱{item.price}
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={checkout}>Checkout</button>
    </div>
  );
}

export default ViewCart;