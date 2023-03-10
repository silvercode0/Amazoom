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

const Home = () => {
  return (
    <div id="home-container">
      <h1 className="header">Amazoom</h1>
      <h2 className="subheader">
        We are Cars, <u>Paradise</u>
      </h2>
    </div>
  );
};

export default Home;