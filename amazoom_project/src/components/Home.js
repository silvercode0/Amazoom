// Home // -- Regular Route -- Base
// import Navbar from "./Navbar";

// export function Home({ setLoggedIn, loggedIn }) {
//   const user = localStorage.getItem("user");
//   return (
//     <>
//       <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
//       <div className={title}>
//         <h1>Amazoom {user} </h1>
//         <h3>
//           Go checkout some of our nice Cars !
//         </h3>
//       </div>
//     </>
//   );
// }
// export default Home;


import React from "react";
import "./Home.css";
import carwash from "./carwash.png"

const Home = () => {
  return (
    <div id="home-container">
      <h1 className="header">Amazoom</h1>
      <img id="car" src="carwash.png" alt="logo"></img>
      <h2 className="subheader">
        We are Cars, <u>Paradise</u>
      </h2>
      {/* <div className="btn-group">
      <button>Trucks</button>
       <button>Sedans</button>
        <button>SUVs</button>
     </div>
      <div className="btn-group">
       <button>Electric</button>
       <button>Car</button>
      <button>Car</button>
     </div> */}
       
       <div className="textbox">Affordable Cars!</div>
       
      
    

     </div>
    
    
   );
};

export default Home;