import logo from '../../logo.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import './Header.css'
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='header-container flex justify-between items-center my-4'>
            <div className='header-nav'>
                <nav className='font-bold'>
                    <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
                        {
                            open ? <XMarkIcon /> : <Bars3Icon />
                        }

                    </div>
                    <div className={`sm:bg-purple-200 w-full md:flex justify-center absolute md:static duration-500 ease-in-out ${open ? 'top-6' : 'top-[-120px]'}`}>
                        <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/quizes'>Quizes</NavLink>
                        <NavLink to='/statistics'>Statistics</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                    </div>
                </nav>
            </div>
            <div className='header-logo'>
                <NavLink to='/'><img src={logo} alt="" /></NavLink>
            </div>
        </div>
    );
};

export default Header;