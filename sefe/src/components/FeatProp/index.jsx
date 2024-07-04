import React from 'react';
import './featPropStyle.css';
import fp_image_1 from '../../assets/image_1.png';
import fp_image_2 from '../../assets/image_2.png';
import fp_image_3 from '../../assets/image_3.png';

function FeatProp () {
  return (
    <main className='fp_container'>
        <section className='fp_inner_container'>
            <div>
                <h2>{'Featured Properties'}</h2>
            </div>
            <div>
                <p>{'Explore our curated selection of premier properties, meticulously chosen to suit every lifestyle and budget. From luxurious penthouses to cozy family homes, our featured listings showcase the best of Lagos living.'}</p>
            </div>
        </section>
        <section className='fp_image_container'>
            <div>
            <img src={fp_image_1} alt="info-image" className='image' /> 
            </div>
            <div>
            <img src={fp_image_2} alt="info-image" className='image' /> 
            </div>
            <div>
            <img src={fp_image_3} alt="info-image" className='image' />     
            </div>
        </section>
    </main>
  )
}

export default FeatProp