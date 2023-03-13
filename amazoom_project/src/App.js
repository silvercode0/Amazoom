import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './Navbar.css';
import './App.css';
import Home from './Home';
import MyProfile from './MyProfile';
import Navbar from './Navbar';
import Login from './Login';
import Products from'./Products';
import Shopping_Cart from './Shopping_Cart';

function App() {
  return (
    <div className="navbar">

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="navbar" element={<Navbar />} />
    <Route path="myProfile" element={<MyProfile />} />
    <Route path="shopping_cart" element={<Shopping_Cart />} />
    <Route path="products" element={<Products />} />
  </Routes>
  </div>
  );
}


export default App;
