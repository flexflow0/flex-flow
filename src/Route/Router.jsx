import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import IntroducePage from "../Pages/LandingPage/IntroducePage/IntroducePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <IntroducePage></IntroducePage>
      },
      {
        path: '/home',
        element: <Home></Home>
      }
    ]
  },
]);