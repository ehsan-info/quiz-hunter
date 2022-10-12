import logo from '../../logo.png';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container flex justify-between items-center'>
            <div className='header-nav'>
                <nav className='font-bold'>
                    <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/quizes'>Quizes</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </nav>
            </div>
            <div className='header-logo'>
                <NavLink to='/'><img src={logo} alt="" /></NavLink>
            </div>
        </div>
    );
};

export default Header;