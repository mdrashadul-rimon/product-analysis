import React, { useEffect, useState } from 'react';
import './ReviewDetails.css';

const ReviewDetails = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch(`reviewData.json`)
            .then(res => res.json())
            .then(data => setReview(data));
    }, [])
    return (
        <div className='md:container md:mx-auto grid md:grid-cols-3 grid-cols-1 gap-4 my-8'>
            
            {
                review.slice(0,3).map(reviews =>

                    <div className=" bg-gray-200 antialiased rounded-lg text-gray-900">
                        <div>
                            <img src={reviews.image} alt="" className="w-full object-cover object-center rounded-lg shadow-md" />

                            <div className="relative px-4 -mt-16  ">
                                <div className="bg-white p-6 rounded-lg shadow-lg">
                                    <div className="flex items-baseline">
                                        <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                            New
                                        </span>

                                    </div>

                                    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{reviews.name}</h4>

                                    <div className="mt-4">
                                        <span className="text-teal-600 text-md font-semibold">Ratings: {reviews.ratings}/5 </span>
                                        <span className="text-sm text-gray-600">(based on {review.length} ratings)</span>
                                    </div>
                                    <div>
                                        <span className="bg-indigo-100 text-teal-800 my-2 text-sm p-2 inline-block rounded-lg  tracking-wide">
                                            {reviews.words}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div> 
                    </div>
                  

                )
            }
        </div>
    );
};

export default ReviewDetails;