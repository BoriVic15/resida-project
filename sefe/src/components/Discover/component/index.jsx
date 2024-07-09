import React from 'react';
import Button from 'shared/Button';
import { IoLogoApple } from "react-icons/io5";
import { BiLogoPlayStore } from "react-icons/bi";
import './indexStyles.css';

const AppButton = () => {
  return (
    <div className='app_btn'>
      <Button style={{
        backgroundColor: "#1F4B43",
        borderRadius: "10px",
        padding: "12px 34px",
        fontWeight: "normal",
        fontSize: "15px",
        color: "#fff",
        width: "213px",
        height: "63px",
      }}
      btnName={<p style={{textAlign: 'left', width: '100px', borderLeft: '1px solid #fff', paddingLeft: '9px'}}><span style={{fontSize: "12px"}}>Download on the</span> Apple Store</p>} 
      leftIcon={<IoLogoApple style={{color: '#fff', width: '30px', height: '50px'}}/>}/> <br/>
      <Button style={{
        backgroundColor: "#1F4B43",
        borderRadius: "10px",
        padding: "12px 34px",
        fontWeight: "normal",
        fontSize: "15px",
        color: "#fff",
        width: "213px",
        height: "63px",
      }}
      btnName={<p style={{textAlign: 'left', width: '100px', borderLeft: '1px solid #fff', paddingLeft: '9px'}}><span style={{fontSize: "12px"}}>Get in on</span> Google Play</p>} 
      leftIcon={<BiLogoPlayStore style={{color: '#fff', width: '30px', height: '50px'}}/>}/>
    </div>
    
  )
}

export default AppButton
