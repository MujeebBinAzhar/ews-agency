import React, { useState, useEffect } from "react";
import { GoThreeBars } from "react-icons/go";
import { AiOutlineArrowLeft } from "react-icons/ai";
import logo from "../assets/img/logo.png"
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [show, setShow] = useState(false);

  const closeNav=()=>{
    setShow(false)
  }
  return (
    <>
      <div
        className="container-fluid fixed-top   pt-2 ps-md-5 position-relative d-flex justify-content-between align-items-center"
        style={{ backgroundColor: `${props.background}` }}
      >
        <GoThreeBars
          color="#FFB856"
          className="bars"
          onClick={() => {
            setShow(true);
          }}
        />

        <div className={`sidebar  ${show && "sidebar-active"} `}>
          <div className="position-relative">
            <AiOutlineArrowLeft
              className="cross"
              onClick={() => {
                setShow(false);
              }}
            />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <Link to="/" onClick={closeNav}>
                  Home <span>( ).</span>{" "}
                </Link>
              </li>
              <li>
                <a href="#"  onClick={closeNav}>
                  About-Us <span>( ).</span>
                </a>
              </li>
              <li>
                <a href="#"  onClick={closeNav}>
                  Technologies <span>( ).</span>
                </a>
              </li>
              <li>
                <Link to="services "  onClick={closeNav}>
                  Services <span>( ).</span>
                </Link>
              </li>
              <li>
                <Link to="contact-us"  onClick={closeNav}>
                  Contact-Us <span>( ).</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="muj-logo me-3 me-md-5">
          {/* <h1 className="logo-heading">EWS</h1> */}
          <img src={logo} alt="elite-web-services" className="logo" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
