import React from "react"; 
import javascript from "../assets/img/icons/javascript.svg";
import laravel from "../assets/img/icons/laravel.svg";
import codeigniter from "../assets/img/icons/codeigniter.svg";
import python from "../assets/img/icons/python.svg";
import php from "../assets/img/icons/php.svg";
import django from "../assets/img/icons/django.svg";
import flask from "../assets/img/icons/flask-svgrepo-com.svg";
import ruby from "../assets/img/icons/ruby.svg";
import node from "../assets/img/icons/node-dot-js.svg";
import express from "../assets/img/icons/express.svg";
import mongo from "../assets/img/icons/mongodb.svg";
import postgres from "../assets/img/icons/postgresql.svg";
import mysql from "../assets/img/icons/mysql.svg";
import nginx from "../assets/img/icons/nginx.svg";
import java from "../assets/img/icons/java.svg";
import microsoft from "../assets/img/icons/microsoft.svg";
import firebase from "../assets/img/icons/firebase.svg";
const Backend = () => {
  const techData = [
    {
      icon: php,
      name: "PHP",
      link: "#",
      class: "php",
    },
    {
      icon: laravel,
      name: "Laravel",
      link: "#",
      class: "laravel",
    },
    {
      icon: codeigniter,
      name: "Codeigniter",
      link: "#",
      class: "codeigniter",
    },
    {
      icon: python,
      name: "Python",
      link: "#",
      class: "python",
    },
    {
      icon: django,
      name: "Django",
      link: "#",
      class: "django",
    },
    {
      icon:  flask,
      name: "Flask",
      link: "#",
      class: "flask",
    },
    
    {
      icon: ruby,
      name: "Ruby",
      link: "#",
      class: "ruby",
    },
    {
      icon: node,
      name: "Node",
      link: "#",
      class: "node",
    },
    {
      icon: express,
      name: "Express",
      link: "#",
      class: "express",
    },
    {
      icon: mongo,
      name: "MongoDB",
      link: "#",
      class: "mongo",
    },
    {
      icon: postgres,
      name: "PostgreSQL",
      link: "#",
      class: "postgres",
    },
    {
      icon: firebase,
      name: "Firebase",
      link: "#",
      class: "firebase",
    },
    {
      icon: mysql,
      name: "MySQL",
      link: "#",
      class: "mysql",
    },
    {
      icon: nginx,
      name: "NGINX",
      link: "#",
      class: "nginx",
    },
    
    {
      icon: java,
      name: "Java",
      link: "#",
      class: "java",
    },
    {
      icon: microsoft,
      name: "Asp.net",
      link: "#",
      class: "microsoft",
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

export default Backend;
