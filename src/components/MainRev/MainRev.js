import React from 'react';
import './MainRev.css';

const MainRev = ({ mainrev }) => {
    const { name, ratings, image, words } = mainrev;
    return (
        <div>
            <div>
                <div className=" bg-gray-200 antialiased rounded-lg text-gray-900">
                    <div>
                        <img src={image} alt="" className="w-full object-cover object-center rounded-lg shadow-md" />

                        <div className="relative px-4 -mt-16  ">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-baseline">
                                    <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                        New
                                    </span>

                                </div>

                                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>

                                <div className="mt-4">
                                    <span className="text-teal-600 text-md font-semibold">Ratings: {ratings}/5 </span>
                                </div>
                                <div>
                                    <span className="bg-indigo-100 text-teal-800 my-2 text-sm p-2 inline-block rounded-lg  tracking-wide">
                                        {words}
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainRev;