import React from 'react';
import './discoverStyle.css';
import disc_bg from 'assets/bg_r9.svg';
import Button from 'shared/Button';
import { HiArrowRight } from "react-icons/hi2";

const Discover = () => {
  return <div className='disc_image_container'
    style={{
        backgroundImage: `url(${disc_bg})`,
    }}>
        <div className='disc_text_container'>
            <h2 className='disc_text'>Discover a place you'll love to live</h2>
            <div className='disc_button'>
                <Button 
                style={{
                    backgroundColor: "#E7C873",
                    borderRadius: "10px",
                    padding: "12px 34px",
                    fontWeight: "bold",
                    fontSize: "14px",
                    color: "#1B2056",
                }}
                btnName={"Download app"} 
                rightIcon={<HiArrowRight />}
                />
            </div>
        </div>
    </div>;  
};

export default Discover








