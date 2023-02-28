import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from 'swiper';

import './Hero.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import 'swiper/css/effect-fade';


// import required modules
import { Navigation, Autoplay } from "swiper";

const Hero = () => {
  // componentDidMount() {
  //   new Swiper('.swiper-container', {
  //     effect: 'fade',
  //     fadeEffect: {
  //       crossFade: true,
  //       duration: 1000 // Specify the duration in milliseconds
  //     }
  //   });
  // }
  
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, EffectFade]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
          // duration: 50000
        }}

        className="mySwiper relative swiper-container">
        <SwiperSlide

        >
          {({ isActive }) => (

            <div className="slider-bg w-full bg-no-repeat bg-cover h-[70vh] flex items-center justify-center  bg-[url(https://www.warptexbd.com/image/slider/20230101082151.jpg)]">


              <div className={`container z-10 md:text-right text-center md:w-[70%] w-[90%] relative `}>
                <div className="slide-border">
                  <div className={` ease-in-out duration-[2000ms] ${isActive ? 'mr-0 opacity-100' : 'mr-[50px] opacity-10 '}`}>
                    <h2 className='text-white font-normal leading-[30px] mb-4 inline-block text-[36px] tracking-[1.2px]'>
                      <span className="text-[#deba27]">WARPTEX </span>
                      BANGLADESH LIMITED
                    </h2>
                  </div>
                  <div className={`ease-in-out duration-[2500ms] ${isActive ? 'mr-0 opacity-100' : 'mr-[50px] opacity-10 '}`}>
                    <h2 className="md:text-[5rem] text-[2rem] md:leading-[90px] leading-[29px] font-normal mb-4 text-white">Woven, Denim, Knit & Sweater <br /> Manufacturer </h2>
                  </div>
                  <div>
                    <button className="btn bg-[#deba27] text-[18px] leading-[18px] pt-4 pb-[14px] px-[50px] hover:bg-[#222429] rounded-none">DISCOVER MORE</button>
                  </div>
                  <div className="">
                  </div>
                </div>

              </div>
            </div>
          )
          }
        </SwiperSlide>
        <SwiperSlide

        >
          {({ isActive }) => (

            <div className="slider-bg w-full bg-no-repeat bg-cover h-[70vh] flex items-center justify-center  bg-[url(https://www.warptexbd.com/image/slider/20230101105838.jpg)]">


              <div className={`container z-10 md:text-right text-center md:w-[70%] w-[90%] relative `}>
                <div className="slide-border">
                  <div className={` ease-in-out duration-[2000ms] ${isActive ? 'mr-0 opacity-100' : 'mr-[50px] opacity-10 '}`}>
                    <h2 className='text-white font-normal leading-[30px] mb-4 inline-block text-[36px] tracking-[1.2px]'>
                      <span className="text-[#deba27]">WARPTEX </span>
                      BANGLADESH LIMITED
                    </h2>
                  </div>
                  <div className={`ease-in-out duration-[2500ms] ${isActive ? 'mr-0 opacity-100' : 'mr-[50px] opacity-10 '}`}>
                    <h2 className="md:text-[5rem] text-[2rem] md:leading-[90px] leading-[29px] font-normal mb-4 text-white">Woven, Denim, Knit & Sweater <br /> Manufacturer </h2>
                  </div>
                  <div>
                    <button className="btn bg-[#deba27] text-[18px] leading-[18px] pt-4 pb-[14px] px-[50px] hover:bg-[#222429] rounded-none">DISCOVER MORE</button>
                  </div>
                  <div className="">
                  </div>
                </div>

              </div>
            </div>
          )
          }
        </SwiperSlide>
        <SwiperSlide

        >
          {({ isActive }) => (

            <div className="slider-bg w-full bg-no-repeat bg-cover h-[70vh] flex items-center justify-center  bg-[url(https://www.warptexbd.com/image/slider/20230101082107.jpg)]">


              <div className={`container z-10 md:text-right text-center md:w-[70%] w-[90%] relative `}>
                <div className="slide-border">
                  <div className={` ease-in-out duration-[2000ms] ${isActive ? 'mr-0 opacity-100' : 'mr-[50px] opacity-10 '}`}>
                    <h2 className='text-white font-normal leading-[30px] mb-4 inline-block text-[36px] tracking-[1.2px]'>
                      <span className="text-[#deba27]">WARPTEX </span>
                      BANGLADESH LIMITED
                    </h2>
                  </div>
                  <div className={`ease-in-out duration-[2500ms] ${isActive ? 'mr-0 opacity-100' : 'mr-[50px] opacity-10 '}`}>
                    <h2 className="md:text-[5rem] text-[2rem] md:leading-[90px] leading-[29px] font-normal mb-4 text-white">Woven, Denim, Knit & Sweater <br /> Manufacturer </h2>
                  </div>
                  <div>
                    <button className="btn bg-[#deba27] text-[18px] leading-[18px] pt-4 pb-[14px] px-[50px] hover:bg-[#222429] rounded-none">DISCOVER MORE</button>
                  </div>
                  <div className="">
                  </div>
                </div>

              </div>
            </div>
          )
          }
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;