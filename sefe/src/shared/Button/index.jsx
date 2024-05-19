import React from 'react'
import "./buttonStyle.css";


const Button = ({btnName, outline}) => {
  return <div className={'${outline ? outline : "btn"} '}>{btnName}</div>;
};

export default Button;