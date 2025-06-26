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
import MyPostedTask from "../Current User/MyPostedTask";
import { Suspense } from "react";
import BidsCount from "../Components/Browse Task/BidsCountAdd/BidsCount";
import UserInfoCard from "../Components/UserInfoCard/UserInfoCard";
import ReviewForm from "../Components/Review/ReviewForm";
import PrivacyPolicy from "../Components/Footer Page Link/Privacy policy/PrivacyPolicy";
import TermsOfUse from "../Components/Footer Page Link/Privacy policy/Terms of use/TermsOfUse";
import Contact from "../Components/Footer Page Link/Privacy policy/Contact/Contact";
import ErroPage from "../Error Page/ErroPage";
import FaQ from "../Components/FaQ/FaQ";
import UserDashBoard from "../Dashboard/UserDashBoard";
import Dashboard from "../Dashboard/Dashboard";
import DetailsPicture1 from "../Components/Home/Details_news_Picture/DetailsPicture1";
import DetailsPicture2 from "../Components/Home/Details_news_Picture/DetailsPage2";
import DetailsPicture3 from "../Components/Home/Details_news_Picture/DetailsPage3";
import DetailsPicture4 from "../Components/Home/Details_news_Picture/DetailsPage4";
import DetailsPicture5 from "../Components/Home/Details_news_Picture/DeailsPage5";
import Branding from "../Components/Home/Branding/Branding";
import { Component } from "lucide-react";
import DesignPage from "../Components/Home/Design Page/DesignPage";


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
        Component: ErroPage
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
      },
      // footer Path link 
      {
        path:'/privacypolicy',
        Component: PrivacyPolicy
      },
      {
        path:'/termsOfUse',
        Component:TermsOfUse
      },
      {
        path:'/contact',
        Component:Contact
      },
      {
        path: '/FaQ',
        Component:FaQ
      },
      {
        path:'/watch',
        Component:DetailsPicture1
      },
      {
        path:'/house',
        Component: DetailsPicture2
      }
      ,
      {
        path:'/posters',
        Component:DetailsPicture3
      },
      {
        path:'/cards',
        Component:DetailsPicture4
      },
      {
        path:'/achitecture',
        Component:DetailsPicture5
      },
      {
        path:'/branding',
        Component:Branding
      },
      {
        path:'/design',
        Component: DesignPage
      }
    ]
  },
  {
    path:'/',
    Component: UserDashBoard,
    children:[
      {
        path: '/userDashBoard',
        loader: () => fetch('https://frelancer-server.vercel.app/tasks'),
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  }
]);

export default Routers;