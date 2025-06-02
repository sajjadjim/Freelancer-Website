import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import TaskCard from './Details Task/TaskCard';
import { MdDelete } from "react-icons/md";

const BrowseTask = () => {
    useEffect(() => {
        document.title = "Browse Task"
    }, [])
    
    const allTask = useLoaderData()
    // console.log(allTask)
    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-5'>All Task List</h1>
           <p className='text-center opacity-70'>Totall number of task : {allTask.length}</p>
            <div className='md:mx-20 mx-2 my-5 md:my-20 grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-2'>
                {
                    allTask.map(task=><TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default BrowseTask;