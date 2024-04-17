import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductInfo from './ProductInfo';
import ProductSummary from './ProductSummary';
import ViewCart from './ViewCart';

function ProductPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const checkout = () => {
    // Implement checkout logic here, e.g., navigate to a checkout page
    alert('Checkout functionality to be implemented.');
  };

  const products = [
    { id: 1, name: 'Hotdog', price: '15', description: 'Mahaba na mainit' },
    { id: 2, name: 'Burger', price: '35', description: 'Plat na mainit' },
    { id: 3, name: 'Siopao', price: '25', description: 'Bilog na mainit' },
    { id: 4, name: 'Footlong', price: '45', description: 'Mas mahaba na mainit' },
    { id: 5, name: 'Turon', price: '20', description: 'Mahaba din pero saging' },
    { id: 6, name: 'Tao', price: '10000000', description: 'Mahaba din to kaso buhay' },
    { id: 7, name: 'Fishball', price: '1', description: 'Maliit na bilog na mainit' },
    { id: 8, name: 'KwekKwek', price: '10', description: 'Description' },
    { id: 9, name: 'Kikkyam', price: '2', description: 'Description' },
    { id: 10, name: 'Shawarma', price: '80', description: 'Description' },
  ];

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Company Logo</Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">My Cart</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/products">
          <ProductSummary cart={cart} />
          <h1>PRODUCTS</h1>
          {products.map(product => (
            <ProductInfo 
              key={product.id} 
              name={product.name} 
              price={product.price} 
              description={product.description} 
              onAddToCart={() => addToCart(product)} 
            />
          ))}
        </Route>
        <Route path="/cart">
          <ViewCart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
        </Route>
        <Route exact path="/">
          <div className="container text-center mt-5">
            <h1>Welcome to Our Store</h1>
            <Link to="/products" className="btn btn-primary mt-3">Proceed to Shopping</Link>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default ProductPage;