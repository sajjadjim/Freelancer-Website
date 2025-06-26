import React from 'react';
import Navbar from '../Navbar and Footer/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Navbar and Footer/Footer';

const MainLayout = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Navbar />
            </div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;