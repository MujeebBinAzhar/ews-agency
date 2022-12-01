import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import {CiLinkedin} from "react-icons/ci";
import {CiInstagram} from "react-icons/ci";
import {AiOutlineFacebook} from "react-icons/ai";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6  d-flex justify-content-center flex-column  ">
          <div className="about-content mt-3 ">
            <h4>Who We Are</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              consectetur vitae maxime! Veniam, voluptas reiciendis perspiciatis
              necessitatibus ex sapi ente ipsum cupiditate, repellat sint
              asperiores rerum quod natus nostrum voluptatibus culpa? Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Illum
              voluptate exercitationem eum similique
            </p>
           
          </div>
          <diw className="row ">
            <div className="col-lg-6">
              <div className="skill about-content">
                <h6>Repeat Business &nbsp; — &nbsp; 90%</h6>
                <div className="progress">
                  <span> </span>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill about-content">
                <h6>Customer given 5 star rating &nbsp; — &nbsp; 100%</h6>
                <div className="progress progress-full"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill about-content">
                <h6>Completion of projects on time &nbsp; — &nbsp; 100%</h6>
                <div className="progress progress-full"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill about-content">
                <h6>Perfect Solutions &nbsp; — &nbsp; 100%</h6>
                <div className="progress progress-full"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill about-content">
                <h6>Team Experties & Collaboration &nbsp; — &nbsp; 100%</h6>
                <div className="progress progress-full"></div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="skill about-content">
                <h6>Interataction with Client &nbsp; — &nbsp; 100%</h6>
                <div className="progress progress-full"></div>
              </div>
            </div>
          </diw>

          <div className="row mt-md-2">
            <div className="col-lg-6 px-md-4 ">
              <div className="about-content p-3 min-height  bg-white mt-3 tech-card">
                <h6>Head Office</h6>
                <address>
                  <p>
                    600 Park Offices Drive, Ste 300-234, <br />
                    Research Triangle Park, NC 27709
                  </p>
                </address>
                <p>Contact us for free consultation</p>

                <p className="mb-2">
                  <a href="#" className="about-link">
                    <div className="icon-container">
                      <BiMessageAltDetail size={20} className="email-icon" />
                    </div>
                    info@gmail.com
                  </a>
                </p>

                <p>
                  <a href="#" className="about-link">
                    <div className="icon-container">
                      <BsWhatsapp size={18} className="email-icon" />
                    </div>
                    123-456-7896
                  </a>
                </p>

                <div className="social-icons mt-4">
                  <div className="icon-container">
                    <a href="#">                       
                      <CiLinkedin size={25} color="#fff" />
                    </a>
                  </div>

                  <div className="icon-container">

                    <a href="#">                       
                      <CiInstagram size={25} color="#fff" />
                    </a>

                  </div>

                  <div className="icon-container">
                    <a href="#">
                       
                      <AiOutlineFacebook size={25} color="#fff" />
                    </a>
                  </div>

                   
                </div>
              </div>
            </div>

            <div className="col-lg-6  px-md-4 ">
              <div className="row">
                <div className="col-6   mt-3 ">
                  <div className="bg-white  d-flex justify-content-center align-items-center tech-card ">
                    <img
                      src={require("../assets/img/idea.jpg")}
                      className="img-fluid"
                      alt="demo"
                    />
                  </div>
                </div>
                <div className="col-6  mt-3 ">
                  <div className="bg-white  d-flex justify-content-center align-items-center tech-card ">
                    <img
                      src={require("../assets/img/wireframe.jpg")}
                      className="img-fluid"
                      alt="demo"
                    />
                  </div>
                </div>
                <div className="col-6   mt-3 ">
                  <div className="bg-white  d-flex justify-content-center align-items-center tech-card  ">
                    <img
                      src={require("../assets/img/tech.jpg")}
                      className="img-fluid"
                      alt="demo"
                    />
                  </div>
                </div>
                <div className="col-6  mt-3 ">
                  <div className="bg-white  d-flex justify-content-center align-items-center tech-card ">
                    <img
                      src={require("../assets/img/app.jpg")}
                      className="img-fluid"
                      alt="demo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src={require("../assets/img/about.jpg")}
            alt="about_ews"
            className="img-fluid poster"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
