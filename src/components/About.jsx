import React from "react";

const About = () => {
  return (
    <div className="about-section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={require("../assets/img/custom-about.jpg")}
              alt="about elite web services"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="about-us-content text-white text-center text-md-start mt-3 mt-md-0">
              <h1>Who We Are</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit quasi nulla inventore sequi molestiae ratione
                perspiciatis. Dolore a, saepe suscipit vero amet quia, ratione
                hic commodi officia molestias, corporis aperiam?
              </p>

              <div className="mt-5">
                <a href="#" className="contact-btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
