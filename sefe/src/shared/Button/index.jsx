import React from 'react'
import "./buttonStyle.css";


const Button = ({style, btnName, outline }) => {
  return <button style={style} className={`${outline ? 'outline' : 'btn'}`}>{btnName}</button>;
};

export default Button;