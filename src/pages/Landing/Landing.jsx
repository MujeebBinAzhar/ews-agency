import { useRef } from "react";
import MouseParticles from "react-mouse-particles";
import Background from "../../components/Background";
import Sidebar from "../../components/Sidebar";
import { AiOutlineArrowDown } from "react-icons/ai";
import Ews from "../../components/EWS";
import Technologies from "../../components/Technologies";
import Services from "../../components/Services";
import BackendTech from "../../components/BackendTech";
import About from "../../components/About";
import Fullstack from "../../components/Fullstack";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

const Landing = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
   
  return (
    <>
      <section className="snap">
        <div className="snap-inner landind-container position-relative ">
          <Sidebar background="transparent"/>
          <MouseParticles
            g={1}
            color="random"
            num="3"
            className="particles"
            cull="col,image-container"
          />
          <Background />

          <img
            src={require("../../assets/img/EWS.svg").default}
            alt="elite web services"
            className="background-img img-fluid"
          />
          <img
            src={require("../../assets/img/EWS.svg").default}
            alt="elite web services"
            className="background-img-two img-fluid"
          />

          <div className="container my-auto ">
            <div className="row">
              <div className="col-lg-7 d-flex mt-5 mt-md-auto flex-column justify-content-center ">
                <h1 className="landing-heading ">adaptive</h1>
                <h2 className="landing-heading mt-4 landing-heading-two">
                  to future business, your growth & the future
                </h2>
                <p className="color-white mt-4 landing-para">
                  Proudly serving the world's top asset finance & leasing
                  companies with smart software technology for over four
                  decades.
                </p>
              </div>

              <div className="col-lg-5 d-flex justify-content-center">
                <img
                  src={require("../../assets/img/illustration.jpg")}
                  alt="poly"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="d-none d-lg-flex justify-content-center mb-5">
            <div className="circular-btn" onClick={handleClick}>
              <AiOutlineArrowDown className="arrow-down" />
            </div>
          </div>
        </div>

        <div ref={ref} className="snap-inner about position-relative">
          <img
            src={require("../../assets/img/layer.png")}
            alt="layer"
            className="layer"
          />
          <Services />
        </div>

        <div  className="snap-inner  about   position-relative ">
          <About />
        </div>

        <div   className="snap-inner about position-relative ">
          <Ews />
        </div>

        <div id="frontend" className="snap-inner about position-relative ">
          <img
            src={require("../../assets/img/layer3.png")}
            alt="tech-layer"
            className="layer2"
          />
          <img
            src={require("../../assets/img/group.png")}
            alt="technologies"
            className="side-img-two"
          />

          <Technologies />
        </div>

        <div
          id="backend" 
          className="snap-inner full-stack about position-relative "
        >
          <BackendTech />
        </div>

        <div  id="fullstack" className="snap-inner about position-relative ">
          <img
            src={require("../../assets/img/bottom-layer.jpg")}
            alt="tech-layer-one"
            className="bottom-layer"
          />

          <Fullstack />
        </div>

        <div
        
          className="snap-inner about footer-section position-relative d-flex flex-column"
        >

          

          <div className="container my-auto">
            <div className="row">
              <div className="col-md-8">
                <div className="contact-section ">
                  <h1>Join Us</h1>
                  <p><b>Challenge your limits.</b></p>
                  <p className="mb-5 w-100 w-md-50">Elite Web Services is one of the most sought-after employers in the industry. Apply now and become a part of the EWS family.</p>
                  <Link to="contact-us" className="contact-btn">Contact Us</Link>
                </div>
              </div>
              <div className="col-md-4">
              <img src={require("../../assets/img/contact.webp")} alt="ews-contact" className="img-fluid contact-img" />
              </div>
            </div>
          </div>

          <div className="mt-auto">
          <Footer />
          </div>
          
        </div>      
        
        </section>
    </>
  );
};

export default Landing;
