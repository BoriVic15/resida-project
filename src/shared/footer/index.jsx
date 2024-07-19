import React from 'react'
import './footerStyle.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <main className='footer-main'>
      <section className='first_grid_section'>
        <div className='grid1'>
          <h2>{'Resida'}</h2>
          <p>{'Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam'}</p>
          <div className='iconStyle'>
            <div><FaFacebookF /></div>
            <div><FaXTwitter /></div>
            <div><FaInstagramSquare /></div>
            <div><FaLinkedinIn /></div>
            <div><FaYoutube /></div>
          </div>
        </div>
        <div className='grid2'>
          <h3 className='h3Styles'>{'Product'}</h3>
            <p>{'Pricing'}</p>
            <p>{'Case studies'}</p>
            <p>{'Reviews'}</p>
            <p>{'Updates'}</p>
        </div>
        <div className='grid3'>
          <h3 className='h3Styles'>{'Company'}</h3>
            <p>{'Contact Us'}</p>
            <p>{'Careers'}</p>
            <p>{'Culture'}</p>
            <p>{'Blog'}</p>
        </div>
        <div className='grid4'>
          <h3 className='h3Styles'>{'Support'}</h3>
            <p>{'Help center'}</p>
            <p>{'Server status'}</p>
            <p>{'Report a bug'}</p>
            <p>{'Chat support'}</p>
        </div>
        <div className='grid5'>
          <h3 className='h3Styles'>{'Legal'}</h3>
            <p>{'Privacy Policy'}</p>
            <p>{'User Terms of Use'}</p>
            <p>{'Payments & Pricing policy'}</p>
            <p>{'Cookies and Data Privacy'}</p>
        </div>
      </section>

      {/* second section */}
      <div className='two_section_container'>
      <section className='second_grid_section'>
        <div><FaRegEnvelope style={{ position: 'absolute', top: '2.5px'}}/><span className='infoStyle'>{'contact@company.com'}</span></div>
        <div className='callStyle'><IoCallOutline style={{ top: '2.5px'}}/><span className='infoStyle1'>{'(414) 687 - 5892'}</span></div>
        <div>{'794 Mcallister St San Francisco, 94102'}</div>
      </section>

      {/* third section */}
      <section className='third_grid_section'>
        <div>{'Copyright © 2022 BRIX Templates'}</div>
        <div>All Rights Reserved | <a id='terms_and_conditions' href='#terms_and_conditions'>Terms and Conditions</a> | Privacy Policy</div>
      </section>
      </div>
    </main>
  )
}

export default Footer