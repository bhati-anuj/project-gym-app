import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import logo1 from "../../Image/logo.png";

export default function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div className="gym-logo">
          <Link to={"Home"}>
            <img src={logo1} alt="logo" />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <Link to={"/Home"} className="link-tag">
              Home
            </Link>
            <Link to={"/AboutUs"} className="link-tag">
              About
            </Link>
            <Link to={"/Classes"} className="link-tag">
              Classes
            </Link>
            <Link to={"/Blogs"} className="link-tag">
              Blogs
            </Link>
          </ul>
        </div>
        <div className="nav-join">
          <Link to={"/Registration"} className="link-join">
            Join Us
          </Link>
        </div>
      </div>
    </>
  );
}
