// import { Link } from "react-router-dom";
// import Home from "./Home"


import React from "react";
import { Outlet, Link } from "react-router-dom";
import { LoggedIn, Logout } from "./Login";
import "./Navbar.css";
function Navbar({ setLoggedIn, loggedIn }) {
  const user = localStorage.getItem("user");
  return  (
    <div className="styleNavbar">
      <nav className="nav">
        <ul>
          <Link
            className="styleLink"
            style={{ textDecoration: "none" }}
            to="/Home"
          >
            Home
          </Link>
        </ul>
        <ul>
          <Link
            className="styleLink"
            style={{ textDecoration: "none" }}
            to="/MyProfile"
          >
            Profile
          </Link>
        </ul> 
        <Link
          className="Review"
          style={{ textDecoration: "none" }}
          to="/Review"
        >
          My Reviews
        </Link>
        <ul>
        <Link
          className="styleLink"
          style={{ textDecoration: "none" }}
          to="/Products"
        >
          Products
        </Link>
        </ul>
        <span className="styleUser">User:{user}</span>{" "}
        <ul>
        <Link
          className="styleLink"
          style={{ textDecoration: "none" }}
          to="/"
          onClick={() => {
          setLoggedIn(false);
          localStorage.clear();
          }}
        >
          Logout
        </Link>
      </ul>
  
    </nav>
  </div>
  
)}

export default Navbar;