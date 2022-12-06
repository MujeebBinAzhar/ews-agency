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


const Landing = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick1 = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="snap">
      <div className="snap-inner landind-container position-relative ">
        <Sidebar />
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
                companies with smart software technology for over four decades.
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
        <img src={require("../../assets/img/layer.png")} alt="layer" className="layer" /> 
        <Services/>
      </div>


      <div ref={ref2} className="snap-inner  about   position-relative ">
        <About />
      </div>



      <div ref={ref2} className="snap-inner about position-relative ">
        <Ews />
      </div>

      <div ref={ref3} className="snap-inner about position-relative ">
      <img src={require("../../assets/img/layer2.png")} alt="tech-layer" className="layer2" />
      <img
        src={require("../../assets/img/group.png")}
        alt="technologies"
        className="side-img-two"
      />      
      
        <Technologies />
      </div>



      <div ref={ref4} className="snap-inner about position-relative ">
      <img src={require("../../assets/img/layer2.png")} alt="tech-layer-one" className="layer1" />
      <img
        src={require("../../assets/img/group.png")}
        alt="technologies"
        className="side-img-one"
      /> 
      
        <BackendTech/>
      </div>
    </section>
  );
};

export default Landing;
