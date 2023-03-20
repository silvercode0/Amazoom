// import { Link } from "react-router-dom";
// import Home from "./Home"


// import React from "react";
// import { Outlet, Link } from "react-router-dom";
// import { LoggedIn, Logout } from "./Login";
// import "./Navbar.css";
// function Navbar({ setLoggedIn, loggedIn }) {
//   const user = localStorage.getItem("user");
//   return  (
//     <div className="styleNavbar">
//       <nav className="nav">
//         <div>
//         <ul>
//           <a href="http://localhost:3000/"
//             className="styleLink"
//             style={{ textDecoration: "none" }}
//             to="/Home"
//           >
//             Home
//           </a>
//         </ul>
//         </div>
//         <div>
//         <ul>
//           <a href="http://localhost:3000/MyProfile"
//             className="styleLink"
//             style={{ textDecoration: "none" }}
//             to="/MyProfile"
//           >
//             Profile
//           </a>
//         </ul>
//         </div>
//         <div>
//         <ul>
//         <a href="http://localhost:3000/Reviews"
//           className="Review"
//           style={{ textDecoration: "none" }}
//           to="/Reviews"
//         >
//           My Reviews
//         </a>
//         </ul> 
//         </div>
//         <div>
//         <ul>
//         <a href="http://localhost:3000/Products"
//           className="styleLink"
//           style={{ textDecoration: "none" }}
//           to="/Products"
//         >
//           Products
//         </a>
//         </ul>
//         </div>
//         <div>
//         <span className="styleUser">User:{user}</span>{" "}
//         <ul>
//         <a href="http://localhost:3000/"
//           className="styleLink"
//           style={{ textDecoration: "none" }}
//           to="/"
//           onClick={() => {
//           setLoggedIn(false);
//           localStorage.clear();
//           }}
//         >
//           Logout
//         </a>
//       </ul>
//       </div>
//     </nav>
//   </div>
  
// )}

// export default Navbar;

import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const user = props.user;
  const setUser = props.setUser;
  const handleLogout = props.handleLogout;
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>
      <div id="navbar">
        <Link to="/Home" id="logo">
          Amazoom
        </Link>
        <Link className="productsNav" to="/Products">
          Products
        </Link>
        {/* </div> */}

        {/* <div className="mainNav"> */}

        <div className="rightNav">
          <Link user={user} className="loggedin" />
          <div className="navbuttons">
            <Link to="/Login">
              <i className="fa-solid fa-user loginIcon"></i>
            </Link>
            <Link to="/Shopping_Cart/Shopping_Cart_items"></Link>

            {user ? (
              <Link to="/Shopping_Cart/Shopping_Cart_items">
                <i className="fa-solid fa-cart-shopping shoppingIcon"></i>
              </Link>
            ) : (
              <Link to="/Guest_Cart">
                <i
                  id="cartIcon"
                  className="fa-solid fa-cart-shopping shoppingIcon"
                ></i>
              </Link>
            )}

            {user && user.username ? (
              <Link to="/MyProfile">
                <i className="fa-solid fa-address-card profileIcon"></i>
              </Link>
            ) : null}

            {user && user.is_admin === true ? (
              <Link to="/Admin" className="adminBtn">
                Admin
              </Link>
            ) : null}
            {/* <div className="rightNav"> */}

            {isLoggedIn ? (
              <Link
                handleLogout={handleLogout}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
                className="logoutBtn"
              />
            ) : null}
            {/* </div>  */}
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;