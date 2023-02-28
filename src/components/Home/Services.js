import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';

const Services = () => {
    const service = useLoaderData();
    const [services, setServices] = useState(service)

    const handleShowAllServices = () => {
        fetch('https://photographer-shohanur-server-dvsrshohan.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }
    // event.target.reset();
    console.log(service);
    return (
        <div className=" bg-slate-200 my-[60px]">
            <div className="container mx-auto py-7">
                <h2 className="text-[60px] font-normal text-center py-6">Our Services</h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
                    {
                        services.map(service => 
                            <div key={service._id} data-aos="zoom-in-up" data-aos-duration="2000" className="card card-compact m-2 p-2 bg-base-100 shadow-xl">
                                <figure>
                                    <PhotoProvider>
                                        <PhotoView src={service.thumbnailImg} >
                                            <img className='w-full h-80' src={service.thumbnailImg} alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </figure>
                            <div className="card-body">
                                    <h2 className="card-title font-normal text-[26px] leading-[29px]">{service.serviceName}</h2>
                                    <p className='text-xl font-semibold text-red-500'>৳ {service.servicePrice }</p>
                                    <p className='text-xl font-semibold flex'>
                                        <span className='text-[26px]'>5</span>
                                        <FaStar className='text-[#DEBA27FF]'/>
                                        <FaStar className='text-[#DEBA27FF]'/>
                                        <FaStar className='text-[#DEBA27FF]'/>
                                        <FaStar className='text-[#DEBA27FF]'/>
                                        <FaStar className='text-[#DEBA27FF]'/>
                                    </p>
                                    <p className=''>{service.description.slice(0,100)}...</p>
                                <div className="card-actions justify-end">
                                        <Link className='w-full' to={`/service/${service._id}`}>
                                            <button className="btn hover:bg-[#deba27] bg-transparent hover:border-[#deba27] border-[#deba27] font-normal text-[20px] w-full capitalize hover:text-white text-[#deba27] mt-8">Details</button>
                                        </Link>
                                </div>
                            </div>
                            </div>
                        )
                    }
                </div>
                <div className="text-center my-4">
                    <button disabled={services.length > 3} onClick={handleShowAllServices} className='btn bg-[#deba27] hover:bg-transparent hover:border-[#deba27] border-[#deba27] font-normal text-[20px] capitalize text-white hover:text-[#deba27] px-[46px] rounded-[4px]'>Show All</button>
                </div>
           </div>
        </div>
    );
};

export default Services;