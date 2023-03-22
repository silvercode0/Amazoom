// import React from 'react';
// import App from './App';


// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);
// root.render(<App tab="home" />);


// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Products } from "./components";


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(reducers)}>
//       <HashRouter>
//           <App>
//               <Switch>                      
//                     <Route path="/" component={ Content }/>
//                     <Route path="login" component={Login} />
//                     <Route path="products" component={Products} />
//                     <Route path="logout" component={Logout} />
//                     <Route path="register" component={Register} />
//                     <Route path="profile" component={Profile} />
//                     <Route path="contactus" component={ ContactUs  }/>
//                 </Switch>
//           </App>
//       </HashRouter>
//     </Provider>
//     , document.querySelector('.container'));


// import React from "react";
// import ReactDOM from "react-dom/client";
// import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import App  from "./App"
// import Products from'./components/Products';
// import Footer from './components/Footer';
// import Logout from "./components/Logout";
// // import  Register  from "./components/Register";
// import Guest_Cart from './components/Guest_Cart'
// import MyProfile from './components/MyProfile';
// import Login from './components/Login';
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import ContactUs from "./components/ContactUs";


// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(
// <Routes>

//     <App />
  
// </Routes>);


// const Main = () => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" component={Home} />
//         <Route path="login" component={Login} />
//         <Route path="products" component={Products} />
//         <Route path="logout" component={Logout} />
//         <Route path="footer" component={Footer} />
//         {/* <Route path="register" component={Register} /> */}
//         <Route path="guesscart" component={Guest_Cart} />
//         <Route path="myprofile" component={MyProfile} />
//         <Route path="contactus" component={ ContactUs  }/>
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Main;

// import  Register  from "./components/Register";
// import Navbar from "./components/Navbar";

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
// import  App  from "./App";
// import Products from'./components/Products';
// import Footer from './components/Footer';
// import Logout from "./components/Logout";
// import Guest_Cart from './components/Guest_Cart'
// import MyProfile from './components/MyProfile';
// import Login from './components/Login';
// import "./App.css";
// import Home from "./components/Home";
// import BuyOptions from "./components/BuyOptions";
// import ContactUs from "./components/ContactUs";

// export default function Main() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route>
//          <Route path="/" component={Home} />
//          <Route path="/Login" component={Login} />
//          <Route path="/Products" component={Products} />
//          <Route path="/Logout" component={Logout} />
//          <Route path="/footer" component={Footer} />
//          <Route path="/BuyOptions" component={BuyOptions}/>
//          <Route path="/Guesscart" component={Guest_Cart} />
//          <Route path="/MyProfile" component={MyProfile} />
//          <Route path="/ContactUs" component={ ContactUs  }/>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import UserCart from "./components/Shopping_Cart";
// import Navbar from "./components/Navbar"
// import LoginUser from "./components/Login";
// import Products from "./components/Products";
// import Register from "./components/Register";
// import { authUser, getProducts, getUserCart } from "./api";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import OneProduct from "./components/OneProduct";
// import Home from "./components/Home";
// import "./components/Footer.css";
// import Guest_Cart from "./components/Guest_Cart";
// import Footer from "./components/Footer";
// import AdminPage from "./components/Admin";
// import AdminUsers from "./components/Admin";
// import AdminProducts from "./components/Admin";
// import OrderHistory from "./components/OrderHistory";
// import MyProfile from "./components/MyProfile";
// import Checkout from "./components/Shopping_Cart"
// import ContactUs from "./components/ContactUs"
// import "./loading.css"

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { RingLoader } from "react-spinners";
// const bodyParser = require("body-parser");
// Router.use(bodyParser.json());

// const Main = () => {
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 1500);
//   }, []);

//   const [user, setUser] = useState("");
//   // const [token, setToken] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [quantity, setCount] = useState(0);
//   const [userCart, setUserCart] = useState([]);

//   async function fetchUserCart() {
//     const allCart = await getUserCart();
//     setUserCart(allCart);
//   }

//   useEffect(() => {
//     fetchUserCart();
//   }, []);

//   useEffect(() => {
//     async function fetchProducts() {
//       let placeholder = await getProducts();
//       setProducts(placeholder.products);
//     }
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const localToken = localStorage.getItem("token");
//     if (localToken && !isLoggedIn) {
//       async function fetchUser() {
//         const me = await authUser(localToken);
//         setUser(me);
//         setIsLoggedIn(true);
//       }
//       fetchUser();
//     }
//   }, [isLoggedIn]);

//   return (
//     <main>
//       {loading ? (
//         <div id="theLoader">
//           {/* <RingLoader
//             id="ringer"
//             size={150}
//             color={"#d636d0"}
//             loading={loading}
//           />{" "} */}
//         </div>
//       ) : (
//         <div id="main">
//           <Router>
//             <Navbar
//               setUser={setUser}
//               user={user}
//               isLoggedIn={isLoggedIn}
//               setIsLoggedIn={setIsLoggedIn}
//             />
//             <Routes>
//               <Route exact path="/" element={<Home />} />

//               <Route
//                 path="/login"
//                 element={
//                   <LoginUser setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
//                 }
//               />
//               <Route
//                 path="/orderhistory"
//                 element={<OrderHistory products={Products} />}
//               />
//               <Route path="/register" element={<Register />} />
//               <Route
//                 path="/products"
//                 element={
//                   <Products
//                     user={user}
//                     userCart={userCart}
//                     setUserCart={setUserCart}
//                     fetchUserCart={fetchUserCart}
//                     products={products}
//                     setProducts={setProducts}
//                   />
//                 }
//               />
//               <Route path="/GuestCart" element={<Guest_Cart />} />
//               <Route
//                 path="/product/:productId"
//                 element={
//                   <OneProduct
//                     userCart={userCart}
//                     setUserCart={setUserCart}
//                     products={products}
//                     user={user}
//                     quantity={quantity}
//                     setCount={setCount}
//                   />
//                 }
//               />
//               <Route
//                 path="/Shopping_Cart/Cart_Items"
//                 element={
//                   <UserCart
//                     products={products}
//                     setProducts={setProducts}
//                     quantity={quantity}
//                     setCount={setCount}
//                     userCart={userCart}
//                     setUserCart={setUserCart}
//                     fetchUserCart={fetchUserCart}
//                     user={user}
//                   />
//                 }
//               />
//               <Route path="/Shopping_Cart" element={<Checkout />} />
//               <Route path="/ContactUs" element={<ContactUs />} />
//               <Route path="/Admin" element={<AdminPage user={user} />} />
//               <Route path="/Admin" element={<AdminUsers user={user} />} />
//               <Route
//                 path="/Admin"
//                 element={<AdminProducts user={user} />}
//               />
//               <Route path="/Home" element={<Home />} />
//               <Route
//                 path="/MyProfile"
//                 element={<MyProfile user={user} products={products} />}
//               />
//             </Routes>
//             <Footer />
//           </Router>

//           <ToastContainer
//             position="bottom-right"
//             autoClose={2000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover={false}
//             theme="light"
//           />
//         </div>
//       )}
//     </main>
//   );
// };

// export default Main;

import React from 'react'
import ReactDOM from "react-dom/client"
import Main from './App'


// const container = document.getElementById('app')
// const root = ReactDOM.createRoot(container)

// root.render(<Main />)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);