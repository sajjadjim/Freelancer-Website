import React from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext_File } from "../Authcontext/AuthProvider";
import { use } from "react";
import { NavLink } from "react-router";
import DashBoard_Data_Show from "./DashBoard_Data_Show";
import TaskTemplates from "./TaskTemplates";

// Simple CountCard component for animated counting
const CountCard = ({ label, value, suffix, duration, className }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const end = typeof value === "number" ? value : 0;
    if (start === end) return;
    const incrementTime = Math.abs(Math.floor(duration / (end || 1)));
    let current = start;
    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <div className={`rounded-xl shadow-md p-8 text-white text-center ${className}`} style={{ width: "220px", height: "160px" }}>
      <p>{label}</p>
      <p className="text-3xl font-bold">{count} <span className="text-base font-normal">{suffix}</span></p>
    </div>
  );
};

const DURATION = 3000; // 4 seconds

const Dashboard = () => {
  const { user } = use(AuthContext_File)
  // console.log(user.email)

  const [users, setUser] = React.useState([]);
  const [totalNewCount, setTotallBids] = React.useState([]);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  // console.log(user)

  // console.log(users)
  React.useEffect(() => {
    fetch("https://frelancer-server.vercel.app/users")
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  const allTasks = useLoaderData()
  // Calculate the total newCount from all tasks
  React.useEffect(() => {
    fetch("https://frelancer-server.vercel.app/tasks/new/counts")
      .then(res => res.json())
      .then(data => {
        setTotallBids(data)
      })
      .catch(err => console.error("Error fetching users:", err));
  }, []);

  // Calculate the sum of all number values in totalNewCount array
  const totalBids = Array.isArray(totalNewCount)
    ? totalNewCount.reduce((sum, item) => sum + (typeof item === "number" ? item : 0), 0)
    : 0;



  return (
    <div className="flex flex-col min-h-screen">
      {/* Responsive Sidebar/Navbar and Main Content */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <nav className="w-full md:w-64 bg-gray-800 text-white flex-shrink-0">
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-700">
            <span className="text-2xl font-bold">Freelancer Dashboard</span>
            <button
              className="text-white focus:outline-none"
              onClick={() => setSidebarOpen(open => !open)}
              aria-label="Toggle sidebar"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Sidebar */}
          <div className={`md:block ${sidebarOpen ? "block" : "hidden"}`}>
            <div className="hidden md:block p-6 text-2xl font-bold border-b border-gray-700">
              Freelancer Dashboard
            </div>
            <ul className="mt-6 space-y-2">
              <li>
                <NavLink to='/userDashBoard'  className="block px-6 py-2 hover:bg-gray-700 rounded transition">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <Link to='/addTask'  className="block px-6 py-2 hover:bg-gray-700 rounded transition">
                  Add Task
                </Link>
              </li>
              <li>
                <Link to='/browseTask'  className="block px-6 py-2 hover:bg-gray-700 rounded transition">
                  Brows Tasks
                </Link>
              </li>
              <li>
                <Link to='/userInfo' className="block px-6 py-2 hover:bg-gray-700 rounded transition">
                  Profile
                </Link>
              </li>
              <li>
                <Link to='/' className="block px-6 py-2 hover:bg-gray-700 rounded transition">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="flex-1 p-4">
          <h1 className="text-3xl font-bold my-5">Welcome Back !</h1>
          <div>
            <div className="grid md:grid-cols-4 grid-cols-1 justify-items-center gap-4 ">
              <CountCard
                label="Current Users"
                value={users.length}
                suffix="People"
                duration={DURATION}
                className="bg-amber-500"
              />
              <CountCard 
                label="Totall Tasks"
                value={allTasks.length}
                suffix="Tasks"
                duration={DURATION}
                className="bg-purple-500 "
              />
              <CountCard
                label="Total Bids"
                value={totalBids}
                suffix="Bids"
                duration={DURATION}
                className="bg-indigo-500"
              />
              <div className="rounded-xl bg-green-500 shadow-md p-8 " style={{ width: "220px", height: "160px" }}>
                <p className="text-white">Current User</p>
                <p className="text-white font-bold">{user.email}</p>
              </div>
              
            </div>
          </div>
<div>
  <TaskTemplates></TaskTemplates>
</div>
          <div>
            <DashBoard_Data_Show></DashBoard_Data_Show>
          </div>
        </main>
        </div>
        {/* Footer */}
      <footer className="w-full text-center py-4 bg-gray-100 text-gray-600 mt-auto">
        © 2025 All rights reserved | Freelancer Dashboard
      </footer>
    </div>
  );
};

export default Dashboard;
