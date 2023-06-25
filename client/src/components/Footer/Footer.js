import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-dark text-light footer">
      <div className="text-center">
        <h6>All Right Reserved &copy; {year} IkonFlair</h6>
        <p className="text-center">
          <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/policy">Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
