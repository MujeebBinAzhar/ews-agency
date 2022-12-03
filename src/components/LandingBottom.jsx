import React from 'react'
import Categories from './Categories'
import Backend from './Backend'
import Fullstack from './Fullstack'
import Frontend from './Frontend'
const LandingBottom = () => {
  return (
    
    <div className=" container-fluid p-lg-0">
    <div className="row">

      
      <div className="col-lg-2 col-md-4  order-2 order-md-first ">
        <div className="tech-bar">
          <h4 className="teach-heading">Front-End Technologies</h4>

          <Frontend />

          <h4 className="teach-heading mt-5">Back-End Technologies</h4>

          <Backend />

          <h4 className="teach-heading mt-5">Full-Stack Technologies</h4>

          <Fullstack />
        </div>
      </div>

      <div className="col-lg-10 col-md-8 d-flex px-4 px-md-5 my-5 my-lg-auto align-items-center order-1   ">

        <div className="about-section">
        <h5 className="heading-one text-lg-center mt-4">
          Welcome to <span>Elite Web Service</span>. Bring{" "}
          <span>ideas</span> to reality.
        </h5>
        <h3 className="text--lg-center  mt-3">
          Lets quickly get to the information you require.
        </h3>
        <p className=" text-lg-center banner-para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          ab quaerat eaque. Possimus commodi quos mollitia laudantium
          aperiam? Debitis aliquam seq orem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          ab quaerat eaque. Possimus commodi quos mollitia laudantium
          aperiam? Debitis aliquam sequi vel, neque molestias error
          consectetur dolor corrupti ui vel, neque molestias error
          consectetur dolor corrupti
        </p>
      
        </div>
        
      </div>

      {/* <div className="col-lg-2 col-md-3 order-3 order-md-last d-none d-lg-block ">
        <Categories />
      </div> */}


    </div>
  </div>

  )
}

export default LandingBottom