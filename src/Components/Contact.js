import React from 'react'

const Contact = () => {
  return (
      <section className="contact_section  text-black pt-1 pb-5">
        {/*heading starts  */}
        <div className="container my-5">
          <h1 className="text-center contact_heading">Contact Us</h1>
          <p className="text-capitalize text-center" style={{ color: "#000000ab" }}>our team is happy to answer your questions <br /> fill out the form and we'll be in touch as soon as possible</p>
          <hr className="contact_hr mx-auto" />
        </div>
        {/* heading ends  */}
        {/* form starts  */}
        <div className="container sevent_section_form">
          <form>
            <div className="row">
              {/* first name starts  */}
              <div className="col-12 col-md-6 col-lg-6 mb-4">
                <div className="label mb-1">
                  <label htmlFor="fname">First Name</label>
                </div>
                <input
                  className="w-100"
                  type="text"
                  id="fname"
                  placeholder="First Name"
                />
              </div>
              {/* first name ends  */}
              {/* last name starts  */}
              <div className="col-12 col-md-6 col-lg-6 mb-4">
                <div className="label mb-1">
                  <label htmlFor="lname">Last Name</label>
                </div>
                <input
                  className="w-100"
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                />
              </div>
              {/* last name ends  */}
            </div>
            {/* email starts  */}
            <div className="mb-4">
              <div className="mb-1">
                <label htmlFor="email">Email</label>
              </div>
              <input
                className="w-100"
                type="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            {/* email ends  */}
            {/* Your Query starts */}
            <div className="mb-4">
              <div className="mb-1">
                <label htmlFor="query">Messeage</label>
              </div>
              <textarea
                className="w-100"
                rows="5"
                id="query"
                placeholder="Enter your Messeage"
              ></textarea>
            </div>
            {/* Your Query ends */}
            {/* submit btn starts  */}
            <div
              className="SeventhSectionForm_submit_btn text-center text-md-start text-lg-start"
            >
              <button type="submit" className="btn btn-outline-primary contactSubmitBtn">Submit</button>
            </div>
            {/* submit btn ends */}
          </form>
        </div>
        {/* form ends */}
      </section>
  )
}

export default Contact
