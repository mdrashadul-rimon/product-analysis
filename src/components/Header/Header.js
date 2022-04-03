import { MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav className='bg-gray-500'>
                <div onClick={() => setOpen(!open)} className='w-9 h-9 md:hidden'>
                    {open ? <XIcon></XIcon> :
                        <MenuIcon></MenuIcon>}
                </div>
            </nav>
            <ul className={`md:flex justify-center py-4 gap-5 absolute duration-500 ease-in bg-indigo-500 w-full md:static text-white ${open ? 'top-9' : 'top-[-180px]'}`}>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/blog">Blogs</CustomLink>
                <CustomLink to="/review">Review</CustomLink>
                <CustomLink to="/mylinechart">Dashboard</CustomLink>
                <CustomLink to="/register">Register</CustomLink>
            </ul>
        </div >

    );
};

export default Header;