import React from 'react';
import { useLoaderData } from 'react-router';
import { BiDoughnutChart } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from 'react-router';
import { useEffect } from 'react';


const BidsCount = () => {
    const { name, budget, category, deadline, description, email, username, _id, newCount } = useLoaderData()
    const [bidCount, setBidCount] = React.useState(0);
    const [dataBaseBids, setDataBaseBids] = React.useState(0);

    // Dat Teken The Curent User Bid Count From the Database
    useEffect(() => {
        fetch(`https://frelancer-server.vercel.app/tasks/${_id}`)
            .then(res => res.json())
            .then(data => {
                setDataBaseBids(data.newCount);
            });
    }, [_id]);
    // console.log("Database Bids Print", dataBaseBids)


    const handleBidClick = () => {
        const newCount = bidCount + 1;
        setBidCount(newCount);
        const setDatabase = newCount + dataBaseBids;
        const newBidCount = { newCount: setDatabase };
        // console.log("object", newBidCount)
        fetch(`https://frelancer-server.vercel.app/tasks/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBidCount)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    setBidCount(newCount);
                    toast("🦄Bid Count !!!");
                }
            })
    };

    return (
        <div className="card w-10/13 bg-base-100 shadow-sm mx-auto md:my-20">
            <ToastContainer />
            <Link to='/browseTask' className='flex items-center'><IoArrowBackCircleOutline className='h-10 w-auto text-green-900' /><p className='grid'>Back to <span className='font-bold'>Browse Task</span></p></Link>

            <div className="card-body">
                <span className="badge badge-xs badge-warning">{category}</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">${budget}</span>
                </div>

                <div className='flex justify-between'>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Email : <span className='font-bold'>{email}</span> </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Username : {username}</span>
                        </li>
                        <li>
                            <span>Deadline Date : {deadline}</span>
                        </li>
                        <li>
                            <p>Description : {description}</p>
                        </li>
                        <li>
                            <p>Totall Numbers of Bids User : <span className='font-bold text-red-500'>{newCount}</span></p>
                        </li>
                        <li>
                            <button
                                className='btn text-white bg-[#3a6d55] hover:text-[#3a6d55] hover:bg-white hover:border-[#3a6d55]'
                                onClick={() => window.location.reload()}
                            >
                                Letest Totall Bids
                            </button>
                        </li>
                    </ul>
                    <div>
                        <button
                            className='flex gap-1 mb-5 items-center'
                            onClick={handleBidClick}
                        >
                            <BiDoughnutChart className='w-6 h-6 text-yellow-500 cursor-pointer' />
                            Bids
                        </button>
                        <p>Bids add now: {bidCount} </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BidsCount;