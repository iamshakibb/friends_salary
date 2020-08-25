import React from "react";
import "./Friendsdetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Friendsdetail = (props) => {
  // console.log(props.button);
  const { name, picture, email, phone, location, salary } = props.friendinfo;
  return (
    <div className="col-lg-6 col-md-10 col-sm-12 friens-box">
      <div className="info-box">
        <div className="friend_img text-center">
          <img src={picture.large} alt="" />
        </div>
        <div className="friend_info">
          <h4 className="text-center">
            {name.first} {name.last}
          </h4>
          <h6>Email : {email}</h6>
          <h6>Phone : {phone}</h6>
          <h6>Country : {location.country}</h6>
          <h6>Salary :$ {salary}</h6>
          <button className="btn btn-danger" onClick={() => props.button(props.friendinfo)}>
            Add
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friendsdetail;
