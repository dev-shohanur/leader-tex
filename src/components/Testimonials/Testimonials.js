import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CountUp from 'react-countup';

const Testimonials = () => {


  const [sliderSettings, setSliderSettings] = useState({
    // dots: true,
    infinite: true,
    // speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    arrows: false,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1351) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
        });
      }
      else if (window.innerWidth >= 750 && window.innerWidth <= 1350) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
        });
      } else if (window.innerWidth <= 750) {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
        });
      }
      else {
        setSliderSettings({
          ...sliderSettings,
          slidesToShow: 1,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [sliderSettings]);

  return (
    <div className='overflow-hidden'>

      <div className="bg-[#222429]">
        <div className="">
          <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1">
              <div className="pl-[15px] pt-[115px] pb-[100px] pr-[100px] bg-[url(https://www.warptexbd.com/home-4/images/bg-image/col-bgimage-04.png)] bg-no-repeat" style={{ backgroundPosition: 'right -1% top -5%' }}>
                <h3 className='text-[26px] leading-[29px] tracking-[1.2] text-[#deba27]'>TESTIMONIALS!</h3>
                <h2 className='text-[60px] leading-[65px] font-normal mb-[15px] text-white'>What Our Clients Say!</h2>

                <div className="">
                  <Slider {...sliderSettings}>
                    <div className="">
                      <div className="">
                        <div className="w-[80%] mx-auto">
                          <div className="flex items-center">
                            <div className="avatar ml-0 pr-5 border-r-[6px] border-r-[#dabe27]">
                              <div className="w-24 rounded-full">
                                <img src="https://www.warptexbd.com/image/testimonial/20230119053518.jpeg" alt="" />
                              </div>
                            </div>

                            <div className="ml-5">
                              <h4 className='text-2xl font-medium text-white mt-5'>Ezekiel Pullings</h4>
                              <p className='text-[16px] font-normal text-gray-500'>Production Director</p>
                            </div>
                          </div>
                          <article className='transition-all duration-500 text-center'>
                            <div className="vounteerName text-center">
                              <p className='text-slate-500 font-semibold text-[16px] my-2'>Best place for your denim products. Their price is very competitive of others and the quality is topnotch. Wraptex has been the supplier for my denims for almost 8 years now. Wish them nothing but success. They definitely have my trust.</p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <div className="w-[80%] mx-auto">
                          <div className="flex items-center">
                            <div className="avatar ml-0 pr-5 border-r-[6px] border-r-[#dabe27]">
                              <div className="w-24 rounded-full">
                                <img src="https://www.warptexbd.com/image/testimonial/20230119053518.jpeg" alt="" />
                              </div>
                            </div>

                            <div className="ml-5">
                              <h4 className='text-2xl font-medium text-white mt-5'>Ezekiel Pullings</h4>
                              <p className='text-[16px] font-normal text-gray-500'>Production Director</p>
                            </div>
                          </div>
                          <article className='transition-all duration-500 text-center'>
                            <div className="vounteerName text-center">
                              <p className='text-slate-500 font-semibold text-[16px] my-2'>Best place for your denim products. Their price is very competitive of others and the quality is topnotch. Wraptex has been the supplier for my denims for almost 8 years now. Wish them nothing but success. They definitely have my trust.</p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <div className="w-[80%] mx-auto">
                          <div className="flex items-center">
                            <div className="avatar ml-0 pr-5 border-r-[6px] border-r-[#dabe27]">
                              <div className="w-24 rounded-full">
                                <img src="https://www.warptexbd.com/image/testimonial/20230119053518.jpeg" alt="" />
                              </div>
                            </div>

                            <div className="ml-5">
                              <h4 className='text-2xl font-medium text-white mt-5'>Ezekiel Pullings</h4>
                              <p className='text-[16px] font-normal text-gray-500'>Production Director</p>
                            </div>
                          </div>
                          <article className='transition-all duration-500 text-center'>
                            <div className="vounteerName text-center">
                              <p className='text-slate-500 font-semibold text-[16px] my-2'>Best place for your denim products. Their price is very competitive of others and the quality is topnotch. Wraptex has been the supplier for my denims for almost 8 years now. Wish them nothing but success. They definitely have my trust.</p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="">
                        <div className="w-[80%] mx-auto">
                          <div className="flex items-center">
                            <div className="avatar ml-0 pr-5 border-r-[6px] border-r-[#dabe27]">
                              <div className="w-24 rounded-full">
                                <img src="https://www.warptexbd.com/image/testimonial/20230119053518.jpeg" alt="" />
                              </div>
                            </div>

                            <div className="ml-5">
                              <h4 className='text-2xl font-medium text-white mt-5'>Ezekiel Pullings</h4>
                              <p className='text-[16px] font-normal text-gray-500'>Production Director</p>
                            </div>
                          </div>
                          <article className='transition-all duration-500 text-center'>
                            <div className="vounteerName text-center">
                              <p className='text-slate-500 font-semibold text-[16px] my-2'>Best place for your denim products. Their price is very competitive of others and the quality is topnotch. Wraptex has been the supplier for my denims for almost 8 years now. Wish them nothing but success. They definitely have my trust.</p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="">
                <div className="bg-[url(https://www.warptexbd.com/image/testimonial/testimonials.jpg)] bg-left bg-no-repeat bg-[100%] h-[550px] -mr-[200px]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#deba27] py-[40px]">
        <div className="container">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="mx-[15px]">
              <h3 className='uppercase text-white text-[30px] leading-[29px] tracking-[1.2px] mb-4 font-normal'>AT A GLANCE</h3>
              <h2 className='text-[50px] text-white font-normal leading-[46px] '><span className='text-[#e9874c]'>Warptex </span> Is Operating In Apparel Industries</h2>
            </div>
            <div className="mx-[15px]">
              <div className="mb-[10px]">
                <div className="flex items-center justify-between">
                  <p className='text-white text-[20px] leading-[25px] font-normal capitalize'>R&D And Product Development</p>
                  <p className='text-white text-[20px] leading-[25px] font-normal capitalize'>100%</p>
                </div>
                <div className=" border-[2px] border-white  mt-2"><div className="h-2 my-[3px] mx-[5px] bg-white"></div></div>
              </div>
              <div className="mb-[10px]">
                <div className="flex items-center justify-between">
                  <p className='text-white text-[20px] leading-[25px] font-normal capitalize'>R&D And Product Development</p>
                  <p className='text-white text-[20px] leading-[25px] font-normal capitalize'>100%</p>
                </div>
                <div className=" border-[2px] border-white  mt-2"><div className="h-2 my-[3px] mx-[5px] bg-white"></div></div>
              </div>
              <div className="mb-[10px]">
                <div className="flex items-center justify-between">
                  <p className='text-white text-[20px] leading-[25px] font-normal capitalize'>R&D And Product Development</p>
                  <p className='text-white text-[20px] leading-[25px] font-normal capitalize'>100%</p>
                </div>
                <div className=" border-[2px] border-white  mt-2"><div className="h-2 my-[3px] mx-[5px] bg-white"></div></div>
              </div>
              <div className="mb-[10px]">
                <div className="flex items-center justify-between">
                  <p className='text-white text-[20px] leading-[25px] font-normal capitalize'>R&D And Product Development</p>
                  <p className='text-white text-[20px] leading-[25px] font-normal capitalize'>100%</p>
                </div>
                <div className=" border-[2px] border-white  mt-2"><div className="h-2 my-[3px] mx-[5px] bg-white"></div></div>
              </div>
            </div>
            <div className="mx-[15px]">
              <div className="bg-[#e9874c] pr-[15px] pl-[30px] py-[30px] max-w-[300px]">
                <div className="flex items-center">
                  <i class="fa-solid fa-users text-white text-[65px]"></i>
                  <div className="ml-[20px]">
                    <h2 className='text-[45px] leading-[50px] font-semibold text-white'>
                      <CountUp start={0} end={40} enableScrollSpy /> +
                    </h2>
                    <p className='text-[17px] leading-[26px] text-white font-normal'>Happy Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;