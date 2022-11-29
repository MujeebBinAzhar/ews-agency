import React, { useState,useEffect } from "react";
import { AiOutlineBars } from "react-icons/ai";
 import {GoThreeBars} from "react-icons/go";
import {AiOutlineArrowLeft} from "react-icons/ai";

const Sidebar = () => {
  const [show, setShow] = useState(false);
 
  return (
    <>
      <div className="container-fluid fixed-top   pt-2 ps-5 position-relative d-flex justify-content-between align-items-center">
        <GoThreeBars
          color="#fff"
          size={70}
           
          onClick={() => {
            setShow(true);
          }}
        />

        <div className={`sidebar  ${show && "sidebar-active"} `}>
          <div className="position-relative">
            <AiOutlineArrowLeft
              className="cross"
              onClick={() => {              
                setShow(false);
              }}
            />
          </div>
        </div>

        <div className="muj-logo me-3 me-md-5">
          <h1 className="logo-heading">EWS</h1>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
