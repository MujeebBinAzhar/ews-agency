import React from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Business Websites",
      desc: " Whether you’re creating a consulting website, corporate website, or a startup website, a business website establishes your brand’s online presence. ",
      link: "/contact-us",
    },
    {
      name: "Ecommerce Websites",
      desc: " An eCommerce website allows you to sell products from your online store. You can even incorporate a dropshipping model into your online business to sell products from a third-party distributor.",
      link: "/contact-us",
    },
    {
      name: "Blog websites",
      desc: "Blogs are a space for people to share written and visual content about whatever they desire. You can even make money blogging by using affiliate links or working with advertisers.",
      link: "/contact-us",
    },
    {
      name: "Portfolio websites",
      desc: "Creative professionals, such as graphic designers, artists and writers, use portfolio websites to consolidate and display examples of their work.",
      link: "/contact-us",
    },
    {
      name: "Event websites",
      desc: "An event website allows for streamlined event management, from invites to marketing, and even through follow-up. ",
      link: "/contact-us",
    },
    {
      name: "Personal websites",
      desc: "A personal website is a great way to give your online presence a boost. You can create a personal website to promote your individuality and interests.",
      link: "/contact-us",
    },
    {
      name: "Membership websites",
      desc: "A membership website ensures exclusivity by requiring visitors to sign up or pay a fee to receive full access to its services, tools or resources.",
      link: "/contact-us",
    },
    {
      name: "Nonprofit websites",
      desc: " With a nonprofit website template, you can create a website that informs visitors of your organization’s mission, goals and core values.",
      link: "/contact-us",
    },

    {
      name: "Informational websites",
      desc: "Informational websites act as a resource to convey information. Examples include encyclopedias and news outlet websites.",
      link: "/contact-us",
    },
    {
      name: "Online forums",
      desc: "An online forum allows you to build community around a shared interest, and even allow site owners or businesses to earn profit by restricting access to members only.",
      link: "/contact-us",
    },
  ];

  return (
    <div className="card-section me-md-2  ">
      {categories.map((category, index) => {
        return (
          <div key={index} className="custom-card pb-2 mt-3">
            <div className="card-header business">
              <h5 className="text-white">{category.name}</h5>
            </div>

            <div className="card-body p-2">
              <p className="pb-2">{category.desc}</p>

              <NavLink to={category.link} className="contact-link">Contact Us</NavLink>
             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
