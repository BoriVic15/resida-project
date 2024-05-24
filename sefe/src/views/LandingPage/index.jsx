
import React from 'react';
// import Footer from 'shared/footer';
// import './LandingPageStyle.css';
import Header from 'shared/header';
import HeroSection from 'components/HeroSection';
import SubHeroSection from 'components/subHeroSection';


const LandingPage = () => {
  return <div>
      <Header />
      <HeroSection />
      <SubHeroSection />
      {/* <Footer /> */}
    </div>;
};
 
export default LandingPage;