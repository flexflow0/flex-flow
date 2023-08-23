import LandingPage from "../Pages/LandingPage/LandingPage/LandingPage";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import ChoosePlan from "../Pages/SubscriptionPlans/ChoosePlan/ChoosePlan";
import ChooseThePlan from "../Pages/SubscriptionPlans/ChooseThePlan/ChooseThePlan";
import ChoosePay from "../Pages/SubscriptionPlans/ChoosePay/ChoosePay";
import Payment from "../Pages/SubscriptionPlans/Payment/Payment";
// import MoviesList from "../Pages/Home/Movies/MoviesList/MoviesList";

import Loading from "../Pages/Shared/Loading";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";

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
        path: '/register',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/chooseplan',
        element: <ChoosePlan></ChoosePlan>
      },
      {
        path: '/choosetheplan',
        element: <ChooseThePlan></ChooseThePlan>
      },
      {
        path: '/choosepay',
        element: <ChoosePay></ChoosePay>
      },
      {
        path: '/payment',
        element: <Payment></Payment>
      },
      {
        path:'/home',
        element:<Home></Home>
      }
      // {
      //   path: '/movieslist',
      //   element: <MoviesList></MoviesList>
      // }

    ]
  },
  {
    path: '/loading',
    element: <Loading />
  }
]);
