import React from "react";

const FrontendTech = () => {
  return (
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
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h1 className="tech-heading">Elite Web Services Provide</h1>
                  <p className="tech-para">
                  A lot of frontend website technologies related services with perfection. <br /> We provide the best services in the market.
                  </p>

                  <div className="mt-5">
                    <a href="#" className="tech-btn">
                      Get A Qoute
                    </a>
                  </div>
                </div>

                <div className="col-md-6">
                  <img
                    src={require("../../assets/img/slide-one.png")}
                    alt="frontend-development"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h1 className="tech-heading">Digital Marketting</h1>
                  <p className="tech-para">
                    Marketting is the most important part of any business. We provide the best digital marketting services in the market.
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
                <div className="col-md-6 d-flex flex-column justify-content-center">
                  <h1 className="tech-heading">Html, CSS, JavaScript</h1>
                  <p className="tech-para">
                    Most famous frontend development technology used by almost
                    every type of website. 
                  </p>

                  <div className="mt-auto">
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
  );
};

export default FrontendTech;
