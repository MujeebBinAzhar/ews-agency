import React from "react";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="logo-heading">EWS</h1>
          </div>
          <div className="col-sm-6 col-md-4">
            <p className="text-justify bold-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              aperiam nihil et esse expedita nostrum, suscipit mollitia beatae
              error repellat doloremque at. Eveniet fugiat voluptate amet
              aliquam optio ipsa quae!
            </p>
          </div>

          <div className="col-sm-6 col-md-3">
            <h4>Links</h4>
            <ul className="footer-ul">
              <li>
                <a href="#frontend">Front-End Technologies</a>
              </li>
              <li>
                <a href="#backend">Back-End Technologies</a>
              </li>
              <li>
                <a href="#fullstack">Full-stack Technologies</a>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-3">
            <h4>Links</h4>
            <ul className="footer-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="services">Services</Link>
              </li>
              <li>
                <Link to="contact-us">Contact-Us</Link>
              </li>

              <li>
                <Link to="#">About-Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-md-2">
            <h4>Reach Us</h4>
            <address>
              <p className="bold-5">
                600 Park Offices Drive, Ste 300-234, <br />
                Research Triangle Park, NC 27709
              </p>
            </address>
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
