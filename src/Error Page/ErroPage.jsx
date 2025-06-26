import React from 'react';
import errorAnimation from '../../public/404Page.json';
import Lottie from 'lottie-react';

const ErroPage = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center  px-4 text-center">
            <Lottie className="w-full max-w-xl" animationData={errorAnimation} loop={true} />
            <h1 className="text-8xl font-bold tracking-widest m-0">404</h1>
            <h2 className="text-2xl font-medium mt-2 mb-5">Page Not Found</h2>
            <p className="text-lg mb-8 max-w-md">
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <a
                href="/"
                className="px-8 py-3 rounded-full bg-white text-red-500 font-bold shadow-md transition-colors duration-200 hover:bg-red-500 hover:text-white"
            >
                Go Home
            </a>
        </div>
    );
};

export default ErroPage;