import React, { use, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext_File } from '../../Authcontext/AuthProvider';

const AddTask = () => {
    const { user } = use(AuthContext_File);
    const [dbUser, setDbUser] = useState([])

    useEffect(() => {
        document.title = "Add Task";
    }
    )

    // New Task Add here code 
    const handleTaskAddNew = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const taskData = Object.fromEntries(formData.entries());

        // Include dynamic user info in task data
        taskData.username = user.username;
        taskData.email = user.email;
        // console.log(taskData);

        fetch('https://frelancer-server.vercel.app/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(taskData),
        })
            .then(res => res.json()
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "New Task Add successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    }
                })
            );
        form.reset();
    };

    // If the user Login in the Email and password that user Name identity for Code Here 
    // Filter Data From the Database From  userDatabase Information  Show the name
    useEffect(() => {
        fetch('https://frelancer-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setDbUser(data);
            })
    }, []);
    const currentUser = dbUser.filter(db => db.email === user?.email)
    const displayName =
        user.displayName ||
        (currentUser.length > 0 && currentUser[0].name) ||
        "Database Loading...";


    return (
        <div className='max-w-7xl mx-auto'>
            <form onSubmit={handleTaskAddNew}>
                <div className='bg-[#F4F3F0] grid justify-center p-10 my-[100px] rounded-lg'>
                    <h1 className='text-[#374151] rancho-fontm font-bold text-4xl text-center px-20'>Add Task</h1>
                    <p className='opacity-60 text-center text-black md:mb-10 mb-4'>
                        Fill the form to add a new task. This Task Will be add your profile and you can manage it later.Everyone can your task and you can update it later.Everybody can bids Your task and you can select the best one for your task.
                    </p>
                    <p className='text-center text-black'>{`"✅${user.email}"`}</p>
                    <div className='grid md:grid-cols-2 grid-cols-1 mt-[32px] gap-2'>
                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label text-black">Task Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Enter task name" required />
                        </fieldset>

                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label">Category</label>
                            <select name='category' className="input w-full" required>
                                <option value="">Select category</option>
                                <option value="Web Development">Web Development</option>
                                <option value="design">Design</option>
                                <option value="writting">Writing</option>
                                <option value="mrketing">Marketing</option>
                            </select>
                        </fieldset>

                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label text-black">Budget $</label>
                            <input type="number" name='budget' className="input w-full" placeholder="Enter Budget" />
                        </fieldset>

                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label text-black">Deadline</label>
                            <input type="date" name='deadline' className="input w-full" required />
                        </fieldset>

                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label text-black">User Name</label>
                            <input
                                type="text"
                                name='username'
                                className="input w-full text-black bg-gray-100"
                                value={displayName}
                                readOnly
                            />
                        </fieldset>

                        <fieldset className="border border-base-300 rounded-box w-full p-4">
                            <label className="label text-black">User Email</label>
                            <input
                                type="email"
                                name='email'
                                className="input w-full text-black bg-gray-100"
                                value={user.email}
                                readOnly
                            />
                        </fieldset>
                    </div>

                    <fieldset className="border border-base-300 rounded-box w-full p-4 mt-4">
                        <label className="label text-black">Description</label>
                        <input type="text" name='description' className="input w-full" placeholder="Enter Description" />
                    </fieldset>

                    <button type="submit" className='btn bg-[#D2B48C] text-white rancho-font mt-4'>Add Task</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;
