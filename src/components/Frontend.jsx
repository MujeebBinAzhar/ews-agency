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
import ionic from "../assets/img/icons/ionic.svg";
import next from "../assets/img/icons/next.svg";
import typescript from "../assets/img/icons/typescript.svg";
import three from "../assets/img/icons/three.svg";
import figma from "../assets/img/icons/figma.svg";
import photoshop from "../assets/img/icons/adobe-photoshop.svg";
import { Link } from "react-router-dom";
const Frontend = () => {
  const techData = [
    {
      icon: html,
      name: "HTML",
      link: "frontend/html",
      class: "html",
    },
    {
      icon: css,
      name: "CSS",
      link: "frontend/css",
      class: "css",
    },
    {
      icon: javascript,
      name: "JavaScript",
      link: "frontend/javascript",
      class: "js",
    },
    {
      icon:  bootstrap,
      name: "Bootstrap",
      link: "frontend/bootstrap",
      class: "bootstrap",
    },
    {
      icon: react,
      name: "React",
      link: "frontend/react",
      class: "react",
    },
    {
      icon: angular,
      name: "Angular",
      link: "frontend/angular",
      class: "angular",
    },
    {
      icon: flutter,
      name: "Flutter",
      link: "frontend/flutter",
      class: "flutter",
    },
    {
      icon: npm,
      name: "NPM",
      link: "frontend/npm",
      class: "npm",
    },
    {
      icon: vue,
      name: "Vue.js",
      link: "frontend/vue",
      class: "vue",
    },
    {
      icon: tailwind,
      name: "Tailwind",
      link: "frontend/tailwind",
      class: "tailwind",
    },
    {
      icon: ionic,
      name: "Ionic",
      link: "frontend/iconic",
      class: "iconic",
    },
   
  
    {
      icon: next,
      name: "Next.js",
      link: "frontend/next",
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
              <Link to={item.link} className={item.class}>
                <img src={item.icon} alt="react" className="tech-icon" />
                {item.name}
              </Link>
            </li>
          );
        })}

 
      </ul>
    </>
  );
};

export default Frontend;
