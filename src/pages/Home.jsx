import React from 'react';
import Banner from '../components/home/Banner';
import BrandMarquee from '../components/home/BrandMarquee';
import About from '../components/home/About';
import Solutions from '../components/home/Solutions';
import WhyChooseUs from '../components/home/WhyChooseUs';

const Home = () => {
    return (
        <>
          <Banner />  
          <BrandMarquee />
          <About />
          <Solutions />
          <WhyChooseUs />
        </>
    );
};

export default Home;