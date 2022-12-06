import React from "react";
import { BsArrowRight } from "react-icons/bs";
import development from "../assets/img/icons/development.svg";
import webDesign from "../assets/img/icons/web-design.svg";
import graphic from "../assets/img/icons/graphic.png";
import app from "../assets/img/icons/app.png"
import digital from "../assets/img/icons/digital.png"
import fullstack from "../assets/img/icons/fullstack.svg"
const Services = () => {
  const servicesData = [
    {
      icon: webDesign,
      name: "Front—end—Development",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis aut esse, eos, error saepe totam cumque, distinctio maxime",
    },
    {
      icon: development,
      name: "back—end—Development",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis aut esse, eos, error saepe totam cumque, distinctio maxime",
    },
    {
      icon: digital,
      name: "Digital—Marketting",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis aut esse, eos, error saepe totam cumque, distinctio maxime",
    },
    {
      icon: app,
      name: "Mobile—App—Development",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis aut esse, eos, error saepe totam cumque, distinctio maxime",
    },
    {
      icon: fullstack,
      name: "full—stack—Development",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis aut esse, eos, error saepe totam cumque, distinctio maxime",
    },
    {
      icon: graphic,
      name: "graphic—designing",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis aut esse, eos, error saepe totam cumque, distinctio maxime",
    },
  ];
  return (
    <div className="container " >
      <div className="row py-4 ">
        <div className="col-md-12 z-1 ">
          <h1 className="text-center service-heading">our <span>services</span> </h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. At nemo, quod temporibus quia fuga est? Maiores dolorem, doloremque quidem distinctio natus fugit at. Soluta corporis tempore saepe aliquam sed incidunt?</p>
        </div>

{
  servicesData.map((item, index) => {
    return (
    
      <div key={index} className="col-md-4 mt-4 z-1 ">
      <div className="custom-service-card">
        <div className="card-icon-container container-one">
          <img
            src={item.icon}
            alt="web design"
            className=" img-fluid card-icon"
          />
        </div>
        <h5 className="card-heading">{item.name}</h5>
        <p className="card-para">
         {item.desc}
        </p>

        <div className="mt-4">
          <a href="#" className="get-quote ">
            Get A Quote
            <BsArrowRight className="arrow-right" size={25} />
          </a>
        </div>
      </div>
    </div>
    )
  })

      
}

<div className="all-services-cont">
  <a href="#" className="all-services-btn" >All Services</a>
</div>
      </div>
    </div>
  );
};

export default Services;
