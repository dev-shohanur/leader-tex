import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItem = <> {
        user?.uid ?
            <>
                <li className='text-[20px] font-normal'><NavLink to='/'>Home</NavLink></li>
                <li className='text-[20px] font-normal'><NavLink to='/my-reviews'>My Reviews</NavLink></li>
                <li className='text-[20px] font-normal'><NavLink to='/add-services'>Add Service</NavLink></li>
                <li className='text-[20px] font-normal'><NavLink to='/blog'>Blog</NavLink></li>
            </>
            :
            <>
                <li className='text-[20px] font-normal'><Link to='/'>Home</Link></li>
                <li className='text-[20px] font-normal'><Link to='/blog'>Blog</Link></li>
            </>


    }
    </>
    // const privetRouteNaveItems = <>

    // </>
    return (
        <>
            {/* <div className="navbar bg-base-100 shadow-md">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                            {user?.uid ?
                                <>
                                    <h3 className=" mr-3">{user.displayName}</h3>
                                    <button onClick={logOut} className="btn btn-primary">Sign Out</button>
                                </>
                                :
                                <>
                                    <Link to='/login'>
                                        <button className="btn btn-outline btn-warning mr-4">Sign In</button>
                                    </Link>

                                    <Link to='/registration'>
                                        <button className="btn  hover:btn-outline btn-warning">Sign Up</button>
                                    </Link>
                                </>

                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">PhotoGrapher Shohanur</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="hidden sm:block">
                        {user?.uid ?
                            <>
                                <div className="flex items-center">
                                    <h3 className=" mr-3">
                                        {
                                            user?.displayName
                                        }
                                    </h3>
                                    <button onClick={logOut} className="btn btn-primary">Sign Out</button>
                                </div>
                            </>
                            :
                            <>
                                <Link to='/login'>
                                    <button className="btn btn-outline btn-warning hover:text-white mr-4">Sign In</button>
                                </Link>

                                <Link to='/registration'>
                                    <button className="btn  hover:btn-outline bg-warning">Sign Up</button>
                                </Link>
                            </>

                        }
                    </div>
                </div>
            </div> */}

            <section className="bg-[#222429] ">
                <div className="container text-white">
                    <div className="lg:block hidden">
                        <div className=" grid lg:grid-cols-2 grid-cols-1 items-center" style={{ borderBottom: '2px solid rgb(255 255 255 / 8%)' }}>
                            <div className="flex items-center">
                                <i class="fa-solid fa-thumbtack text-[14px] leading-[46px] text-[#cca500] mr-2"></i>
                                <p className='text-[#ffffff99] text-[14px] font-normal leading-[50px]'> Your Trusted Manufacturer and Exporter</p>
                            </div>
                            <div className="flex items-center justify-end">
                                <i class="fa-regular fa-clock text-[14px] leading-[46px] text-[#cca500] mr-2"></i>
                                <p className='text-[#ffffff99] text-[14px] font-normal leading-[24px] pr-3' style={{ borderRight: '1px solid rgb(255 255 255 / 8%)' }}> Always Open</p>
                                <p className='text-[#ffffff99] text-[14px] font-normal leading-[24px] ml-3'> Follow us:</p>
                                <ul className='flex'>
                                    <li className='mx-2'><a href="/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li className='mx-2'><a href="/"><i className="fa-brands fa-instagram"></i></a></li>
                                    <li className='mx-2'><a href="/"><i className="fa-brands fa-facebook-f"></i></a></li>
                                    <li className='mx-2'><a href="/"><i className="fa-brands fa-twitter"></i></a></li>
                                    <li className='mx-2'><a href="/"><i className="fa-brands fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="navbar sticky">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[999999]">
                                    {navItem}

                                    {user?.uid ?
                                        <>
                                            <div className="flex items-center">
                                                <h3 className=" mr-3 text-white">
                                                    {
                                                        user?.displayName
                                                    }
                                                </h3>
                                                <button onClick={logOut} className="btn hover:bg-[#cca500] bg-transparent hover:text-white text-[#cca500] border border-[#cca500] px-8 py-4 mr-4">Sign Out</button>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'>
                                                <button className="btn hover:bg-[#cca500] bg-transparent hover:text-white text-[#cca500] border border-[#cca500] px-8 py-4 mr-4">Sign In</button>
                                            </Link>

                                            <Link to='/registration'>
                                                <button className="btn bg-[#cca500] hover:bg-transparent text-white hover:text-[#cca500] border hover:border-[#cca500] px-8 py-4">Sign Up</button>
                                            </Link>
                                        </>

                                    }
                                </ul>
                            </div>
                            <a className="flex items-center pr-3 border-y-0 border-l-0 normal-case text-xl border border-r-[1px] before:contents-['|']" style={{ borderRight: '1px solid rgb(255 255 255 / 8%)' }}>
                                <img className='max-w-full h-auto w-[60px]' src="https://www.warptexbd.com/image/logo/footer-logo.png" alt="" srcset="" />
                                <span className='text-[#cca500] text-[32px] font-semibold uppercase'>
                                    leadertex
                                </span>
                            </a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navItem}

                                {user?.uid ?
                                    <>
                                        <div className="flex items-center">
                                            <h3 className=" mr-3 text-white">
                                                {
                                                    user?.displayName
                                                }
                                            </h3>
                                            <button onClick={logOut} className="btn hover:bg-[#cca500] bg-transparent hover:text-white text-[#cca500] border border-[#cca500] px-8 py-4 mr-4">Sign Out</button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>
                                            <button className="btn hover:bg-[#cca500] bg-transparent hover:text-white text-[#cca500] border border-[#cca500] px-8 py-4 mr-4">Sign In</button>
                                        </Link>

                                        <Link to='/registration'>
                                            <button className="btn bg-[#cca500] hover:bg-transparent text-white hover:text-[#cca500] border hover:border-[#cca500] px-8 py-4">Sign Up</button>
                                        </Link>
                                    </>

                                }
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a style={{ borderRight: '1px solid rgb(255 255 255 / 8%)' }}><i className="fa-solid fa-location-dot h-[45px] w-[45px] text-[30px] text-center leading-[45px] mr-[10px] text-[#deba27]"></i></a>
                            <a><i className="fa-regular fa-comment-dots h-[45px] w-[45px] text-[30px] ml-[10px] text-center leading-[45px] mr-[10px] text-[#deba27]"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;