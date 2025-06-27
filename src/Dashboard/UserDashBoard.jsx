import React, { useEffect } from 'react';
import { Outlet } from 'react-router';

const UserDashBoard = () => {
    useEffect(()=>{
        document.title = "Freelancer | User Dashboard";
    })
    return (
        <div>
           <Outlet></Outlet> 
        </div>
    );
};

export default UserDashBoard;