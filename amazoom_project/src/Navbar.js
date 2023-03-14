import { Link } from "react-router-dom";
import Home from "./Home"

function Navbar({ setLoggedIn, loggedIn }) {
  const user = localStorage.getItem("user");
  return  (
    <div class="styleNavbar">
      <nav class="nav">
        <ul>
          <Link
            class="styleLink"
            style={{ textDecoration: "none" }}
            to="/Home"
          >
            Home
          </Link>
        </ul>
        <ul>
          <Link
            class="styleLink"
            style={{ textDecoration: "none" }}
            to="/MyProfile"
          >
            Profile
          </Link>
        </ul> 
        <Link
          class="Review"
          style={{ textDecoration: "none" }}
          to="/Review"
        >
          My Reviews
        </Link>
        <ul>
        <Link
          class="styleLink"
          style={{ textDecoration: "none" }}
          to="/Products"
        >
          Products
        </Link>
        </ul>
        <span class="styleUser">User:{user}</span>{" "}
        <ul>
        <Link
          class="styleLink"
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