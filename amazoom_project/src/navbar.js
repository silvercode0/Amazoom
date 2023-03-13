import React from "react";
import { Outlet, Link } from "react-router-dom";
import { LoggedIn, Logout } from "./";
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
        <Link to="/" id="logo">
          Amazoom
        </Link>
        <Link className="productsNav" to="/products">
          Products
        </Link>

        <div className="rightNav">
          <LoggedIn user={user} className="loggedin" />
          <div className="navbuttons">
            <Link to="/login">
              <i className="fa-solid fa-user loginIcon"></i>
            </Link>
            <Link to="/shopping_cart/cart_items"></Link>

            {user ? (
              <Link to="/shopping_cart/cart_items">
                <i className="fa-solid fa-cart-shopping shoppingIcon"></i>
              </Link>
            ) : (
              <Link to="/guest_cart">
                <i
                  id="cartIcon"
                  className="fa-solid fa-cart-shopping shoppingIcon"
                ></i>
              </Link>
            )}

            {user && user.username ? (
              <Link to="/myProfile">
                <i className="fa-solid fa-address-card profileIcon"></i>
              </Link>
            ) : null}

            {user && user.is_admin === true ? (
              <Link to="/admin" className="adminBtn">
                Admin
              </Link>
            ) : null}

            {isLoggedIn ? (
              <Logout
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

export default Navbar;