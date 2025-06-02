import React from 'react';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 text-white p-6">
                <h1 className="text-9xl font-extrabold">404</h1>
                <p className="text-2xl mt-4">Oops! Page not found.</p>
                <p className="text-md mt-2 mb-6 text-white/80">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>
                <Link
                    to="/"
                    className="bg-white text-purple-700 px-6 py-2 rounded-full text-lg font-medium hover:bg-purple-100 transition"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default Error;