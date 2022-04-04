import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className="page_404">
            <div className="md:container">
                
                    <div className="grid grid-cols-1 ">
                        <div className="text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text-center ">404</h1>
                            </div>

                            <div className="contant_box_404">
                                <h3 className="h2">Look like you're lost</h3>
                                <p>the page you are looking for not available!</p>
                                <Link to={'/'} className='link_404'>Go Back Home</Link>
                            </div>
                        </div>
                    </div>
                
            </div>
        </section>
    );
};

export default NotFound;