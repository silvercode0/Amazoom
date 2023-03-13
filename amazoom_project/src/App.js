import { Route, Routes } from 'react-router-dom';
import React from 'react';
<<<<<<< HEAD
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
=======
import "./App.css"
import Login from "./Login"
// import Supplier from "./Supplier"
// import BuyOptions from "./BuyOptions"

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Login></Login>
        <p class="test2">
          TESTING
        </p>
      </header>
      <footer>
        {/* <BuyOptions></BuyOptions>
        <Supplier></Supplier> */}
      </footer>
    </div>
>>>>>>> 1d54af54c3f92775aa6ea8dc703c46ab48ca8cba
  );
}


export default App;
