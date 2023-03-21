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
          <a href="/Home" className="styleLink"
            style={{ textDecoration: "none" }}
          >
            Home
          </a>
        </ul>
        <ul>
          <a href="/MyProfile" className="styleLink"
            style={{ textDecoration: "none" }}
           
          >
            Profile
          </a>
        </ul> 
        <a href="/Review" className="Review"
          style={{ textDecoration: "none" }}
          
        >
          My Reviews
        </a>
        <ul>
        <a href="/Products" className="styleLink"
          style={{ textDecoration: "none" }}
          
        >
          Products
        </a>
        </ul>
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