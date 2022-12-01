import { useRef } from "react";
import MouseParticles from "react-mouse-particles";
import Background from "../../components/Background";
import Sidebar from "../../components/Sidebar";
import { AiOutlineArrowDown } from "react-icons/ai";
import Frontend from "../../components/Frontend";
import Backend from "../../components/Backend";
import Fullstack from "../../components/Fullstack";
import Categories from "../../components/Categories";
import About from "../../components/About";
import Technologies from "../../components/Technologies";
const Landing = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

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
          cull="col,image-container"
        />
        <Background />

        <img
          src={require("../../assets/img/EWS.svg").default}
          alt="elite web services"
          className="background-img"
        />
        <img
          src={require("../../assets/img/EWS.svg").default}
          alt="elite web services"
          className="background-img-two"
        />

        <div className="container my-auto ">
          <div className="row">
            <div className="col-lg-7 d-flex flex-column justify-content-center ">
              <h1 className="landing-heading ">adaptive</h1>
              <h2 className="landing-heading mt-4 landing-heading-two">
                to future business, your growth & the future
              </h2>
              <p className="color-white mt-4 landing-para">
                Proudly serving the world's top asset finance & leasing
                companies with smart software technology for over four decades.
              </p>
            </div>

            <div className="col-lg-5">
              <img
                src={require("../../assets/img/poly.png")}
                alt="poly"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <div className="circular-btn" onClick={handleClick}>
            <AiOutlineArrowDown className="arrow-down" />
          </div>
        </div>
      </div>

      <div ref={ref} className="snap-inner landing-bottom">

        <div className="container-fluid padding-0">
          <div className="row">
            <div className="col-lg-2 col-md-3">
              <div className="tech-bar">
                <h4 className="teach-heading">Front-End Technologies</h4>

                <Frontend />

                <h4 className="teach-heading mt-5">Back-End Technologies</h4>

                <Backend />

                <h4 className="teach-heading mt-5">Full-Stack Technologies</h4>

                <Fullstack />
              </div>
            </div>
            <div className="col-lg-8 col-md-6 d-flex flex-column my-auto align-items-center ">
              <h5 className="heading-one text-center mt-4">
                Welcome to <span>Elite Web Service</span>. Bring{" "}
                <span>ideas</span> to reality.
              </h5>
              <h3 className="text-center  mt-3">
                Lets quickly get to the information you require.
              </h3>
              <p className=" text-center banner-para">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                ab quaerat eaque. Possimus commodi quos mollitia laudantium
                aperiam? Debitis aliquam seq orem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                ab quaerat eaque. Possimus commodi quos mollitia laudantium
                aperiam? Debitis aliquam sequi vel, neque molestias error
                consectetur dolor corrupti ui vel, neque molestias error
                consectetur dolor corrupti
              </p>
            
              {/* <div
                className="circular-btn circular-btn1 mt-3"
                onClick={handleClick1}
              >
                <AiOutlineArrowDown className="arrow-down" />
              </div> */}
            </div>

            <div className="col-lg-2 col-md-3">
              <Categories />
            </div>
          </div>
        </div>


      </div>

      <div ref={ref2} className="snap-inner about position-relative ">
        <About />
      </div>

      <div ref={ref3} className="snap-inner about position-relative ">
      <img
        src={require("../../assets/img/group.png")}
        alt="technologies"
        className="side-img-two"
      />

      {/* <img
        src={require("../../assets/img/group.png")}
        alt="technologies"
        className="side-img"
      /> */}
        <Technologies />
      </div>
    </section>
  );
};

export default Landing;
