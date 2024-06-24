
import React from 'react';
// import Footer from 'shared/footer';
// import './LandingPageStyle.css';
import Header from 'shared/header';
import HeroSection from 'components/HeroSection';
import SubHeroSection from 'components/subHeroSection';
import InfoCard from 'components/infoCard/infocard';
import OurExperience from 'components/ourExperience';
import DreamHome from 'components/DreamHome';


const LandingPage = () => {
  return <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      <InfoCard />
      <OurExperience />
      <DreamHome />
    </div>;
};

export default LandingPage;