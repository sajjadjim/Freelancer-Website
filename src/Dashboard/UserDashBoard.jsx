import React from 'react';
import { Outlet } from 'react-router';

const UserDashBoard = () => {
    return (
        <div>
           <Outlet></Outlet> 
        </div>
    );
};

export default UserDashBoard;