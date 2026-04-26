import React from 'react';
import Banner from '../components/home/Banner';
import BrandMarquee from '../components/home/BrandMarquee';
import About from '../components/home/About';
import Solutions from '../components/home/Solutions';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Steps from '../components/home/Steps';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';
import Footer from '../components/home/Footer';

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
          <FAQ />
          <CTA />
          <Footer />
        </>
    );
};

export default Home;