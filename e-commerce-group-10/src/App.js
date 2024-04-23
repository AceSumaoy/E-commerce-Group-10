import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import ProductPage from './Components/ProductPage';
import Home from './Components/Home ';
import CartPage from './Components/CartPage';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='productpage' element={<ProductPage/>}/>
        <Route path='cartpage' element={CartPage}/>
      </Routes>
    </>
    
  );
}

export default App;