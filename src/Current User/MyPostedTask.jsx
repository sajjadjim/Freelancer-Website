import React, { use, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { BiDoughnutChart } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router';
import { AuthContext_File } from '../Authcontext/AuthProvider';
import { useState } from 'react';
const MyPostedTask = () => {

    const { user } = use(AuthContext_File)

    useEffect(() => {
        document.title = "My Posted Task"
    }, [])

    const userTask = useLoaderData()
    const currentUserTask = userTask.filter(task => task.email === user?.email)
    const [deleteTask, setAfterDeleteTask] = useState(currentUserTask)

    const handleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // Delete Here the task 
                fetch(`https://frelancer-server.vercel.app/tasks/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Task has been deleted.",
                                icon: "success"
                            });
                            const remainingTasks = deleteTask.filter(task => task._id !== id);
                            setAfterDeleteTask(remainingTasks);
                        }
                    })

            }
        });
    }
    return (
        <div className='max-w-7xl min-h-screen mx-auto mt-20'>
            <h1 className='text-center text-2xl md:my-10'>Current Active Email : <span className='font-bold'>{user.email}</span></h1>
            <div className="overflow-x-auto">
                <table className="table w-full bg-base-100 sh</div>adow-sm">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Name</th>
                            <th>Budget</th>
                            <th>Email</th>
                            <th>Description</th>
                            <th>Deadline</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            deleteTask.map(task => <tr>
                                <td>
                                    <span className="badge badge-xs badge-warning">{task.category}</span>
                                </td>
                                <td className="font-bold">{task.name}</td>
                                <td>${task.budget}</td>
                                <td>{task.email}</td>
                                <td>{task.description}</td>
                                <td>{task.deadline}</td>
                                <td className="flex gap-5">
                                    <MdDelete onClick={() => handleDeleteTask(task._id)} className="w-6 h-6 text-red-500 cursor-pointer" />
                                    <Link to={`/updateTask/${task._id}`}>
                                        <FaPen className="w-5 h-5 text-green-500 cursor-pointer" />
                                    </Link>
                                    <BiDoughnutChart className="w-5 h-5 text-yellow-500 cursor-pointer" />{task.newCount} Bids
                                    <button className="btn btn-xs btn-primary ml-2">
                                        More
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPostedTask;