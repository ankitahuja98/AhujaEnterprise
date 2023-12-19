import React from 'react';
import { NavLink } from "react-router-dom";

const Home = (props) => {

  return (
    <div className='container home_section d-block d-xl-flex flex-column justify-content-center '>
      <div className="row">
        <div className="commondiv col-10 col-md-10 col-lg-10 col-xl-5 mx-auto d-flex flex-column justify-content-center mb-5 order-1 order-lg-1 order-xl-0 ">
          <h1 className='text-capitalize home_heading'> {props.main_heading1} <br /><span style={{ color: '#1818a6' }}>{props.main_heading2}</span></h1>
          <p className='home_para pt-2 pb-3'>{props.para}</p>
          <button className='w-sm-25  me-center me-md-start me-lg-start homediv_btn' type='submit' >
            <NavLink to={props.link} className='text-decoration-none text-light'>
              {props.btn_content}
            </NavLink>
          </button>
        </div>
        <div className="col-10 col-md-10 col-lg-10 col-xl-5 mx-auto order-0 order-lg-0 order-xl-1 page_img text-center">
          <img className="img-fluid" src={props.img} alt="image_error"></img>
        </div>
      </div>
    </div>
  )
}

export default Home
