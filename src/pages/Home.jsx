import React from 'react';
import Banner from '../components/home/Banner';
import BrandMarquee from '../components/home/BrandMarquee';
import About from '../components/home/About';

const Home = () => {
    return (
        <>
          <Banner />  
          <BrandMarquee />
          <About />
        </>
    );
};

export default Home;