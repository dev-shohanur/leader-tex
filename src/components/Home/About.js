import React from 'react';
import CountUp from 'react-countup';
import 'react-photo-view/dist/react-photo-view.css';
import './About.css'

const About = () => {

    return (
        <div className='container'>
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className="relative">
                        <div className="bg-white -top-[150px] left-0 absolute z-[9999]">
                        <div className=" pt-[60px] pb-[65px] px-[45px] ">
                            <h3 className='text-[26px] leading-[29px] tracking-[1.2] uppercase font-normal text-[#deba27]'>WHO WE ARE</h3>
                            <h2 className='text-[60px] leading-[65px] font-normal text-[#222429] mb-[15px]'>The Leading Apparel Manufacturer And Exporter</h2>
                            <p className='text-[16px] leading-[26px] font-normal'>
                                Leader Tex Bangladesh Limited is a leading multinational apparel buying hub, sourcing company, manufacturer and committed exporter on woven, denim, knit, sweater etc. We produce best quality garments for all of our internationally reputed buyers/importers and departmental chain stores from US, RU, EU, etc. markets. Since our establishment, we have developed long term trade relationships with most of our potential customers & earned trust in their respective markets.
                            </p>
                            <a className='text-[18px] font-medium text-[#deba27] hover:text-black border-b-[1px] border-[#deba27] hover:border-black uppercase' href="/">View More</a>
                        </div>
                        <img className='w-full' src="https://www.warptexbd.com/image/home-about-section/home_about.jpg" alt="" srcset="" />
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-white z-[9999]  border-l-[1px] border-l-[#e6e8eb]">
                        <div className=" pt-[60px] pb-[65px] px-[45px] ">
                            <h3 className='text-[26px] leading-[29px] tracking-[1.2] uppercase font-normal text-[#deba27]'>Leader Tex BANGLADESH LIMITED</h3>
                            <h2 className='text-[60px] leading-[65px] font-normal text-[#222429] mb-[15px]'>We Are In Apparel Industries</h2>
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                                <div data-aos="zoom-in-up" data-aos-duration="2000" className="counter-box border pt-[35px] pb-[40px] px-[30px] border-[#eaeaea] mx-[5px] relative">
                                    <i class="fa-solid fa-handshake text-[50px] text-[#DEBA27FF] leading-[60px] text-center"></i>
                                    <h2 className='text-[45px] leading-[50px] font-semibold'>
                                        <CountUp start={0} end={40} enableScrollSpy /> +
                                    </h2>
                                    <h3 className='text-[16px] font-medium leading-[26px] tracking-[1.2px]'>TRUSTED CLIENTS</h3>

                                    <div className="counter-box-left-border duration-500 w-[3px] h-[70%] bg-[#DEBA27FF] absolute top-[15%] left-0"></div>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-duration="2000" className="counter-box border pt-[35px] pb-[40px] px-[30px] border-[#eaeaea] mx-[5px] relative">
                                    <i class="fa-solid fa-truck-fast text-[50px] text-[#DEBA27FF] leading-[60px] text-center"></i>
                                    <h3 className='text-[16px] font-normal leading-[26px] tracking-[1.2px]'>More than</h3>
                                    <h2 className='text-[45px] leading-[50px] font-semibold'>
                                        <CountUp start={0} end={5000} enableScrollSpy /> 
                                    </h2>
                                    <h3 className='text-[16px] font-medium leading-[26px] tracking-[1.2px]'>SHIPMENTS</h3>

                                    <div className="counter-box-left-border duration-500 w-[3px] h-[70%] bg-[#DEBA27FF] absolute top-[15%] left-0"></div>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-duration="2000" className="counter-box border pt-[35px] pb-[40px] px-[30px] border-[#eaeaea] mx-[5px] relative">
                                    <i class="fa-solid fa-users text-[50px] text-[#DEBA27FF] leading-[60px] text-center"></i>
                                    <h2 className='text-[45px] leading-[50px] font-semibold'>
                                        <CountUp start={0} end={13} enableScrollSpy /> +
                                    </h2>
                                    <h3 className='text-[16px] font-medium leading-[26px] tracking-[1.2px]'>YEARS OF EXPERIENCE</h3>

                                    <div className="counter-box-left-border duration-500 w-[3px] h-[70%] bg-[#DEBA27FF] absolute top-[15%] left-0"></div>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-duration="2000" className="counter-box border pt-[35px] pb-[40px] px-[30px] border-[#eaeaea] mx-[5px] relative">
                                    <i class="fa-solid fa-warehouse text-[50px] text-[#DEBA27FF] leading-[60px] text-center"></i>
                                    <h2 className='text-[45px] leading-[50px] font-semibold'>
                                        <CountUp start={0} end={45} enableScrollSpy />
                                    </h2>
                                    <h3 className='text-[16px] font-medium leading-[26px] tracking-[1.2px]'>VISITED CONFERENCE</h3>

                                    <div className="counter-box-left-border duration-500 w-[3px] h-[70%] bg-[#DEBA27FF] absolute top-[15%] left-0"></div>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-duration="2000" className="counter-box border pt-[35px] pb-[40px] px-[30px] border-[#eaeaea] mx-[5px] relative">
                                    <i class="fa-solid fa-industry text-[50px] text-[#DEBA27FF] leading-[60px] text-center"></i>
                                    <h2 className='text-[45px] leading-[50px] font-semibold'>
                                        <CountUp start={0} end={13} enableScrollSpy /> +
                                    </h2>
                                    <h3 className='text-[16px] font-medium leading-[26px] tracking-[1.2px]'>COMPLIANCE FACTORIES</h3>

                                    <div className="counter-box-left-border duration-500 w-[3px] h-[70%] bg-[#DEBA27FF] absolute top-[15%] left-0"></div>
                                </div>
                                <div data-aos="zoom-in-up" data-aos-duration="2000" className="counter-box border pt-[35px] pb-[40px] px-[30px] border-[#eaeaea] mx-[5px] relative">
                                    <i class="fa-solid fa-user-tie text-[50px] text-[#DEBA27FF] leading-[60px] text-center"></i>
                                    <h2 className='text-[45px] leading-[50px] font-semibold'>
                                        <CountUp start={0} end={1} enableScrollSpy /> M
                                    </h2>
                                    <h3 className='text-[16px] font-medium leading-[26px] tracking-[1.2px]'>PCS/MONTH PRODUCTION</h3>

                                    <div className="counter-box-left-border duration-500 w-[3px] h-[70%] bg-[#DEBA27FF] absolute top-[15%] left-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;