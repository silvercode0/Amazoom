// import { Route, Routes } from 'react-router-dom';
import React from 'react';
import "./App.css"

// import './Navbar.css';
// import "./Supplier.css";
// import "./Home.css";
import Home from './Home';
import Footer from './Footer';
// import Guest_Cart from './Guest_Cart'
// import MyProfile from './MyProfile';
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
        <div><Home/></div>
        <br/>
       
       
        {/* <Supplier/> */}
      </header>
      {/* <Guest_Cart /> */}
       {/* <Navbar/> */}
       <footer>
        <Footer />
       </footer>
    </div>
  );
}

export default App;
