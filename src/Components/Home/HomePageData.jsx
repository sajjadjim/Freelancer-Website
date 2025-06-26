import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const HomePageData = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://frelancer-server.vercel.app/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);
    const newData = tasks.slice(0, 8);
    console.log(newData)
    return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
            <div className='md:mb-12 md:mt-10'>
                <p className='text-center'>Tasks some show !</p>
                <h2 className='text-center md:text-3xl font-bold '>Task Data</h2>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 gap-6 p-6 w-10/12 mx-auto'>
                {
                    newData.map((task) => <div
                        key={task._id}
                        className="relative bg-white/70 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-6 transition transform hover:-translate-y-2 hover:shadow-2xl duration-300"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 flex items-center">
                            {task.name}
                        </h3>

                        <p className="text-sm text-gray-700 mt-2">{task.category}</p>
                        <p className="text-sm text-gray-700 mt-2">{task.deadline}</p>
                        <Link to={`/tasks/${task._id}`} className='btn bg-[#3a6d55] text-white hover:text-[#3a6d55] hover:bg-white hover:border-[#3a6d55]'>Details</Link>
                    </div>)
                }
            </div>
        </motion.div>
    );
};

export default HomePageData;


// {
//     "name": "New Website Create",
//     "category": "Web Development",
//     "deadline": "2025-05-31",
// }