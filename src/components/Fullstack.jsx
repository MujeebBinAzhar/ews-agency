import React from "react";
import shopify from "../assets/img/icons/shopify.png";
import wix from "../assets/img/icons/wix.png";
import node from "../assets/img/icons/mernstack.png";
import angular from "../assets/img/icons/meanstack.png";
import wordpress from "../assets/img/icons/wordpress.png";
import vue from "../assets/img/icons/mevnstack.png";
import postgres from "../assets/img/icons/pernstack.png";
const Fullstack = () => {
  const techData = [
    {
      icon: postgres,
      name: "PERN Stack",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit saepe consequatur vitae, odit animi eaque molestias pariatur laudantium .",
    },
    {
      icon: node,
      name: "MERN Stack",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit saepe consequatur vitae, odit animi eaque molestias pariatur laudantium .",
    },
    {
      icon: angular,
      name: "MEAN Stack",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit saepe consequatur vitae, odit animi eaque molestias pariatur laudantium .",
    },
    {
      icon: vue,
      name: "MEVN Stack",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit saepe consequatur vitae, odit animi eaque molestias pariatur laudantium .",
    },

    {
      icon: wordpress,
      name: "Wordpress",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit saepe consequatur vitae, odit animi eaque molestias pariatur laudantium .",
    },

    {
      icon: wix,
      name: "Wix",
      link: "#",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit saepe consequatur vitae, odit animi eaque molestias pariatur laudantium .",
    },
    // {
    //   icon: shopify,
    //   name: "Shopify",
    //   link: "#",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit saepe consequatur vitae, odit animi eaque molestias pariatur laudantium .",
    // },
  ];
  return (
    <>
      <div className="container  ">
        <div className="row  ">
          {techData.map((item, index) => {
            return (
              <div key={index} className="col-sm-6 col-md-4">
                <div className="backend-card text-center">
                  <img
                    src={item.icon}
                    alt="mean-stack"
                    className="backend-img"
                  />
                  <h5>{item.name}</h5>
                  <p>
                   {item.desc}
                  </p>

                  <a className="read-more" href="#">
                    Read More
                  </a>
                </div>
              </div>
            );
          })}


          <div className="col-12 pt-t pt-md-5 text-end z-1">
            <a href="#" className="all-services-btn all-services">All Services</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fullstack;
