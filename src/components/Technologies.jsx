import React from "react";
import Frontend from "./Frontend";
import sectionImg from "../assets/img/sectionImg.jpg";

const Technologies = () => {
  return (
    <div className="technologies ">
      <div className="container">
        <div className="row">
          <div className="col-md-12  mb-5 ">
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

          <div className="col-12 z-1">
          <div className="all-services-cont">
              <a href="#" className="all-services-btn">
                All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
