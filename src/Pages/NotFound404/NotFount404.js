import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const NotFund404 = () => {
    useTitle('404 Not Found')
    return (
        <div className='text-center my-14'>
            <img className='w-2/4 mx-auto' src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" alt="" srcset="" />
            <p className='text-[26px] leading-[29px] my-4'>404 Page Not Found</p>
            <Link to='/'>
                <button className='btn bg-[#cca500] hover:bg-transparent text-white hover:text-[#cca500] border hover:border-[#cca500] border-[#cca500]   capitalize text-[26px] font-normal'><FaArrowCircleLeft className='mr-4'/>Go Home</button>
            </Link>
        </div>
    );
};

export default NotFund404;