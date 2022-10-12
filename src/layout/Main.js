import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='container max-w-screen-xl m-auto px-4'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;