// import React from 'react';
// import "./App.css"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from './Home';
// import Footer from './Footer';
// import Navbar from './Navbar';

// import "./Home.css";

// import Guest_Cart from './Guest_Cart'
// import MyProfile from './MyProfile';
// import Login from './Login';
// import Supplier from "./Supplier"
// import Products from'./Products';
// import Shopping_Cart from './Shopping_Cart';

// function App() {
//   return (
//     <div className="navbar">

//     <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="login" element={<Login />} />
//     <Route path="navbar" element={<Navbar />} />
//     <Route path="myProfile" element={<MyProfile />} />
//     <Route path="shopping_cart" element={<Shopping_Cart />} />
//     <Route path="products" element={<Products />} />
//   </Routes>
//   </div>
//   );
// }


// export default App;





// function App() {
//   return (
  
//     <div style={{ textAlign: 'center' }}>
//       <header>
//         <div><Home/></div>
//          <Navbar/>
       
       
//         {/* <Supplier/> */}
//       </header>
//       {/* <Guest_Cart /> */}
      
//        <footer>
//         <Footer />
//        </footer>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import UserCart from "./Shopping_Cart";
import Navbar from "./Navbar"
import LoginUser from "./Login";
import Products from "./Products";
import Register from "./Register";
import { authUser, getProducts, getUserCart } from "../api/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OneProduct from "./OneProduct";
import Home from "./Home";
import "./Footer.css";
import Guest_Cart from "./Guest_Cart";
import Footer from "./Footer";
import AdminPage from "./Admin";
import AdminUsers from "./Admin";
import AdminProducts from "./Admin";
import OrderHistory from "./OrderHistory";
import MyProfile from "./MyProfile";
import Checkout from "./Shopping_Cart"
import ContactUs from "./ContactUs"
// import "./loading.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { RingLoader } from "react-spinners";
// const bodyParser = require("body-parser");
// Router.use(bodyParser.json());

const Main = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const [user, setUser] = useState("");
  // const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);
  const [quantity, setCount] = useState(0);
  const [userCart, setUserCart] = useState([]);

  async function fetchUserCart() {
    const allCart = await getUserCart();
    setUserCart(allCart);
  }

  useEffect(() => {
    fetchUserCart();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      let placeholder = await getProducts();
      setProducts(placeholder.products);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken && !isLoggedIn) {
      async function fetchUser() {
        const me = await authUser(localToken);
        setUser(me);
        setIsLoggedIn(true);
      }
      fetchUser();
    }
  }, [isLoggedIn]);

  return (
    <main>
      {loading ? (
        <div id="theLoader">
          {/* <RingLoader
            id="ringer"
            size={150}
            color={"#d636d0"}
            loading={loading}
          />{" "} */}
        </div>
      ) : (
        <div id="main">
          <Router>
            <Navbar
              setUser={setUser}
              user={user}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
            <Routes>
              <Route exact path="/" element={<Home />} />

              <Route
                path="/login"
                element={
                  <LoginUser setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
                }
              />
              <Route
                path="/orderhistory"
                element={<OrderHistory products={Products} />}
              />
              <Route path="/register" element={<Register />} />
              <Route
                path="/products"
                element={
                  <Products
                    user={user}
                    userCart={userCart}
                    setUserCart={setUserCart}
                    fetchUserCart={fetchUserCart}
                    products={products}
                    setProducts={setProducts}
                  />
                }
              />
              <Route path="/GuestCart" element={<Guest_Cart />} />
              <Route
                path="/product/:productId"
                element={
                  <OneProduct
                    userCart={userCart}
                    setUserCart={setUserCart}
                    products={products}
                    user={user}
                    quantity={quantity}
                    setCount={setCount}
                  />
                }
              />
              <Route
                path="/Shopping_Cart/Cart_Items"
                element={
                  <UserCart
                    products={products}
                    setProducts={setProducts}
                    quantity={quantity}
                    setCount={setCount}
                    userCart={userCart}
                    setUserCart={setUserCart}
                    fetchUserCart={fetchUserCart}
                    user={user}
                  />
                }
              />
              <Route path="/Shopping_Cart" element={<Checkout />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Admin" element={<AdminPage user={user} />} />
              <Route path="/Admin" element={<AdminUsers user={user} />} />
              <Route
                path="/Admin"
                element={<AdminProducts user={user} />}
              />
              <Route path="/Home" element={<Home />} />
              <Route
                path="/MyProfile"
                element={<MyProfile user={user} products={products} />}
              />
            </Routes>
            <Footer />
          </Router>

          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
          />
        </div>
      )}
    </main>
  );
};

export default Main;