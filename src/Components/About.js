import React from "react";
import home_img from '../Images/home_img.gif';
import { NavLink } from "react-router-dom";


const About = () => {
  return (
    <>
      {/* about first section starts*/}
      <div className="row about_firstsection pt-4">
        <div className="col-8 mx-auto text-center">
          <h4 className="mb-4 fw-bolder text-decoration-underline">Our Mission</h4>
          <h1 className="fw-bold ">We envision a world where anyone, anywhere has the power to transform their lives through learning.</h1>
        </div>
      </div>
      {/* about first section ends*/}


      {/* about second section starts*/}
      <div className='container about_second_section d-block d-xl-flex flex-column justify-content-center '>
        <div className="row">
          <div className="commondiv col-10 col-md-10 col-lg-10 col-xl-5 mx-auto d-flex flex-column justify-content-center mb-5 order-1 order-lg-1 order-xl-0 ">
            <h5 className='home_para pt-2 pb-3'><span className="fw-bold" style={{color:"rgb(24, 24, 166)"}}>Ahuja Enterprises </span>is flexible, affordable, job-relevant online learning to individuals and organizations worldwide. We offer a range of learning opportunities from hands-on projects and courses to job-ready certificates and degree programs.</h5>
            <button className='w-sm-25  me-center me-md-start me-lg-start homediv_btn' type='submit' >
              <NavLink to="/contact" className='text-decoration-none text-light'>
              Contact Us
              </NavLink>
            </button>
          </div>
          <div className="col-10 col-md-10 col-lg-10 col-xl-5 mx-auto order-0 order-lg-0 order-xl-1 page_img text-center mb-5">
            <img className="img-fluid about_secondsection_img" src={home_img} alt="image_error"></img>
          </div>
        </div>
      </div>
      {/* about second section ends*/}


      {/* about third section starts */}
      <div className="row about_thirdsection">
        <div className="col-8 mx-auto text-center about_thirdsection_div">
          <h1 className="mt-1 mb-5 fw-bold text-decoration-underline ">We believe</h1>
          <h4 className="fw-bold">
            Learning is the source of human progress.
            <br /><br />
            It has the power to transform our world<br />
            from illness to health,<br />
            from poverty to prosperity,<br />
            from conflict to peace.<br /><br />

            It has the power to transform our lives<br />
            for ourselves,<br />
            for our families,<br />
            for our communities.<br /><br />

            No matter who we are or where we are,<br />
            learning empowers us to change and grow<br />
            and redefine what's possible.<br />
            That's why access to the best learning is a right, not a privilege.<br /><br />

            And that's why Ankit Enterprise is here.<br />
            We partner with the best institutions<br />
            to bring the best learning<br />
            to every corner of the world.<br /><br />

            So that anyone, anywhere has the power to<br />
            transform their lives through learning.<br />
          </h4>
        </div>
      </div>
      {/* about third section ends */}

    </>
  );
};

export default About;
