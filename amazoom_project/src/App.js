// import { Route, Routes } from 'react-router-dom';
// import React from 'react';
// import './Navbar.css';
// import "./Supplier.css";
import "./Home.css";
import './Products.css';
import React from 'react';
import "./App.css"
import Home from './Home';
import MyProfile from './MyProfile';
// import Navbar from './Navbar';
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





function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <Home/>
        <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <p class="test2">
          TESTING
        </p>
        {/* <Products /> */}
        {/* <Navbar /> */}
        <MyProfile />
        {/* <Supplier/> */}
      </header>
    </div>
  );
}

export default App;
