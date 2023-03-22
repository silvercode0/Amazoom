import React from "react";
// import Supplier from "./Supplier";
// import BuyOptions from "./BuyOptions";
import { Outlet } from "react-router-dom";
// import{ Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="footer">
        <h1> Finance </h1>
        <a href="http://localhost:3000/BuyOptions" id="Finance" to="/BuyOptions">
           Learn More
        </a>
        <h1> Sell/Trade </h1>
        <a href="http://localhost:3000/BuyOptions" id="SellTrade" to="/BuyOptions">
           Learn More
        </a>
        <h1> How It Works </h1>
        <a href="http://localhost:3000/BuyOptions" id="HowItWorks" to="/BuyOptions">
           Learn More
        </a>
       <h1> Supplier </h1>
        <a href="http://localhost:3000/Supplier" id="Supplier" to="/Supplier">
         About Us
       </a>
       <Outlet></Outlet>
      </footer>
   </div>
 );
};

export default Footer;

// function Footer() {
//   return (
//     <div className="main-footer">
//       <div className="container">
//        <div className="row">
//          {/* Column1 */}
//          <div className="col">
//            <h4>Finance</h4>
//             <h4 className="list-unstyled">
//              <li>Learn More</li>
              
//             </h4>
//           </div>
//          {/* Column2 */}
//           <div className="col">
//            <h4>Sell/Trade</h4>
//            <ui className="list-unstyled">
//              <li>Learn More</li>
             
//            </ui>
//          </div>
//          {/* Column3 */}
//           <div className="col">
//            <h4>How it works</h4>
//            <ui className="list-unstyled">
//              <li>Learn More</li>
//            </ui>
//            <div>
//             <ui>
//               <Supplier/>
//             </ui>
//            </div>
//           </div>
//         </div>
//         <hr />
//         <div className="row">
//          <p className="col-sm">
//            &copy;{new Date().getFullYear()} Amazoom, All rights reserved. 
            
//           </p>
//         </div>
//       </div>
//     </div>
//  );
// }

// export default Footer;