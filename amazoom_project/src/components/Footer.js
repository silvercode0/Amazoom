import React from "react";
import Supplier from "./Supplier";
// import BuyOptions from "./BuyOptions";
// import { Outlet, Link } from "react-router-dom";
import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="footer-container">
//       <footer className="footer">
//         <BuyOptions></BuyOptions>
//         <Supplier></Supplier>
//         <h1> Finance </h1>
//         <Link id="Finance" to="/BuyOptions">
//            Learn More
//         </Link>
//         <h1> Sell/Trade </h1>
//         <Link id="SellTrade" to="/BuyOptions">
//            Learn More
//         </Link>
//         <h1> How It Works </h1>
//         <Link id="HowItWorks" to="/BuyOptions">
//            Learn More
//         </Link>
//        <h1> Supplier </h1>
//         <Link id="Supplier" to="/Supplier">
//          About Us
//        </Link>
//        <Outlet></Outlet>
//       </footer>
//    </div>
//  );
// };

// export default Footer;

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
       <div className="row">
         {/* Column1 */}
         <div className="col">
           <h4>Finance</h4>
            <h4 className="list-unstyled">
             <li>555-5555-5555</li>
              <li>California</li>
              <li>123 Street</li>
            </h4>
          </div>
         {/* Column2 */}
          <div className="col">
           <h4>Sell/Trade</h4>
           <h4 className="list-unstyled">
             <li>Learn More</li>
             
           </h4>
         </div>
         {/* Column3 */}
          <div className="col">
           <h4>How it works</h4>
           <h4 className="list-unstyled">
             <li>Learn More</li>
           </h4>
           <div>
            <h4>
              <Supplier/>
            </h4>
           </div>
          </div>
        </div>
        <hr />
        <div className="row">
         <p className="col-sm">
           &copy;{new Date().getFullYear()} Amazoom, All rights reserved. 
            
          </p>
        </div>
      </div>
    </div>
 );
}

export default Footer;