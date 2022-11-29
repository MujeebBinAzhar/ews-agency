import React from "react"; 
import shopify from "../assets/img/icons/shopify.svg";
import wix from "../assets/img/icons/wix.svg";
import node from "../assets/img/icons/node-dot-js.svg"; 
import angular from "../assets/img/icons/angularjs.svg"; 
import wordpress from "../assets/img/icons/wordpress.svg";
import vue from "../assets/img/icons/vuejs.svg";
const Fullstack = () => {
  const techData = [
    {
      icon: node,
      name: "MERN Stack",
      link: "#",
      class: "php",
    },
    {
      icon: angular,
      name: "MEAN Stack",
      link: "#",
      class: "laravel",
    },
    {
      icon: vue,
      name: "MEVN Stack",
      link: "#",
      class: "vue",
    },  
     
    
  
   
  
    {
      icon: wordpress,
      name: "Wordpress",
      link: "#",
      class: "wordpress",
    },
    
    {
      icon: wix,
      name: "Wix",
      link: "#",
      class: "flask",
    },
    {
      icon: shopify,
      name: "Shopify",
      link: "#",
      class: "node",
    },
    
    
     
   

     
  ];
  return (
    <>
      <ul className="tech-ul">
        {techData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link} className={item.class}>
                <img src={item.icon} alt="react" className="tech-icon" />
                {item.name}
              </a>
            </li>
          );
        })}

 
      </ul>
    </>
  );
};

export default Fullstack;
