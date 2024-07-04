import React from 'react';
import "./infocardStyle.css";
import Button from 'shared/Button';
import circle1 from '../../assets/Circle1.svg';
import circle2 from '../../assets/Circle2.svg';
import circle3 from '../../assets/Circle3.svg';
import circle4 from '../../assets/Circle4.svg';
import CircleImage from "./components/CircleImage";


function InfoCard ({title, subtitle, body, image, imageStyle, imageHeight, infoContainer, infoStyle, infoGenContainer, button_display, circle, circleStyletitle, circleStyleSubtitle, reverse, circleStylepara
}) {
  return (
  <div className={infoGenContainer}>
      <div className={infoContainer}>
        {reverse ? (
          <>
        <div className='info_description'>
          <div className={infoStyle}>
            {circle && ( 
              <div className='info_circle'>
              
                <CircleImage image={circle1} />
                <CircleImage image={circle2} style={{marginLeft:'-30px'}} />
                <CircleImage image={circle3} style={{zIndex:30, marginLeft:'-30px'}} />
                <CircleImage image={circle4} style={{marginLeft:'-30px', zIndex:40}}/>

            </div> 
          )}

          {circleStyletitle ?  (
            <h2 className="info_title" style={{fontWeight:600, fontSize:23, margin:0}}>{title}</h2>
            ) : (
            <h2 className="info_title">{title}</h2>
            )}

          {circleStyleSubtitle ? (
            <h2 className='info_subtitle' style={{fontWeight:300, fontSize:23, marginTop:0}}>{subtitle}</h2>
            ) : (
            <h2 className='info_subtitle'>{subtitle}</h2>
            )}
          {circleStylepara ? (
            <p className='info_para' style={{marginBottom:-90, marginTop:-2}}>{body}</p>
          ) : (
          <p className='info_para'>{body}</p>
          )}
          
          <div className={button_display}>
            <Button 
            style={{
            backgroundColor: '#DBA94D',
            color: '#1F4B43',
            padding: '11px 12px',
            width:"23, margin:06px"
        }} btnName={"Download our app"}
        rightIcon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2300/svg">
        <path d="M0.961428 6.3975H12.9721L8.37301 2.01823, margin:0C8.13219 1.78893 8.12285 1.40795 8.35223 1.1672C8.58131 0.926748 8.96241 0.917118 9.23353 1.14643L14.4559 6.14802C14.6831 6.37552 14.8087 6.67766 14.8087 6.99937C14.8087 7.32377 14.6831 7.62321 14.4453 7.86065L9.23323 12.852C9.08674 12.963 8.93743 13.0181 8.78812 13.0181C8.62918 13.0181 8.47023 12.9555 8.35193 12.8313C8.1223, margin:05 12.5905 8.13189 12.2398 8.37271 11.9805L12.991 7.60123, margin:0H0.961428C0.629095 7.60123, margin:0 0.359375 7.33161 0.359375 6.99937C0.359375 6.66714 0.629095 6.3975 0.961428 6.3975Z" fill="#1F4B43"/>
        </svg>}
        />
          </div>
          </div>
        </div>
        <div className={imageStyle}>
          <img src={image} alt="info-image" className={imageHeight} />
        </div>
        </>
        ) : (
        <>
        <div className={imageStyle}>
          <img src={image} alt="info-image" className={imageHeight} />
        </div>
        <div className='info_description'>
          <div className={infoStyle}>
            {circle && ( 
              <div className='info_circle'>
              {/* <div className='info_circle_img'>
                <img src={circle} alt="infocircle" className="circle_image"/>
              </div> */}
                <CircleImage image={circle1} />
                <CircleImage image={circle2} style={{marginLeft:'-30px'}} />
                <CircleImage image={circle3} style={{zIndex:30, marginLeft:'-30px'}} />
                <CircleImage image={circle4} style={{marginLeft:'-30px', zIndex:40}}/>

            </div> 
          )}

          {circleStyletitle ?  (
            <h2 className="info_title" style={{fontWeight:700}}>{title}</h2>
            ) : (
            <h2 className="info_title">{title}</h2>
            )}

          {circleStyleSubtitle ? (
            <h2 className='info_subtitle' style={{fontWeight:300}}>{subtitle}</h2>
            ) : (
            <h2 className='info_subtitle'>{subtitle}</h2>
            )}

          <p className='info_para'>{body}</p>
          <div className={button_display}>
            <Button 
            style={{
            backgroundColor: '#DBA94D',
            color: '#1F4B43',
            padding: '11px 12px',
            width:"23, margin:06px"
        }} btnName={"Download our app"}
        rightIcon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2300/svg">
        <path d="M0.961428 6.3975H12.9721L8.37301 2.01823, margin:0C8.13219 1.78893 8.12285 1.40795 8.35223 1.1672C8.58131 0.926748 8.96241 0.917118 9.23353 1.14643L14.4559 6.14802C14.6831 6.37552 14.8087 6.67766 14.8087 6.99937C14.8087 7.32377 14.6831 7.62321 14.4453 7.86065L9.23323 12.852C9.08674 12.963 8.93743 13.0181 8.78812 13.0181C8.62918 13.0181 8.47023 12.9555 8.35193 12.8313C8.1223, margin:05 12.5905 8.13189 12.2398 8.37271 11.9805L12.991 7.60123, margin:0H0.961428C0.629095 7.60123, margin:0 0.359375 7.33161 0.359375 6.99937C0.359375 6.66714 0.629095 6.3975 0.961428 6.3975Z" fill="#1F4B43"/>
        </svg>}
        />
          </div>
          </div>
        </div>
        </>
      )}
       
          
      </div>
    </div>
  )
}

export default InfoCard