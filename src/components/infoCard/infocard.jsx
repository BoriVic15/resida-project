import React from 'react';
import "./infocardStyle.css";
import Button from 'shared/Button';
import circle1 from '../../assets/Circle1.svg';
import circle2 from '../../assets/Circle2.svg';
import circle3 from '../../assets/Circle3.svg';
import circle4 from '../../assets/Circle4.svg';
import CircleImage from "./components/CircleImage";
import { HiArrowRight } from "react-icons/hi2";
import AppButton from 'components/Discover/component';


function InfoCard ({title, subtitle, body, image, imageStyle, imageHeight, infoContainer, infoStyle, infoGenContainer, button_display, circle, circleStyletitle, circleStyleSubtitle, reverse, circleStylepara, space, appBtn
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
          {appBtn ? (<AppButton />):(<div className={button_display}>
            <Button 
            style={{
            backgroundColor: '#DBA94D',
            color: '#1F4B43',
            padding: '11px 12px',
            width:"23, margin:06px"
        }} btnName={"Download our app"}
        rightIcon={<HiArrowRight />}
        />
          </div>
        )}
          </div>
        </div>
        <div className={imageStyle}>
          <img src={image} alt="info-housing" className={imageHeight} />
        </div>
        </>
        ) : (
        <>
        <div className={imageStyle}>
          <img src={image} alt="info-housing" className={imageHeight} />
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

          {space ? ("") : (<div className={button_display}>
            <Button 
            style={{
            backgroundColor: '#DBA94D',
            color: '#1F4B43',
            padding: '11px 12px',
            width:"23, margin:06px"
        }} btnName={"Download our app"}
        rightIcon={<HiArrowRight />}
        />
          </div>)
          }
          
          </div>
        </div>
        </>
      )}
       
          
      </div>
    </div>
  )
}

export default InfoCard