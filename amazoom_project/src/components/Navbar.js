
// import Home from "./Home"

import { Link, Outlet } from "react-router-dom";
import React from "react";
import  LoggedUser  from "./LoggedUser";

import "./Navbar.css";


function Layout ( props ) {
  const user = props.user;
  const setUser = props.setUser;
  const handleLogout = props.handleLogout;
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>
      <div id="navbar">
        <Link to="/" id="logo">
          Amazoom
        </Link>
        <Link className="productsNav" to="/Products">
          Products
        </Link>

        <div className="rightNav">
          <LoggedUser user={user} className="loggedin" />
          <div className="navbuttons">
            <Link to="/Login">
              <i className="Icon1"></i>
            </Link>
            <Link to="/Shopping_Cart/cart_items"></Link>

            {user ? (
              <Link to="/Shopping_Cart/cart_items">
                <i className="Icon2"></i>
              </Link>
            ) : (
              <Link to="/guest_cart">
                <i
                  id="cartIcon"
                  className="Icon5"
                ></i>
              </Link>
            )}

            {user && user.username ? (
              <Link to="/MyProfile">
                <i className="Icon3"></i>
              </Link>
            ) : null}

            {user && user.is_admin === true ? (
              <Link to="/Admin" className="adminBtn">
                Admin
              </Link>
            ) : null}

            {isLoggedIn ? (
              <Link
                handleLogout={handleLogout}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
                className="logoutBtn"
              />
            ) : null}
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  );
};


export default Layout;