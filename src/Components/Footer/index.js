import React from "react";
import "./Footer.css";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { BiCopyright } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="container-footer">
        <div className="footer footer-div-1">
          <h1>Apna GYM</h1>
          <p>Place to shape your Body & Soul.</p>
          <div className="icons-main">
            <ImFacebook2 className="icons" />
            <GrInstagram className="icons" />
            <ImWhatsapp className="icons" />
            <ImYoutube className="icons" />
          </div>
        </div>
        <div className="footer footer-div-2">
          <hr />
          <ul>
            <Link to="/home">Home</Link>
            <Link to="/classes">Classes</Link>
            <Link to="#">Loreum</Link>
          </ul>
          <hr />
          <ul>
            <Link to="/aboutus">AboutUs</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="#">Loreum</Link>
          </ul>
          <hr />
          <ul>
            <Link to="/training">Traning</Link>
            <Link to="team">Team</Link>
            <Link to="#">Loreum</Link>
          </ul>
        </div>
        
      </div>
      {/* <div className="icons-copy-div">
        <BiCopyright className="icons-copy" />
      </div> */}
    </>
  );
}
