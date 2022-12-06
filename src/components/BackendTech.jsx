import React from "react";
import Frontend from "./Frontend";
import sectionImg from "../assets/img/sectionImg.jpg";
import Backend from "./Backend";
 

const BackendTech = () => {
  return (
    <div className="technologies ">
      <div className="container">
        <div className="row">
          <div className="col-md-12  z-1  mb-2 mb-md-5 ">
            <h1 className="text-center service-heading">
              Back-End <span>Technologies</span>
            </h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo,
              quod temporibus quia fuga est? Maiores dolorem, doloremque quidem
              distinctio natus fugit at. Soluta corporis tempore saepe aliquam
              sed incidunt?
            </p>
          </div>


          <div className="col-lg-6 mt-3 mt-md-0  z-1">
            <img src={sectionImg} alt="technology" className="img-fluid" />
          </div>
          <div className="col-lg-6 z-1">
            <Backend/>
          </div>
          
        </div>

        <div className="row pt-5 ">
          <div className="col-xxl-3 col-md-6   z-1">
            <div className="cat-card">
              <div className="cat-icon">
                <img
                  src={
                    require("../assets/img/icons/process.svg").default
                  }
                  alt="responsive website"
                  className="img-fluid"
                />
              </div>
              <h5 className="cat-heading">Fast Processing Speeds</h5>
            </div>
          </div>
          <div className="col-xxl-3 col-md-6   z-1">
          <div className="cat-card">
              <div className="cat-icon">
                <img
                  src={
                    require("../assets/img/icons/architecture.svg").default
                  }
                  alt="responsive website"
                  className="img-fluid"
                />
              </div>
              <h5 className="cat-heading">defined Architecture</h5>
            </div>
            
          </div>
          <div className="col-xxl-3 col-md-6   z-1">
          <div className="cat-card">
              <div className="cat-icon">
                <img
                  src={
                    require("../assets/img/icons/databse.svg").default
                  }
                  alt="responsive website"
                  className="img-fluid"
                />
              </div>
              <h5 className="cat-heading">Database structure</h5>
            </div>

             
          </div>
          <div className="col-xxl-3 col-md-6   z-1">
          <div className="cat-card">
              <div className="cat-icon">
                <img
                  src={
                    require("../assets/img/icons/technology.svg").default
                  }
                  alt="responsive website"
                  className="img-fluid"
                />
              </div>
              <h5 className="cat-heading">Reliable Technology</h5>
            </div>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackendTech;
