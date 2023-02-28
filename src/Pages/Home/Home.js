import React from 'react';
import About from '../../components/Home/About';
import Hero from '../../components/Home/Hero/Hero';
import Services from '../../components/Home/Services';
import Slider from '../../components/Home/Slider';
import Testimonials from '../../components/Testimonials/Testimonials';
import useTitle from '../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Hero/>
            <About></About>
            <Services></Services>
            {/* <Testimonials/> */}
        </div>
    );
};

export default Home;