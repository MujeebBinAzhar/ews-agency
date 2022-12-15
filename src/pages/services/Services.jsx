import React from "react";
import {BsWhatsapp,BsInstagram,BsTwitter} from "react-icons/bs";
import {FaFacebookF,FaTelegramPlane} from "react-icons/fa";

const Services = () => {
  return (
    <>
      <div className="frontendTech">
        <div className="container">
          <div id="techCarousel" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#techCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#techCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#techCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column ">
                    <h1 className="tech-heading">Custom Website Development</h1>
                    <p className="tech-para">
                      Custom Websites inlcude custom coding for development.
                      Custom websites are long lasting, reliable and easy to
                      modify. <br /> We provide the best services in the market.
                    </p>

                    <div className="mt-5">
                      <a href="#" className="tech-btn">
                        Get A Qoute
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <img
                      src={require("../../assets/img/slide-two.png")}
                      alt="frontend-development"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column ">
                    <h1 className="tech-heading">Digital Marketting</h1>
                    <p className="tech-para">
                      Marketting is the most important part of any business. We
                      provide the best digital marketting services in the
                      market.
                    </p>

                    <div className="mt-5">
                      <a href="#" className="tech-btn">
                        Get A Qoute
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <img
                      src={require("../../assets/img/marketting.png")}
                      alt="frontend-development"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column ">
                    <h1 className="tech-heading">Wordpress, Wix, Shopify</h1>
                    <p className="tech-para">
                      Most famous Content Managment System (CMS) are Wordpress,
                      Wix and Shopify. We provide the best services in the
                      market.
                    </p>

                    <div className="mt-5">
                      <a href="#" className="tech-btn">
                        Get A Qoute
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <img
                      src={require("../../assets/img/sectionImg.jpg")}
                      alt="frontend-development"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="container">
          <div className="service-card">
            <div className="row">
              <div className="col-md-8 ">
                <img
                  src={require("../../assets/img/custom-web.jpg")}
                  alt="custom website"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <h4 className="card-heading">Custom Website Development</h4>
                <p className="">
                  Custom Websites inlcude custom coding for development. Custom
                  websites are long lasting, reliable and easy to modify.
                </p>

                <ul className="service-card-ul">
                  <li>MERN STACK</li>
                  <li>MEAN STACK</li>
                  <li>MEVN STACK</li>
                  <li>PERN STACK</li>
                  <li>PYTHON DJANGO</li>
                  <li>LARAVEL</li>
                  <li>PHP</li>
                  <li>ROBY ON RAILS</li>
                </ul>
                <p>Following are the core features of custom website:</p>

                <ul>
                  <li>Long Term Business</li>
                  <li>Easy to Modify</li>
                  <li>Reliable</li>
                  <li>Secure</li>
                  <li>Scalable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-layer">
        <img
          src={require("../../assets/img/svgexport-1.svg").default}
          alt="separator"
          className="separator"
        />

        <div className="separator-layer">
          <div className="container ">
            <div className="service-card ">
              <div className="row">
                <div className="col-md-4 p-4">
                  <h4 className="card-heading">
                    Content Managment System (CMS)
                  </h4>
                  <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit id voluptates magnam consequuntur odit esse
                    natus nisi tempora culpa quia aliquam illo magni, quisquam
                    commodi ipsa possimus asperiores beatae explicabo.
                  </p>

                  <ul className="service-card-ul">
                    <li>Wordpress</li>
                    <li>Wix</li>
                    <li>shopify</li>
                  </ul>
                  <p>Following are the core features of custom website:</p>

                  <ul>
                    <li>Long Term Business</li>
                    <li>Easy to Modify</li>
                    <li>Reliable</li>
                    <li>Secure</li>
                    <li>Scalable</li>
                  </ul>
                </div>

                <div className="col-md-8">
                  <img
                    src={require("../../assets/img/custom-web.jpg")}
                    alt="custom website"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={require("../../assets/img/svgexport-1.svg").default}
          alt="separator"
          className="separator-bottom"
        />
      </div>

      <div className="service-layer-two">
        {/* <img src={require("../../assets/img/laptop.png")} alt="laptop" className="laptop" /> */}

        <div className="container">

          <div className="row">
            <div className="col-md-6 mt-3">
              <h1>Website Customization</h1>
              <div className="row pt-3 pt-md-5">
                <div className="col-6 mt-3">
                  <div className="web-card">
                    <h5>Server Engine Optimization</h5>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.
                      Aperiam necessi tatibus deserunt iure, eius laudan
                    </p>
                  </div>
                </div>
                <div className="col-6 mt-3">
                  <div className="web-card">
                    <h5>Website Redesign</h5>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.
                      Aperiam necessi tatibus deserunt iure, eius laudan
                    </p>
                  </div>
                </div>

                <div className="col-6 mt-3">
                  <div className="web-card">
                    <h5>Website UI Design</h5>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.
                      Aperiam necessi tatibus deserunt iure, eius laudan
                    </p>
                  </div>
                </div>
                <div className="col-6 mt-3">
                  <div className="web-card">
                    <h5>Website Content Creation</h5>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.
                      Aperiam necessi tatibus deserunt iure, eius laudan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex justify-content-center mt-3">
              <img src={require("../../assets/img/sectionImg.jpg")} alt="website-redesign" className="img-fluid" />
            </div>
          </div>


          
          <div className="row pt-5 mt-md-5">

            <div className="col-md-6 d-flex justify-content-center order-last order-md-first mt-3">
              <img src={require("../../assets/img/market-bg.jpg")} alt="marketting" className="img-fluid" />
            </div>


            <div className="col-md-6  order-fisrt order-md-last mt-3">
              <h1>Digital Marketting</h1>
              <div className="row pt-3 pt-md-5">
                <div className="col-6 mt-3">
                  <div className="web-card">
                   <ul>
                    <li> <div className="marketing"><BsWhatsapp className="icon"/> </div> </li>
                    <li> <div className="marketing"><BsInstagram className="icon"/></div>  </li>
                    <li> <div className="marketing"><FaFacebookF className="icon"/> </div> </li>
                    <li> <div className="marketing"> <BsTwitter className="icon"/> </div></li>
                    <li> <div className="marketing"> <FaTelegramPlane className="icon"/> </div></li>
                    
                   </ul>
                  </div>
                </div>
                <div className="col-6 mt-3">
                  <div className="web-card">
                    <h5>Website Redesign</h5>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.
                      Aperiam necessi tatibus deserunt iure, eius laudan
                    </p>
                  </div>
                </div>

                <div className="col-6 mt-3">
                  <div className="web-card">
                    <h5>Website UI Design</h5>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.
                      Aperiam necessi tatibus deserunt iure, eius laudan
                    </p>
                  </div>
                </div>
                <div className="col-6 mt-3">
                  <div className="web-card">
                    <h5>Website Content Creation</h5>
                    <p>
                      Lorem ipsum dolor sit amet conse ctetur adipi sicing elit.
                      Aperiam necessi tatibus deserunt iure, eius laudan
                    </p>
                  </div>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
    </>
  );
};

export default Services;
