import React from 'react'
import './headerStyle.css'

const Header = () => {
  return (
    <div className="header_container">
      {/*logo*/}
      <div>
        logo
      </div>
    {/*CTA*/}
      <div className="header_cta_section">
        <div>Contact</div>
        <div>Download</div>
      </div>
    </div>   
  )
}

export default Header;
