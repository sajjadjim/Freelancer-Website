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
    // State for sorting
    const [sortType, setSortType] = React.useState('deadline-asc');
    const [sortedTasks, setSortedTasks] = React.useState([]);

    useEffect(() => {
        let tasks = [...allTask];
        if (sortType === 'deadline-asc') {
            tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
        } else if (sortType === 'deadline-desc') {
            tasks.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
        } else if (sortType === 'budget-asc') {
            tasks.sort((a, b) => Number(a.budget || a.price || 0) - Number(b.budget || b.price || 0));
        } else if (sortType === 'budget-desc') {
            tasks.sort((a, b) => Number(b.budget || b.price || 0) - Number(a.budget || a.price || 0));
        }
        setSortedTasks(tasks);
    }, [allTask, sortType]);

    return (
        <div>
            <h1 className='text-center text-4xl font-bold my-5'>All Task List</h1>
            <p className='text-center my-4 '>
                Browse a variety of freelancer tasks posted by clients. Find opportunities that match your skills and interests, and apply to get started on your next project!
            </p>
            <div className="flex justify-center text-gray-500 gap-4 my-4">
                <label>
                    <span className="mr-2">Sort by:</span>
                    <select
                        className="border rounded px-2 py-1"
                        value={sortType}
                        onChange={e => setSortType(e.target.value)}
                    >
                        <option value="deadline-asc">Deadline Ascending</option>
                        <option value="deadline-desc">Deadline Descending</option>
                        <option value="budget-asc">Budget Ascending</option>
                        <option value="budget-desc">Budget Descending</option>
                    </select>
                </label>
            </div>
            <div className='md:mx-20 mx-2 my-5 md:my-20 grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-2'>
                {
                    sortedTasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
                }
            </div>
        </div>
    );
};

export default BrowseTask;