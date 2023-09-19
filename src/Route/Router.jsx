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
import UploadMovies from "../Pages/Dashboard/AdminDashboard/UploadMovies/UploadMovies";
import UploadTvSeries from "../Pages/Dashboard/AdminDashboard/UploadTvSeries/UploadTvSeries";
import UsersManagement from "../Pages/Dashboard/AdminDashboard/UsersManagement/UsersManagement";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Privacy from "../Pages/Privacy/Privacy";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layout/DashBoard";
import Analytics from "../Pages/Dashboard/AdminDashboard/Analytics/Analytics";
import WatchLater from "../Pages/Dashboard/UsersDashboard/WatchLater/WatchLater";
import MyLikedMovies from "../Pages/Dashboard/UsersDashboard/MyLikedMovies/MyLikedMovies";
import WatchHistory from "../Pages/Dashboard/UsersDashboard/WatchHistory/WatchHistory";
import Blog from "../Pages/Home/Blog/Blog";
import WriteaBlog from "../Pages/Dashboard/AdminDashboard/WriteaBlog/WriteaBlog";
import AboutFlexflow from "../Pages/AboutFlexflow/AboutFlexflow";
import ShowAllTvSeries from "../Pages/Home/TvSeries/ShowAllTvSeries/ShowAllTvSeries";
import TvSeriesDetails from "../Pages/Home/TvSeries/TvSeriesDetails/TvSeriesDetails";
import ViewAllBlogs from "../Pages/Dashboard/AdminDashboard/ViewAllBlogs/ViewAllBlogs";
import ExpiredUsers from "../Pages/Dashboard/AdminDashboard/UsersManagement/ExpiredUsers";
import PaymentHistory from "../Pages/Dashboard/UsersDashboard/PaymentHistory/PaymentHistory";
import SubscribeUser from "../Pages/Dashboard/AdminDashboard/SubscribeUser/SubscribeUser";
import PrivateRoute from "./PrivateRoute";
import MyFavorites from "../Pages/Dashboard/UsersDashboard/MyFavorites/MyFavorites";
import UpdateBlog from "../Pages/Dashboard/AdminDashboard/ViewAllBlogs/UpdateBlog";
import FrequentlyAsked from "../Pages/LandingPage/FrequentlyAsked/FrequentlyAsked";
import LegalNotice from "../Pages/Shared/LegalNotice/LegalNotice";
import TermsAndCondition from "../Pages/Shared/TermsAndCondition/TermsAndCondition";
import ShortVideos from "../Pages/Shared/ShortVideos/ShortVideos";

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
        element: <PrivateRoute><ChoosePlan></ChoosePlan></PrivateRoute>
      },
      {
        path: '/choosetheplan',
        element: <PrivateRoute><ChooseThePlan></ChooseThePlan></PrivateRoute>
      },
      {
        path: '/choosepay',
        element: <PrivateRoute><ChoosePay></ChoosePay></PrivateRoute>
      },
      {
        path: '/paymentStripe',
        element: <PrivateRoute><PaymentStripe></PaymentStripe></PrivateRoute>
      },
      {
        path: '/paymentSSLCommerz',
        element: <PrivateRoute><SSLCommerzPay></SSLCommerzPay></PrivateRoute>
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
        element: <PrivateRoute><Home></Home></PrivateRoute>
      },
      {
        path: '/show_all_movies/:keyword',
        element: <PrivateRoute><ShowAllMovies></ShowAllMovies></PrivateRoute>
      },
      {
        path: '/movie_details/:id',
        element: <PrivateRoute><SingleMoviePage></SingleMoviePage></PrivateRoute>
      },
      {
        path: '/show_all_tvSeries/:region',
        element: <PrivateRoute><ShowAllTvSeries></ShowAllTvSeries></PrivateRoute>
      },
      {
        path: '/tv_series_details/:id',
        element: <PrivateRoute><TvSeriesDetails></TvSeriesDetails></PrivateRoute>
      },
    
      {
        path: '/aboutus',
        element: <PrivateRoute><AboutUs></AboutUs></PrivateRoute>
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '/contactus',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/aboutFlexflow',
        element: <AboutFlexflow />
      },
      {
        path: "/faq",
        element: <FrequentlyAsked></FrequentlyAsked>
      },
      {
        path: '/legalnotice',
        element: <LegalNotice></LegalNotice>
      },
      {
        path:'/termsandcondition',
        element:<TermsAndCondition></TermsAndCondition>
      },
       {   path:'/shortvideos',
        element:<ShortVideos></ShortVideos>}

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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'uploadmovies',
        element: <UploadMovies></UploadMovies>
      },
      {
        path: 'uploadtvseries',
        element: <UploadTvSeries></UploadTvSeries>
      },
      {
        path: 'usersManagement',
        element: <UsersManagement></UsersManagement>
      },
      {
        path: 'ExpiredUsers',
        element: <ExpiredUsers></ExpiredUsers>
      },
      {
        path: 'analytics',
        element: <Analytics></Analytics>
      },
      {
        path: 'writeablog',
        element: <WriteaBlog></WriteaBlog>
      },
      {
        path: 'subscribeuser',
        element: <SubscribeUser></SubscribeUser>
      },
      {
        path: 'viewallblogs',
        element: <ViewAllBlogs></ViewAllBlogs>
      },
      {
        path: 'viewallblogs/updateblog/:id',
        element: <UpdateBlog></UpdateBlog>
      },



      // User Dashboard 
      {
        path: 'favorites',
        element: <MyFavorites></MyFavorites>
      },
      {
        path: 'watchLater',
        element: <WatchLater></WatchLater>
      },
      {
        path: 'likedmovies',
        element: <MyLikedMovies></MyLikedMovies>
      },
      {
        path: 'watchhistory',
        element: <WatchHistory></WatchHistory>
      },

      {
        path: 'paymenthistory',
        element: <PaymentHistory></PaymentHistory>
      }
    ]

  },

  {
    path: '/loading',
    element: <Loading />
  }
]);

