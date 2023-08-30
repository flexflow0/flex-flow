import LandingPage from "../Pages/LandingPage/LandingPage/LandingPage";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import ChoosePlan from "../Pages/SubscriptionPlans/ChoosePlan/ChoosePlan";
import ChooseThePlan from "../Pages/SubscriptionPlans/ChooseThePlan/ChooseThePlan";
import ChoosePay from "../Pages/SubscriptionPlans/ChoosePay/ChoosePay";
import Loading from "../Pages/Shared/Loading";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ShowAllMovies from "../Pages/ShowAllMovies/ShowAllMovies";
import PaymentStripe from "../Pages/SubscriptionPlans/Payment/PaymentStripe";
import SSLCommerzPay from "../Pages/SubscriptionPlans/Payment/SSLCommerzPay";
import SingleMoviePage from "../Pages/SingleMoviePage/SingleMoviePage";
import SSLCommerzFailed from "../Pages/SubscriptionPlans/Payment/SSLCOMMERZ/SSLCommerzFailed";
import SSLCommerzSuccess from "../Pages/SubscriptionPlans/Payment/SSLCOMMERZ/SSLCommerzSuccess";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Dashboard from "../Layout/Dashboard";
import UploadMovies from "../Pages/Dashboard/UploadMovies/UploadMovies";
import UploadTvSeries from "../Pages/Dashboard/UploadTvSeries/UploadTvSeries";
import UsersManagement from "../Pages/Dashboard/UsersManagement/UsersManagement";

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
        path: '/payment/success/:transactionID',
        element: <SSLCommerzSuccess></SSLCommerzSuccess>
      },
      {
        path: '/payment/failed/:transactionID',
        element: <SSLCommerzFailed></SSLCommerzFailed>
      },
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path: '/show_all_movies/:keyword',
        element: <ShowAllMovies></ShowAllMovies>
      },
      {
        path: '/movie_details',
        element: <SingleMoviePage></SingleMoviePage>
      }
      // {
      //   path: '/genres/:genre',
      //   element: <MoviesByGenres></MoviesByGenres>
      // },
      // {
      //   path: '/regions/:region',
      //   element: <MoviesByRegion></MoviesByRegion>
      // }
    ],
    errorElement: <PageNotFound></PageNotFound>
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path:'uploadmovies',
        element: <UploadMovies></UploadMovies>
      },
      {
        path:'uploadtvseries',
        element: <UploadTvSeries></UploadTvSeries>
      },
      {
        path: 'UsersManagement',
        element: <UsersManagement></UsersManagement>

      }
    ]

  },
  
  {
    path: '/loading',
    element: <Loading />
  }
]);
