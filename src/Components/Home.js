import React from 'react';
import home_img from '../Images/home_img.gif';
import Common from "./Common";

const Home = () => {
  return (
    <Common 
     main_heading1="grow your business with"
     main_heading2="ahuja enterprises"
     para="we are the team of talented developers"
     btn_content="Get Started"
     img={home_img}
     link="/services"
    />
  )
}

export default Home
