import React from "react";

const Services = () => {
  return (
    <>
      <div className="frontendTech">
        <div className="container">
          <div id="techCarousel" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#techCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#techCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#techCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>


            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column ">
                    <h1 className="tech-heading">Custom Website Development</h1>
                    <p className="tech-para">
                      Custom Websites inlcude custom coding for development.
                      Custom websites are long lasting, reliable and easy to
                      modify. <br /> We provide the best services in the market.
                    </p>

                    <div className="mt-5">
                      <a href="#" className="tech-btn">
                        Get A Qoute
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <img
                      src={require("../../assets/img/slide-two.png")}
                      alt="frontend-development"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column ">
                    <h1 className="tech-heading">Digital Marketting</h1>
                    <p className="tech-para">
                      Marketting is the most important part of any business. We
                      provide the best digital marketting services in the
                      market.
                    </p>

                    <div className="mt-5">
                      <a href="#" className="tech-btn">
                        Get A Qoute
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <img
                      src={require("../../assets/img/marketting.png")}
                      alt="frontend-development"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column ">
                    <h1 className="tech-heading">Wordpress, Wix, Shopify</h1>
                    <p className="tech-para">
                      Most famous Content Managment System (CMS) are Wordpress,
                      Wix and Shopify. We provide the best services in the
                      market.
                    </p>

                    <div className="mt-5">
                      <a href="#" className="tech-btn">
                        Get A Qoute
                      </a>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <img
                      src={require("../../assets/img/sectionImg.jpg")}
                      alt="frontend-development"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="container">

          <div className="service-card">
            <div className="row">
              <div className="col-md-8 ">
                <img
                  src={require("../../assets/img/custom-web.jpg")}
                  alt="custom website"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <h4 className="card-heading">Custom Website Development</h4>
                <p className="">
                  Custom Websites inlcude custom coding for development. Custom
                  websites are long lasting, reliable and easy to modify.
                </p>

                <ul className="service-card-ul">
                  <li>MERN STACK</li>
                  <li>MEAN STACK</li>
                  <li>MEVN STACK</li>
                  <li>PERN STACK</li>
                  <li>PYTHON DJANGO</li>
                  <li>LARAVEL</li>
                  <li>PHP</li>
                  <li>ROBY ON RAILS</li>
                </ul>
                <p>Following are the core features of custom website:</p>

                <ul>
                  <li>Long Term Business</li>
                  <li>Easy to Modify</li>
                  <li>Reliable</li>
                  <li>Secure</li>
                  <li>Scalable</li>
                </ul>
              </div>
            </div>
          </div>



          <div className="service-card">
            <div className="row">
             
              <div className="col-md-4 p-4">
                <h4 className="card-heading">Content Managment System (CMS)</h4>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id voluptates magnam consequuntur odit esse natus nisi tempora culpa quia aliquam illo magni, quisquam commodi ipsa possimus asperiores beatae explicabo.
                </p>

                <ul className="service-card-ul">
                  <li>Wordpress</li>
                  <li>Wix</li>
                  <li>shopify</li>
                  
                </ul>
                <p>Following are the core features of custom website:</p>

                <ul>
                  <li>Long Term Business</li>
                  <li>Easy to Modify</li>
                  <li>Reliable</li>
                  <li>Secure</li>
                  <li>Scalable</li>
                </ul>
              </div>


              <div className="col-md-8">
                <img
                  src={require("../../assets/img/custom-web.jpg")}
                  alt="custom website"
                  className="img-fluid"
                />
              </div>


            </div>
          </div>

        </div>
      </div>


      <div className="services-bottom">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias corporis quos fuga, quibusdam iste similique beatae? Ducimus enim, nihil reiciendis, placeat atque qui maiores dolor laboriosam vel officiis corrupti molestias.
      </div>
    </>
  );
};

export default Services;
