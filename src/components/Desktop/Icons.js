import React, { Fragment } from "react";
import "./Icons.css";

const Icons = ({ icon, text, textColor }) => {
  return (
    <Fragment>
      <span className="desktop-icons">
        <img src={icon} alt="" height="50px" width="50px" />
        <p style={{color:`${textColor}`, fontFamily:'ms_sans_serif'}}>{text}</p>
      </span>
    </Fragment>
  );
};
Icons.defaultProps={
  textColor:"white"
}

export default Icons;