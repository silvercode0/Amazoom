
// import Home from "./Home"

import { NavLink } from "react-router-dom";
import React from "react";

// import { LoggedIn, Logout } from "./Login";
import "./Navbar.css";
function Navbar({ setLoggedIn, loggedIn }) {
  const user = localStorage.getItem("user");
  return  (
    <div className="styleNavbar">
      <nav className="nav">
        <div id="navs1">
        <ul>
          <a href="/Home" className="styleLink"
            style={{ textDecoration: "none" }}
          >
            Home
          </a>
        </ul>
        </div>
        <div id="navs1">
        <ul>
          <a href="/MyProfile" className="styleLink"
            style={{ textDecoration: "none" }}
           
          >
            Profile
          </a>
        </ul>
        </div>
        <div id="navs1">
        <a href="/Review" className="Review"
          style={{ textDecoration: "none" }}
          
        >
          My Reviews
        </a>
        </div>
        <div id="navs1">
        <ul>
        <a to="/Products" className="styleLink"
          style={{ textDecoration: "none" }}
          
        >
          Products
        </a>
        </ul>
        </div>
        <span className="styleUser">User:{user}</span>{" "}
        <ul>
        <a href="/" className="styleLink"
          style={{ textDecoration: "none" }}
          onClick={() => {
          setLoggedIn(false);
          localStorage.clear();
          }}
        >
          Logout
        </a>
      </ul>
    </nav>
  </div>
  
)}

export default Navbar;

// import React from "react";
// import {  NavLink } from "react-router-dom";
// // import { LoggedIn, Logout } from "./";
// import "./Navbar.css";

// const Navbar = (props) => {
//   const user = props.user;
//   const setUser = props.setUser;
//   const handleLogout = props.handleLogout;
//   const isLoggedIn = props.isLoggedIn;
//   const setIsLoggedIn = props.setIsLoggedIn;

//   return (
//     <div>
//       <div id="navbar">
//         <NavLink to="/" id="logo">
//           DimTECH
//         </NavLink>
//         <NavLink className="productsNav" to="/Products">
//           Products
//         </NavLink>
//         {/* </div> */}

//         {/* <div className="mainNav"> */}

//         <div className="rightNav">
//           <NavLink user={user} className="loggedin" />
//           <div className="navbuttons">
//             <NavLink to="/Login">
//               <i className="fa-solid fa-user loginIcon"></i>
//             </NavLink>
//             <NavLink to="/mycart/cart_items"></NavLink>

//             {user ? (
//               <NavLink to="/mycart/cart_items">
//                 <i className="fa-solid fa-cart-shopping shoppingIcon"></i>
//               </NavLink>
//             ) : (
//               <NavLink to="/guestcart">
//                 <i
//                   id="cartIcon"
//                   className="fa-solid fa-cart-shopping shoppingIcon"
//                 ></i>
//               </NavLink>
//             )}

//             {user && user.username ? (
//               <NavLink to="/MyProfile">
//                 <i className="fa-solid fa-address-card profileIcon"></i>
//               </NavLink>
//             ) : null}

//             {user && user.is_admin === true ? (
//               <NavLink to="/Admin" className="adminBtn">
//                 Admin
//               </NavLink>
//             ) : null}
//             {/* <div className="rightNav"> */}

//             {isLoggedIn ? (
//               <NavLink
//                 handleLogout={handleLogout}
//                 setUser={setUser}
//                 setIsLoggedIn={setIsLoggedIn}
//                 className="logoutBtn"
//               />
//             ) : null}
//             {/* </div>  */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
