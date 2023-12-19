import React from 'react'
import Card from './Card'
import ApiData from './ServicesApi'

const Services = () => {
  return (
    <>
      <div className='service_heading'>
        <div className='container text-center mt-3'>
          <h1 className="fw-bold mb-4 contact_heading">Our Services</h1>
        </div>
      </div>

      {/* service content starts  */}
      <div className="container">
        <div className="row gy-4 gx-5 justify-content-between">
          {/* card api fetch starts */}
          {ApiData.map((val, ind) => {
            return (<Card key={ind}
              card_img={val.service_img} card_title={val.title} card_desc={val.description} skill1={val.skill1} skill2={val.skill2} skill3={val.skill3} skill4={val.skill4} skill5={val.skill5} skill6={val.skill6}
            />)
          })}
          {/* card api fetch ends */}
        </div>
      </div>
      {/* service content starts  */}

    </>
  )
}

export default Services


