import React from "react";
import Supplier from "./Supplier";
import BuyOptions from "./BuyOptions";
import { Outlet, Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        {/* <BuyOptions></BuyOptions>
        <Supplier></Supplier> */}
        <h1> Finance </h1>
        <Link id="Finance" to="/BuyOptions">
            Learn More
        </Link>
        <h1> Sell/Trade </h1>
        <Link id="SellTrade" to="/BuyOptions">
            Learn More
        </Link>
        <h1> How It Works </h1>
        <Link id="HowItWorks" to="/BuyOptions">
            Learn More
        </Link>
        <h1> Supplier </h1>
        <Link id="Supplier" to="/Supplier">
          About Us
        </Link>
        <Outlet></Outlet>
      </footer>
    </div>
  );
};

export default Footer;