import React, { useEffect } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
const UpdateTask = () => {
    const { name, category, budget, deadline, description, _id } = useLoaderData()

    useEffect(() => {
        document.title = "Update Task"
    }, [])

    const handleUpdateTask = (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const updateTask = Object.fromEntries(formData.entries())
        console.log("Update Task", updateTask)
        fetch(`https://frelancer-server.vercel.app/tasks/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTask)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("Update after Data ", data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Task updated successfully Done ",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <form onSubmit={handleUpdateTask}>
                <div className='bg-[#F4F3F0] grid justify-center p-10 my-[100px] rounded-lg'>
                    <Link to='/myPostedTask'><IoMdArrowRoundBack className='bg-white rounded-full h-8 w-auto'></IoMdArrowRoundBack></Link>
                    <h1 className='text-[#374151] rancho-font text-4xl text-center px-20'>Update Task</h1>
                    <p className='opacity-60 text-center'>
                        The steps listed in this article will be updated soon to reflect the new Microsoft Planner experience, which is currently rolling out to customers. Learn more about the new Planner in Frequently asked questions about Planner.
                    </p>
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-[32px] gap-2'>
                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label">Task Name</label>
                            <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Enter task name" required />
                        </fieldset>

                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label">Category</label>
                            <select name='category' defaultValue={category} className="input w-full" required>
                                <option value="">Select category</option>
                                <option value="Web Development">Web Development</option>
                                <option value="design">Design</option>
                                <option value="writting">Writing</option>
                                <option value="mrketing">Marketing</option>
                            </select>
                        </fieldset>

                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label">Budget</label>
                            <input type="text" defaultValue={budget} name='budget' className="input w-full" placeholder="Enter Budget" />
                        </fieldset>

                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label">Deadline</label>
                            <input type="date" defaultValue={deadline} name='deadline' className="input w-full" required />
                        </fieldset>
                    </div>

                    <fieldset className="border border-base-300 rounded-box w-full p-4 mt-4">
                        <label className="label">Description</label>
                        <input type="text" name='description' defaultValue={description} className="input w-full" placeholder="Enter Description" />
                    </fieldset>

                    <button type="submit" className='btn bg-[#D2B48C] text-white rancho-font mt-4'><Link to='/myPostedTask'>Update Task</Link></button>
                </div>
            </form>
        </div>
    );
};

export default UpdateTask;
