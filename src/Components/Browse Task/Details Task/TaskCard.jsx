import React from 'react';
import { BiDoughnutChart } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Swal from 'sweetalert2';
import { Link } from 'react-router';
const TaskCard = ({ task }) => {
  const { name, budget, category, deadline, description, newCount } = task;

  // allert the Delete Permission Taken From the Database 

  return (
    <div>
      <div className="card w-auto bg-base-100 border-1 border-white shadow-sm">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">{category}</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl">${budget}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              {/* Username : <span>{username}</span> */}
            </li>
            {/* <li>
              Email address : <span>{email}</span>
            </li> */}
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Description: <span>{description}</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Deadline :<span> {deadline}</span>
            </li>
          </ul>
          <div className='flex items-center gap-1'>
            <BiDoughnutChart className='w-6 h-6 text-yellow-500 cursor-pointer' /> Bids : {newCount}
          </div>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">
              <Link to={`/tasks/${task._id}`}>
                More Details
              </Link>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TaskCard;

