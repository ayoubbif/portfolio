import React, { Fragment } from "react";
import "./Icons.css";

const Icons = ({ icon, text, textColor }) => {
  return (
    <Fragment>
      <span className="desktop-icons">
        <img src={icon} alt="" height="40px" width="40px" />
        <p style={{color:`${textColor}`, fontFamily:'ms_sans_serif'}}>{text}</p>
      </span>
    </Fragment>
  );
};
Icons.defaultProps={
  textColor:"white"
}

export default Icons;