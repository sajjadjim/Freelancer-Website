
import React from 'react';
import { Link } from 'react-router';

const DetailsPicture5 = () => {
    return (
        <div>
            <img
                src="https://plus.unsplash.com/premium_photo-1716603741224-d0c67609a5f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full max-w-md h-auto rounded-lg mx-auto"
                width={400}
                height={300}
            />
            <p className="mt-4  text-center">
                This picture features a stylish wristwatch placed on a wooden surface. The watch stands out with its elegant design and classic look, making it a timeless accessory for any occasion.
            </p>
            <div className='grid  justify-center mt-4'>
                <Link to='/' className='btn  text-white bg-[#3a6d55] hover:text-[#3a6d55] hover:bg-white hover:border-[#3a6d55]'>Homepage</Link>
            </div>
        </div>
    );
};

export default DetailsPicture5;