
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
    </div>;
};

export default LandingPage;