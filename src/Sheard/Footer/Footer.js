import React from 'react';
import './Locations.css';
import './Footer.css';
// import logo from 'https://www.warptexbd.com/image/logo/footer-logo.png';
// import second1 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';
// import second2 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';
// import second3 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';
// import second4 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';
// import second5 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';
// import second6 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';
// import second7 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';
// import second8 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';
// import second9 from 'https://via.placeholder.com/70x70?text=70x70+b_thumbb-01.jpg';

const Footer = () => {
  return (
    <footer className=''>
      <div className="">
        <div style={{ boxShadow: 'rgb(43 52 59 / 10%) 0px 0px 10px 0px' }}
          className="flex items-center md:mb-[-100px] mb-0 z-[999] bg-white pt-[32px] pb-[40px] px-[45px] w-full md:w-[80%] mx-auto">
          <div className="w-5/12">
            <h4 className='uppercase text-[30px] leading-[29px] tracking-[3px] text-[#deba27] font-normal'>FOR BUSINESS COLLABORATION</h4>
            <h2 className='uppercase text-[3rem] leading-[60px] text-black font-medium'>FOR BUSINESS COLLABORATION</h2>
          </div>
          <div className="w-4/12 flex justify-center">
            <div>
              <h4 className=' capitalize text-[22px] leading-[30px] text-black font-medium'>Send An Email</h4>
              <h2 className='normal text-[26px] leading-[32px] text-[#deba27] font-medium'>
                <a href="mailto:Info@leadertexbd.Com">Info@leadertexbd.Com</a>
              </h2>
            </div>
          </div>
          <div className="w-3/12">
            <button className='btn rounded-none bg-transparent hover:bg-black border-[1px] border-black text-black hover:text-white'>GET INVOLVED NOW!</button>
          </div>
        </div>
      </div>
      <div className=" relative z-[-1]" style={{ backgroundImage: 'url(https://www.warptexbd.com/home-4/images/bg-image/footer-bg.png)', backgroundColor: '#222429' }}>
          <div className="pt-24">
            <div className='w-4/5 mx-auto mb-10'>
              <div className="grid gap-5 justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="first">
                  <div className="">
                    <div className="">
                      <h4 className='text-2xl font-medium text-white my-10 '>About Leadertex</h4>
                    </div>
                    <p className='text-lg text-slate-300 font-medium'>Warptex Bangladesh Limited is a leading multinational apparel buying hub, sourcing company, manufacturer and committed exporter on woven, denim, knit, sweater etc.</p>
                    <div className="location flex items-center gap-2 my-3">
                      <i className="fa-solid fa-location-dot text-white"></i>
                      <i class="fa-regular fa-envelope-open text-white"></i>
                      <i class="fa-solid fa-phone-volume text-white"></i>
                    </div>
                  </div>
                </div>
                <div className="second max-w-[280px]">
                  <div className="">
                    <h4 className='text-2xl font-medium text-white my-10'>Useful Links</h4>
                  </div>
                  <div className="grid lg:grid-cols-2 grid-cols-1">
                    <ul>
                      <li><a href="" className='nav-items flex items-center text-[16px] leading-[26px] text-[#ffffff99] hover:text-[#deba27]'><i class="fa-solid fa-angles-right duration-1000"></i> <p>Home</p></a></li>
                      <li><a href="" className='nav-items flex items-center text-[16px] leading-[26px] text-[#ffffff99] hover:text-[#deba27]'><i class="fa-solid fa-angles-right duration-1000"></i> <p>About Us</p></a></li>
                      <li><a href="" className='nav-items flex items-center text-[16px] leading-[26px] text-[#ffffff99] hover:text-[#deba27]'><i class="fa-solid fa-angles-right duration-1000"></i> <p>Products</p></a></li>
                      <li><a href="" className='nav-items flex items-center text-[16px] leading-[26px] text-[#ffffff99] hover:text-[#deba27]'><i class="fa-solid fa-angles-right duration-1000"></i> <p>Compliance & Ethics</p></a></li>
                    </ul>
                    <ul>
                      <li><a href="" className='nav-items flex items-center text-[16px] leading-[26px] text-[#ffffff99] hover:text-[#deba27]'><i class="fa-solid fa-angles-right duration-1000"></i> <p>FAQ</p></a></li>
                      <li><a href="" className='nav-items flex items-center text-[16px] leading-[26px] text-[#ffffff99] hover:text-[#deba27]'><i class="fa-solid fa-angles-right duration-1000"></i> <p>Services</p></a></li>
                      <li><a href="" className='nav-items flex items-center text-[16px] leading-[26px] text-[#ffffff99] hover:text-[#deba27]'><i class="fa-solid fa-angles-right duration-1000"></i> <p>Contact Us</p></a></li>
                    </ul>
                  </div>
                </div>
                <div className="fourth ml-3">
                  <div className="">
                    <h4 className='text-2xl font-medium text-white my-10'>Signup For Newsletter</h4>
                  </div>
                  <div>
                    <p className='text-lg text-slate-300 font-medium'>Signup to get news about Warptex Bangladesh Ltd. We don't spam!</p>\
                    <input type="text" placeholder="Type here" className="input input-warning my-4 rounded-none bg-transparent	" />

                    <br />

                    <button className='btn bg-[#deba27] hover:bg-white  hover:text-[#deba27]    rounded-none'>Subscrib</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center py-3 border-t-[1px] border-[#ff]">
              <div className="container flex items-center justify-between	">
                <p className='text-slate-300 text-md font-medium text-[15px] '>Copyright © 2023 <span className='font-bold text-[#deba27]'>Leadertex</span></p>
                <p className='text-slate-300 text-md font-medium text-[15px] '>
                  <i class="fa-solid fa-thumbtack text-[14px] leading-[46px] text-[#cca500] mr-2"></i>
                  House: 487, (3A) Road: 08, (East) Baridhara DOHS, Dhaka-1212, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;