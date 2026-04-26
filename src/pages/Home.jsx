import React from 'react';
import Banner from '../components/home/Banner';
import BrandMarquee from '../components/home/BrandMarquee';
import About from '../components/home/About';
import Solutions from '../components/home/Solutions';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Steps from '../components/home/Steps';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
    return (
        <>
          <Banner />  
          <BrandMarquee />
          <About />
          <Solutions />
          <WhyChooseUs />
          <Steps />
          <Testimonials />
        </>
    );
};

export default Home;