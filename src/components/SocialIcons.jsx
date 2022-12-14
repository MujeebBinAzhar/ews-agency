import React from 'react'
import {CiLinkedin} from "react-icons/ci";
import {CiInstagram} from "react-icons/ci";
import {AiOutlineFacebook} from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";


const SocialIcons = () => {
  return (
    <div className="social-icons mt-4">
    <div className="icon-container">
      <a href="#">                       
        <CiLinkedin size={25} color="#fff" />
      </a>
    </div>

    <div className="icon-container">

      <a href="#">                       
        <CiInstagram size={25} color="#fff" />
      </a>

    </div>

    <div className="icon-container">
      <a href="#">
         
        <AiOutlineFacebook size={25} color="#fff" />
      </a>
    </div>

    <div className="icon-container">
      <a href="#">
         
        <BsWhatsapp size={25} color="#fff" />
      </a>
    </div>
     
  </div>

  )
}

export default SocialIcons