import React from 'react';
import './discoverStyle.css';
import disc_bg from 'assets/bg_r9.svg';
import Button from 'shared/Button';

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
                rightIcon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2300/svg">
                    <path d="M0.961428 6.3975H12.9721L8.37301 2.01823, margin:0C8.13219 1.78893 8.12285 1.40795 8.35223 1.1672C8.58131 0.926748 8.96241 0.917118 9.23353 1.14643L14.4559 6.14802C14.6831 6.37552 14.8087 6.67766 14.8087 6.99937C14.8087 7.32377 14.6831 7.62321 14.4453 7.86065L9.23323 12.852C9.08674 12.963 8.93743 13.0181 8.78812 13.0181C8.62918 13.0181 8.47023 12.9555 8.35193 12.8313C8.1223, margin:05 12.5905 8.13189 12.2398 8.37271 11.9805L12.991 7.60123, margin:0H0.961428C0.629095 7.60123, margin:0 0.359375 7.33161 0.359375 6.99937C0.359375 6.66714 0.629095 6.3975 0.961428 6.3975Z" fill="#1F4B43"/>
                    </svg>}
                />
            </div>
        </div>
        
        {/* <Button 
            style={{
                backgroundColor: "#E7C873",
                borderRadius: "10px",
                padding: "12px 34px",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#1B2056",
            }}
            btnName={"Download app"} /> */}
    </div>;  
};

export default Discover








