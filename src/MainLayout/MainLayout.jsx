import React from 'react';
import Navbar from '../Navbar and Footer/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Navbar and Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;