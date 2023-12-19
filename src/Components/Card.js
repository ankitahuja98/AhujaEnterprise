import React from "react";
import { NavLink } from "react-router-dom";


const Card = (props) => {
  return (

    <div className="col-12 col-md-6 col-lg-4 mb-3">
      <div className="text-center card-box rounded-2 p-4">
        <img
          src={props.card_img}
          alt="Image_not_loading"
          className="img-fluid card_img"
        // width="200px"
        />
        <h5 className="my-3 fw-bolder">{props.card_title}</h5>
        <p className="mb-4">
          {props.card_desc}
        </p>
        <span className="d-flex align-item-start mb-2 fw-bolder fs-6">
          Skills You'll Gain
        </span>
        <table className="table">
          <thead>
            <tr className="row">
              <th className="col-3 card_skills">
                {props.skill1}
              </th>
              <th className="col-3 card_skills">
                {props.skill2}
              </th>
              <th className="col-3 card_skills">
                {props.skill3}
              </th>
              <th className="col-3 card_skills">
                {props.skill4}
              </th>
              <th className="col-3 card_skills">
                {props.skill5}
              </th>
              <th className="col-3 card_skills">
                {props.skill6}
              </th>
            </tr>
          </thead>
        </table>
        <button className="bg-primary rounded-circle p-2" >
        {/* to="/services/frontend" */}
          <NavLink > 
            <i
              className="fa-solid fa-arrow-right fa-2xl" style={{ color: "white" }}
            ></i>
          </NavLink>
        </button>
      </div>
    </div>

  );
};

export default Card;
