import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AddServices = () => {
    useTitle('Add New Service')
    const [service, setService] = useState([]);
    const AddServices = event => {
        event.preventDefault();
        const form = event.target;
        const thumbnailImg = form.thumbnailImg.value;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const description = form.description.value;

        const service = {
            thumbnailImg,
            serviceName,
            servicePrice,
            description
        }
        console.log(service);
        fetch('https://photographer-shohanur-server-dvsrshohan.vercel.app/service', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                const newService = [...service, data];
                setService(newService)
            })
            .catch(error => console.error(error))

        event.target.reset();
        console.log(service);
    }
    return (
        <div className='container mx-auto my-24 shadow-2xl card p-12'>
            <div className="">
                <h2 className='text-[60px] text-center mb-5'>Add New Service</h2>
            </div>
            <form onSubmit={AddServices}>
                <div data-aos="zoom-in-up" data-aos-duration="2000" className="grid lg:grid-cols-2 grid-cols-1 gap-3">
                    <div className="mb-6">
                        <label className="label">
                            <span className="label-text text-lg">Thumbnail Image URL</span>
                        </label>
                        <input type='url' name='thumbnailImg' className="input input-bordered input-warning w-full" placeholder="Thumbnail Image URL" required />
                    </div>
                    <div className="mb-6">
                        <label className="label">
                            <span className="label-text text-lg">Service Name</span>
                        </label>
                        <input type='text' name='serviceName' className="input input-bordered input-warning w-full" placeholder="Service Name" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="label">
                        <span className="label-text text-lg">Service Price</span>
                    </label>
                    <input type='text' name='servicePrice' className="input input-bordered input-warning w-full" placeholder="Service Price" required />
                </div>
                <div className="mb-6">
                    <label className="label">
                        <span className="label-text text-lg">Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered textarea-warning w-full textarea-sm h-48 text-lg" placeholder="Description" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#cca500] hover:bg-transparent text-white hover:text-[#cca500] border hover:border-[#cca500] border-[#cca500]   capitalize text-[26px] font-normal">Add New Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddServices;