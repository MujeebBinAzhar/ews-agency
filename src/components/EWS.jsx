import React from "react";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import SocialIcons from "./SocialIcons";

const Ews = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6  d-flex justify-content-center flex-column  ">
          <div className="about-content mt-3 text-center text-md-start ">
            <h4>What is EWS</h4>
            <p>
              Lorem ipsum dolor sit amet cons ectetur adip isicing elit. Est
              consec tetur vitae maxime! Ven iam, voluptas reiciendis perspiciatis
              necess itatibus ex sapi ente ipsum cupi ditate, repellat sint
              asper iores rerum quod natus nostrum volu pta tib us culpa? Lorem
              ipsum dolor, sit amet conse ctetur adipisicing elit. Illum
              volup tate exe rcita tionem eum sim ilique
            </p>
           
          </div>
          <div className="row ">
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
          </div>

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

                <section className="mb-2">
                  <a href="#" className="about-link">
                    <div className="icon-container">
                      <BiMessageAltDetail size={20} className="email-icon" />
                    </div>
                    info@gmail.com
                  </a>
                </section>

                <section className="mb-2">
                  <a href="#" className="about-link">
                    <div className="icon-container">
                      <BsWhatsapp size={18} className="email-icon" />
                    </div>
                    123-456-7896
                  </a>
                </section>

  <SocialIcons/>
               

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
            className="img-fluid poster mt-4 mt-md-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Ews;
