import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <div>
            <Navbar></Navbar>
            </div>
            <div className='w-4/5 mx-auto'>
            <Outlet></Outlet>

            </div>
        </div>
    );
};

export default MainLayout;