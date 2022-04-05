import React from 'react';
import img from "./dates.jpg";
import { Link } from 'react-router-dom';
import CustRev from '../CustRev/CustRev';


const Home = () => {
    
   
    return (
        <section className="md:container sm:container sm:mx-auto md:mx-auto">
            <div className='grid md:grid-cols-2 my-8 gap-5 items-center'>
                <div>
                    <h1 className='text-7xl font-bold text-red-400 text-left'>In this Ramadan</h1>
                    <h1 className='text-7xl font-bold text-indigo-500 text-left'>Dates on your Sahri</h1>
                    <p className='text-left'>High in Disease-Fighting Antioxidants. Dates have an excellent nutrition profile.</p>
                    <p className='text-lg text-indigo-300 text-left font-bold'>Easy to Add to Your Diet</p>
                    <Link to={'/register'} className='bg-red-300 hover:bg-red-400 px-12 text-white py-3 mt-4 rounded-lg mx-auto'>Buy Now</Link>
                </div>
                <div>
                    <img src={img} alt="Dates Image" className='object-cover rounded-xl' />
                </div>
            </div>
            <div className='mb-10'>
                <h2 className='text-4xl font-bold text-red-400'>Customer Reviews(3)</h2>
                <CustRev></CustRev>
                <Link to={'/detailrev'} className='my-4 py-3 px-6 bg-red-400 hover:bg-red-500 rounded-lg'>Show All Review</Link>
            </div>

        </section>

    );
};

export default Home;