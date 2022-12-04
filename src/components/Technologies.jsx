import React from "react";
import Frontend from "./Frontend";
import sectionImg from "../assets/img/sectionImg.jpg";
import Categories from "./Categories";

const Technologies = () => {
  return (
    <div className="technologies ">
      <div className="container">
        <div className="row">
          <div className="col-md-12  z-1  mb-5 ">
            <h1 className="text-center service-heading">
              Front-End <span>Technologies</span>
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo,
              quod temporibus quia fuga est? Maiores dolorem, doloremque quidem
              distinctio natus fugit at. Soluta corporis tempore saepe aliquam
              sed incidunt?
            </p>
          </div>

          <div className="col-lg-6 z-1">
            <Frontend />
          </div>
          <div className="col-lg-6 z-1">
            <img src={sectionImg} alt="technology" className="img-fluid" />
          </div>
        </div>

        <div className="row pt-5 ">
          <div className="col-xxl-3 col-md-6   z-1">
            <div className="cat-card">
              <div className="cat-icon">
                <img
                  src={
                    require("../assets/img/icons/responsiveness.svg").default
                  }
                  alt="responsive website"
                  className="img-fluid"
                />
              </div>
              <h5 className="cat-heading">Mobile Responsiveness</h5>
            </div>
          </div>
          <div className="col-xxl-3 col-md-6   z-1">
          <div className="cat-card">
              <div className="cat-icon">
                <img
                  src={
                    require("../assets/img/icons/seo.svg").default
                  }
                  alt="responsive website"
                  className="img-fluid"
                />
              </div>
              <h5 className="cat-heading">SEO friendly website</h5>
            </div>
            
          </div>
          <div className="col-xxl-3 col-md-6   z-1">
          <div className="cat-card">
              <div className="cat-icon">
                <img
                  src={
                    require("../assets/img/icons/time.svg").default
                  }
                  alt="responsive website"
                  className="img-fluid"
                />
              </div>
              <h5 className="cat-heading">Quick Response time</h5>
            </div>

             
          </div>
          <div className="col-xxl-3 col-md-6   z-1">
          <div className="cat-card">
              <div className="cat-icon">
                <img
                  src={
                    require("../assets/img/icons/browser.svg").default
                  }
                  alt="responsive website"
                  className="img-fluid"
                />
              </div>
              <h5 className="cat-heading">Browser Competibility</h5>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
