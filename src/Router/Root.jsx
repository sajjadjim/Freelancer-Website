import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Components/Home/Home";
import Signup from "../Components/Login & signUp/Signup";
import Login from "../Components/Login & signUp/Login";
import AddTask from "../Components/Add Task/AddTask";
import ABoutUs from "../Components/About Us/ABoutUs";
import BrowseTask from "../Components/Browse Task/BrowseTask";
import UpdateTask from "../Components/Browse Task/UpdateTask/UpdateTask";
import PrivateRoute from "../Authcontext/PrivateRoute";
import Error from "../Error Page/Error";
import MyPostedTask from "../Current User/MyPostedTask";
import { Suspense } from "react";
import BidsCount from "../Components/Browse Task/BidsCountAdd/BidsCount";
import UserInfoCard from "../Components/UserInfoCard/UserInfoCard";
import ReviewForm from "../Components/Review/ReviewForm";

const Routers = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/signup',
        Component: Signup
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/addTask',
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        )
      },
      {
        path: '/about',
        Component: ABoutUs
      },
      {
        path: '/browseTask',
        loader: () => fetch('https://frelancer-server.vercel.app/tasks'),
        element: (
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <BrowseTask />
          </Suspense>
        )
      },
      {
        path: '/updateTask/:id',
        loader: ({ params }) => fetch(`https://frelancer-server.vercel.app/tasks/${params.id}`),
        element: (
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
            <UpdateTask />
          </Suspense>
        )
      },
      {
        path: "/*",
        Component: Error
      },
      {
        path: '/myPostedTask',
        loader: () => fetch(`https://frelancer-server.vercel.app/tasks`),
        element: (
          <PrivateRoute>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
              <MyPostedTask />
            </Suspense>
          </PrivateRoute>
        )
      }
      , {
        path: "/tasks/:id",
        loader: ({ params }) => fetch(`https://frelancer-server.vercel.app/tasks/${params.id}`),
        element: (
          <PrivateRoute>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
              <BidsCount></BidsCount>
            </Suspense>
          </PrivateRoute>
        )
      }, {
        path: '/userInfo',
        element: <PrivateRoute>
          <UserInfoCard></UserInfoCard>
        </PrivateRoute>
      },
      {
        path:'/reviewForm',
        element:<PrivateRoute>
       <ReviewForm></ReviewForm>
          </PrivateRoute>
      }
    ]
  },
]);

export default Routers;