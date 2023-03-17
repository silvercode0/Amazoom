import React from "react";
import { Link } from "react-router-dom";

function Logout(props) {
  const { setToken, setUsername } = props;

  function wipeData() {
    setToken("");
    localStorage.setItem("user-token", "");
    localStorage.setItem("user-username", "");
    setUsername("");
  }

  wipeData();

  return window.location.href === "/Home" ||
    window.location.href === "/Product" ||
    window.location.href === "/Shopping_Cart" ||
    window.location.href === "/Login" ? (
    <Link to={window.location.href} />
  ) : (
    <Link to={"/Home"} />
  );
}

export default Logout;
