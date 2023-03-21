import React from "react";
import "./LoggedUser.css";
import "./Navbar.css";

const LoggedUser = (props) => {
  const user = props.user;

  return (
    <div>
      <h3 id="welcomeUser">
        {" "}
        Welcome, {user && user.username ? user.username : "Guest"}{" "}
      </h3>
    </div>
  );
};

export default LoggedUser;
