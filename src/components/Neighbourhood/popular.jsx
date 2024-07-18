import React from 'react';
import './popularStyle.css';
import image1 from '../../assets/Lekki.svg';
import image2 from '../../assets/Agege.svg';
import image3 from '../../assets/Gbagada.svg';
import image4 from '../../assets/Correct_Obalende.svg';
import image5 from '../../assets/Yaba.svg';


function Popular() {
  return (
        <section className='container'>
            <div className='text_container'>
              <h2 className='header_text_style'>{'Find homes in popular neighbourhood'}</h2>
              <p className='para_text_style'>{'Apartments in Lekki, Obalende, Agege & Yaba'}</p> 
            </div>
            <div className='pic1'>
                <div className='lekki'>
                  <img src={image1} alt='lekki_image' />
                </div>
                <div className='agege'>
                  <img src={image2} alt='agege_image' />
                </div>
                <div className='gbagada'>
                  <img src={image3} alt='lekki_image' />
                </div>
                <div className='obalende'>
                  <img src={image4} alt='lekki_image' />
                </div>
                <div className='yaba'>
                  <img src={image5} alt='lekki_image' />
                </div>
            </div>
        </section>
            
  )
}

export default Popular