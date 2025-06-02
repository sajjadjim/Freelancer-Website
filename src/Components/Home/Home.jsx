import React, { useEffect } from 'react';
import Carousel from './Home Carousel/Carousel';
import Exclusivefeature from './Exclusive feature';
import { Typewriter } from 'react-simple-typewriter';
import NewsPicture from './NewsPicture';
import { Link } from 'react-router';
import ReviewSection from './ReviewSection';

const Home = () => {
    useEffect(() => {
        document.title = 'Home'
    })
    return (
        <div>
            <Carousel></Carousel>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://media.istockphoto.com/id/1213495447/photo/work-from-home-people-making-video-conference-with-colleague-via-laptop-computer-during-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=AkBkOdBRbwyDhmdl83WIbLwJC_620uCZU9A1syeTWRk="
                        className="md:max-w-2xl rounded-lg shadow-2xl"
                    />
                    <div>

                        <h1 className="md:text-5xl font-bold">Freelancer Task <span style={{ fontWeight: 'bold', marginTop: '50px', textAlign: 'center' }}>
                            <span>
                                {' '}
                                <span style={{ color: 'blue' }}>
                                    <Typewriter
                                        words={['AddTask', 'Update Task', 'Creator']}
                                        loop={0} // 0 = infinite loop
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={50}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    />
                                </span>
                            </span>
                        </span></h1>
                        <p className="py-6">
                            As a freelancer or entrepreneur, starting your business is like planting a seed. It takes plenty of time and money. Then you have to nurture it without knowing when the tree will finally take root and provide for you in return. It could be tough but when your gig starts to flourish, it makes all the hard work and dedication worth it.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Exclusivefeature></Exclusivefeature>
            <NewsPicture></NewsPicture>
            <div className='bg-amber-900  rounded-xl text-center py-10 w-10/12 mx-auto mt-10 mb-10'>
                <p className='md:text-7xl text-3xl text-white'>Freelance Task Marketplace <span className='text-shadow-purple-700'>Join Us</span></p>
                <p className='btn btn-ghost border-1 border-zinc-50 my-10 text-white hover:text-black'><Link to='/signup'>Sign Up</Link></p>
            </div>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;