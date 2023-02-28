import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    useTitle('My Reviews')
    useEffect(() => {
        fetch(`https://photographer-shohanur-server-dvsrshohan.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])
    const handelDeleteReview = review => {
        const agree = window.confirm(`Are You Sure You Want to Delete}`);
        if (agree) {
            fetch(`https://photographer-shohanur-server-dvsrshohan.vercel.app/review/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Review Successfully')
                        const remainingReview = reviews.filter(rev => rev._id !== review._id);
                        setReviews(remainingReview);
                    }
                })
        }
    }
    // const handelUpdateReview = (event , reviewId) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const rating = form.rating.value;
    //     const reviews = form.reviews.value;

    //     const review = {
    //         rating,
    //         reviews,
    //     }
    //     fetch(`https://photographer-shohanur-server-dvsrshohan.vercel.app/review/${reviewId}`, {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(review)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 alert('App Updated Successfully')
    //             }
    //         })
    //         .catch(error => console.error(error))

    //     event.target.reset();
    // }
    return (
        <div className='container my-24'>
            <h2 className='text-4xl text-center font-bold my-4'>You have  { reviews.length} Reviews</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {
                reviews.map(review => 
                        <div className="card bg-base-100 m-4 shadow-xl flex">

                            <div className="card-body grid auto-cols-auto	">
                            <div className="flex items-center">
                                <img className='mask mask-circle mr-6' src={review?.photoURL} alt="" srcSet="" />
                                <div>
                                    <h2 className="card-title">{review.email}</h2>
                                    <h2 className="text-2xl text-yellow-500 font-bold flex">{review.rating} <FaStar /></h2>
                                </div>
                                </div>
                                    <p className='text-xl my-3'>{review.reviews}</p>
                                <div className="flex items-start justify-end">
                                    <button onClick={() => handelDeleteReview(review)} className="text-2xl  mr-3">
                                        <FaTrash className='text-red-600' />
                                    </button>
                                    <Link to={`/update-review/${review._id}`}>
                                        <button className="text-2xl  mr-2"><FaEdit /></button>
                                    </Link>
                                </div>

                                <input type="checkbox" id="my-modal" className="modal-toggle" />
                                <div className="modal">
                                    <div className="modal-box">
                                        {/* <UpdateReview key={review._id} review={review}></UpdateReview> */}

                                        <div className="modal-action">
                                            <label htmlFor="my-modal" className="btn">Yay!</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
            </div>
        </div>
    );
};

export default MyReview;