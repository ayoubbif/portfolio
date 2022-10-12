import React, { Fragment } from "react";
import "./Icons.css";

const Icons = ({ icon, text, textColor }) => {
  return (
    <Fragment>
      <span className="desktop-icons">
        <img src={icon} alt="" height="30px" width="30px" />
        <p style={{color:`${textColor}`, fontFamily:'ms_sans_serif', fontSize: '1em'}}>{text}</p>
      </span>
    </Fragment>
  );
};
Icons.defaultProps={
  textColor:"white"
}

export default Icons;