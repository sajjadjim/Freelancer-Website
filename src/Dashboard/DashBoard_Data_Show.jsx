import React, { useEffect, useState } from 'react';

const DashBoard_Data_Show = () => {
        const [tasks, setTasks] = useState([]);

        useEffect(() => {
            fetch('https://frelancer-server.vercel.app/tasks')
                .then(res => res.json())
                .then(data => setTasks(data.slice(0, 6)))
                .catch(err => console.error(err));
        }, []);

        console.log(tasks)
    return (
        <div>
            <div className="overflow-x-auto md:mx-10 mx-2 my-5">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Category</th>
        <th>Budget</th>
        <th>Deadline</th>
      </tr>
    </thead>
    <tbody>
 {
        tasks.map((task, index) => (
          <tr key={task._id}>
            <th>{index + 1}</th>
            <td>{task.name}</td>
            <td>{task.category}</td>
            <td>{task.budget}</td>
            <td>{task.deadline}</td>
          </tr>
        ))
 }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default DashBoard_Data_Show;