import React from 'react';
import './dreamhomeStyle.css';
import background from 'assets/hero_image_bg.png';
import dream from 'assets/hero_image.png';
import Button from 'shared/Button';

const DreamHome = () => {
  return <div className='fyp_container flex'
    style={{ 
            backgroundImage: `url(${background})`,
        }}>
    <section className='fyp_image_section'>
        <img src={dream} alt="info" className='image' />
    </section>
    <section className='fyp_text_section'>
        <div>
            <p>{'Your dream home is only a few clicks away'}</p>
        </div>
        <div>
            <span>{'- Find your space now!'}</span>
        </div>
        <div className='fyp_button'>
        <Button 
            style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "12px 34px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#1B2056",
                width: "100%",
            }}
            btnName={"Download app"} />
        </div>
    </section> 
    </div>;
};

export default DreamHome