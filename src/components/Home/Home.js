import React from 'react';
import img from "./dates.jpg";

const Home = () => {

    return (
        <div className="md:container md:mx-auto">
            <div className='grid md:grid-cols-2 my-8 gap-5 items-center'>
                <div>
                    <h1 className='text-7xl font-bold text-red-400 text-left'>In this Ramadan</h1>
                    <h1 className='text-7xl font-bold text-indigo-500 text-left'>Dates on your Sahri</h1>
                </div>
                <div>
                    <img src={img} alt="Dates Image" className='object-cover rounded-xl' />
                </div>
            </div>
        </div>

    );
};

export default Home;