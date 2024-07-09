
import React from 'react';
// import Footer from 'shared/footer';
// import './LandingPageStyle.css';
import Header from 'shared/header';
import HeroSection from 'components/HeroSection';
import SubHeroSection from 'components/subHeroSection';
import InfoCard from 'components/infoCard/infocard';
import OurExperience from 'components/ourExperience';
import DreamHome from 'components/DreamHome';
import info_image from "../../assets/Frame 15978838260.svg";
import guidemap from "../../assets/guidemap.svg";
import FeatProp from 'components/FeatProp';
import propHouse from '../../assets/property_image.svg'
import Discover from 'components/Discover/discover';
import Popular from 'components/Neighbourhood/popular';
import space from '../../assets/office_space.svg';
import appDevice from '../../assets/App_image.svg';

const LandingPage = () => {
  return <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <InfoCard 
      title="Resida is Not Just an App"
      subtitle="We are an ecosystem with you at the center"
      body="Resida aims to bridge the gap between potential tenants and available properties. This app is not just a tool; it's a solution for individuals and families who are navigating the challenging terrain of apartment hunting in a new or familiar city."
      image={info_image}
      imageStyle={'info_image'}
      infoContainer={'info_inner_container'}
      imageHeight={'image'}
      infoStyle={'info'}
      infoGenContainer={'info_container'}
      space={true}
      />
      <OurExperience />
      <DreamHome />
      <InfoCard 
      title="Comprehensive"
      subtitle="Neighborhood Guides"
      body="The 'Neighborhood Guides' in Resida are like your friendly local experts, giving you the inside scoop on the vibe, hotspots, and quirks of each area so you can find your perfect match effortlessly! 🏡✨"
      image={guidemap}
      imageStyle={'info_comprehensive'}
      infoContainer={'info_interior_container'}
      button_display={'info_btnn'}
      imageHeight={'mapImage'}
      infoStyle={'info_guide'}
      infoGenContainer={'info_guide_container'} 
      />
      <FeatProp />
      <InfoCard 
      title="Do you have a property?"
      subtitle="Provide accommodation here in Lagos"
      body="Own a property in Lagos? Join our platform to effortlessly list your accommodations and connect with eager tenants seeking their perfect home in the vibrant city of Lagos."
      image={propHouse}
      imageStyle={'info_comprehensive'}
      infoContainer={'info_interiorprop_container'}
      button_display={'info_btnn'}
      imageHeight={'mapImage'}
      infoStyle={'info_prop'}
      infoGenContainer={'info_prop_container'}
      circle
      circleStyletitle
      circleStyleSubtitle
      circleStylepara
      reverse
      />
      <Discover />
      <Popular />
      <InfoCard 
      title="Need an office space?"
      body="Seeking office space in Lagos? Look no further! Our accommodations offer tailored solutions to meet your workspace needs, ensuring productivity and comfort in the heart of Lagos"
      image={space}
      imageStyle={'officeImageStyle'}
      infoContainer={'space_inner_container'}
      imageHeight={'spaceImage'}
      infoStyle={'office_info_style'}
      infoGenContainer={'office_space_container'}
      space={true}
      />
      <InfoCard 
      title="Download our App"
      body="With intuitive search features and a curated selection of properties tailored to your preferences, finding your dream home has never been easier. Join thousands of satisfied users who have unlocked the key to their ideal living space with just a tap."
      image={appDevice}
      imageStyle={'app_image_container'}
      infoContainer={'info_app_subContainer'}
      button_display={'info_btnn'}
      imageHeight={'appImage'}
      infoStyle={'app_info'}
      infoGenContainer={'info_app_container'}
      reverse
      appBtn={true}
      />
    </div>;
};

export default LandingPage;