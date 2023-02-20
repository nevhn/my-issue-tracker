import React from "react";
import { DropMenuDiv, Ul, Li } from "./Dropdown.style";
import { Link } from "react-router-dom";

const handleLogout = () => {
  console.log("logged out");
  localStorage.setItem("token", null);
  window.location.replace("/");
};

export const Dropdown = ({ user, isMenuOpen, toggleMenu }) => {
  // console.log('dropdown.jsx:', isMenuOpen);
  return (
    <DropMenuDiv $isMenuOpen={isMenuOpen} onClick={toggleMenu}>
      <Link to="/profile">PROFILE</Link>
      <Link to="/login">LOGIN</Link>
      {!user ? <Link to="/register">REGISTER</Link> : null}
      <Link to="/add">ADD ISSUE</Link>
      <Link to="/">CURRENT ISSUES</Link>
      <div>{user ? <a onClick={() => handleLogout()}>LOGOUT</a> : null}</div>
    </DropMenuDiv>
  );
};
