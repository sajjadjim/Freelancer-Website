import React from 'react';
import Navbar from '../Navbar and Footer/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Navbar and Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;