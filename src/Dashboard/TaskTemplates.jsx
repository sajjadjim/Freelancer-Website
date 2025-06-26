import React from "react";
import { FaPlus, FaEdit, FaGavel, FaEye } from "react-icons/fa";

const taskFeatures = [
  {
    title: "Add Task",
    description: "Create a new task for freelancers to work on.",
    icon: <FaPlus className="text-white" />,
    color: "bg-purple-500",
  },
  {
    title: "Update Task",
    description: "Edit task details or update task progress.",
    icon: <FaEdit className="text-white" />,
    color: "bg-blue-400",
    badge: "NEW",
  },
  {
    title: "Bid Task",
    description: "Place a bid on a task to get selected.",
    icon: <FaGavel className="text-white" />,
    color: "bg-pink-400",
  },
  {
    title: "Show Task",
    description: "View all available tasks on the platform.",
    icon: <FaEye className="text-white" />,
    color: "bg-indigo-400",
  },
];

const TaskTemplates = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Popular Actions</h2>
          <a href="#" className="text-purple-600 text-sm font-medium hover:underline">
            Explore All
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {taskFeatures.map((task, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition"
            >
              <div className={`w-10 h-10 flex items-center justify-center rounded-full ${task.color} mb-4`}>
                {task.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center">
                {task.title}
                {task.badge && (
                  <span className="ml-2 bg-black text-white text-xs px-2 py-0.5 rounded">
                    {task.badge}
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-600">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskTemplates;
