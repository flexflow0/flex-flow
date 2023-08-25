import LandingPage from "../Pages/LandingPage/LandingPage/LandingPage";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import ChoosePlan from "../Pages/SubscriptionPlans/ChoosePlan/ChoosePlan";
import ChooseThePlan from "../Pages/SubscriptionPlans/ChooseThePlan/ChooseThePlan";
import ChoosePay from "../Pages/SubscriptionPlans/ChoosePay/ChoosePay";
import Payment from "../Pages/SubscriptionPlans/Payment/Payment";

import Loading from "../Pages/Shared/Loading";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ShowAllMovies from "../Pages/ShowAllMovies/ShowAllMovies";
import MoviesByGenres from "../Pages/MoviesByGenres/MoviesByGenres";
import MoviesByRegion from "../Pages/MoviesByRegion/MoviesByRegion";
import PaymentStripe from "../Pages/SubscriptionPlans/Payment/PaymentStripe";
import SSLCommerzPay from "../Pages/SubscriptionPlans/Payment/SSLCommerzPay";

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
        path: '/paymentStripe',
        element: <PaymentStripe></PaymentStripe>
      },
      {
        path: '/paymentSSLCommerz',
        element: <SSLCommerzPay></SSLCommerzPay>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/show_all_movies/:keyword',
        element: <ShowAllMovies></ShowAllMovies>
      }
      // {
      //   path: '/genres/:genre',
      //   element: <MoviesByGenres></MoviesByGenres>
      // },
      // {
      //   path: '/regions/:region',
      //   element: <MoviesByRegion></MoviesByRegion>
      // }
    ]
  },
  {
    path: '/loading',
    element: <Loading />
  }
]);
