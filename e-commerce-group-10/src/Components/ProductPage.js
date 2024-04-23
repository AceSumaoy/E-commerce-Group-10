import React, { useState } from 'react';
import ProductInfo from './ProductInfo';
import ProductSummary from './ProductSummary';
import ViewCart from './ViewCart';
import Modal from './Modal';

function ProductPage() {

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

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

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

  const removeFromCart = (productId, decrement = false) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        if (decrement && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null;
        }
      }
      return item;
    }).filter(Boolean); 
    setCart(updatedCart);
  };

  const checkout= () => {
    console.log(cart)
    setCart([]);
  };

  const product = [
    { id: 1, name: "Hotdog", price: "15", description: "Mahaba na mainit" },
    { id: 2, name: "Burger", price: "35", description: "Plat na mainit" },
    { id: 3, name: "Siopao", price: "25", description: "Bilog na mainit" },
    {
      id: 4,
      name: "Footlong",
      price: "45",
      description: "Mas mahaba na mainit",
    },

    {
      id: 5,
      name: "Turon",
      price: "20",
      description: "Mahaba din pero saging",
    },

    {
      id: 6,
      name: "Tao",
      price: "10000000",
      description: "Mahaba din to kaso buhay",
    },

    {
      id: 7,
      name: "Fishball",
      price: "1",
      description: "Maliit na bilog na mainit",
    },

    { id: 8, name: "KwekKwek", price: "10", description: "Description" },
    { id: 9, name: "Kikkyam", price: "2", description: "Description" },
    { id: 10, name: "Shawarma", price: "80", description: "Description" },
  ];

  return (
    <div>
      <ProductSummary cart={cart} />
      {!showCart && <button onClick={() => setShowCart(true)}>View Cart</button>}
      {showCart && (
        <Modal onClose={() => setShowCart(false)}>
          <ViewCart cart={cart} removeFromCart={removeFromCart} checkout={checkout}/>
        </Modal>
      )}
      
      <h1>PRODUCTS</h1>
      {products.map(product => (
        <ProductInfo 
          key={product.id} 
          id={product.id}
          name={product.name} 
          price={product.price} 
          description={product.description} 
          onAddToCart={() => addToCart(product)} 
        />
      ))}
    </div>
  );
}

export default ProductPage;