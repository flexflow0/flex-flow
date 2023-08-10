import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage/LandingPage";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <LandingPage></LandingPage>
        },
        {
          path: '/home',
          element: <Home></Home>
        }
      ]
    },
  ]);