import React from "react";
import react from "../assets/img/icons/react.svg";
import html from "../assets/img/icons/html5.svg";
import css from "../assets/img/icons/css3.svg";
import vue from "../assets/img/icons/vuejs.svg";
import angular from "../assets/img/icons/angularjs.svg";
import flutter from "../assets/img/icons/flutter.svg";
import javascript from "../assets/img/icons/javascript.svg";
import bootstrap from "../assets/img/icons/bootstrap.svg";
import npm from "../assets/img/icons/npm.svg";
import tailwind from "../assets/img/icons/tailwind-css.svg";
import next from "../assets/img/icons/next.svg";
import typescript from "../assets/img/icons/typescript.svg";
import three from "../assets/img/icons/three.svg";
import figma from "../assets/img/icons/figma.svg";
import photoshop from "../assets/img/icons/adobe-photoshop.svg";
const Frontend = () => {
  const techData = [
    {
      icon: html,
      name: "HTML",
      link: "#",
      class: "html",
    },
    {
      icon: css,
      name: "CSS",
      link: "#",
      class: "css",
    },
    {
      icon: javascript,
      name: "JavaScript",
      link: "#",
      class: "js",
    },
    {
      icon:  bootstrap,
      name: "Bootstrap",
      link: "#",
      class: "bootstrap",
    },
    {
      icon: react,
      name: "React",
      link: "#",
      class: "react",
    },
    {
      icon: angular,
      name: "Angular",
      link: "#",
      class: "angular",
    },
    {
      icon: flutter,
      name: "Flutter",
      link: "#",
      class: "flutter",
    },
    {
      icon: npm,
      name: "NPM",
      link: "#",
      class: "npm",
    },
    {
      icon: vue,
      name: "Vue.js",
      link: "#",
      class: "vue",
    },
    {
      icon: tailwind,
      name: "Tailwind",
      link: "#",
      class: "tailwind",
    },
    {
      icon: react,
      name: "Iconic",
      link: "#",
      class: "iconic",
    },
   
  
    {
      icon: next,
      name: "Next.js",
      link: "#",
      class: "next",
    },
    {
      icon: typescript,
      name: "Typescript",
      link: "#",
      class: "typescript",
    },
    {
      icon: three,
      name: "Three.js",
      link: "#",
      class: "js",
    },
    {
      icon: figma,
      name: "Figma-Html",
      link: "#",
      class: "figma",
    },
    {
      icon: photoshop,
      name: "PSD to Html",
      link: "#",
      class: "photoshop",
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

export default Frontend;
