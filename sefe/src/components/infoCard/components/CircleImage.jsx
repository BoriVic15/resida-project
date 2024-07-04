import React from 'react';

function CircleImage ({image, style}) {
  return (
    <div className='info_circle_img' style={style}>
      <img src={image} alt="infocircle" className="circle_image" />   
    </div>
  );
}

export default CircleImage;