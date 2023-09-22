import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import menuIcon from "../../../assets/menu-alt-2.svg"
import './MainNavbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BiLogOut, BiSolidDashboard } from 'react-icons/bi';
const MainNavbar = () => {
    const { user, logout } = useContext(AuthContext)
    const navigate = useNavigate()

    const regionNames = ["DC, Marvel or Superhero", "Bollywood", "Hollywood", "Bangla", "Korean", "Spanish", "Chinese & Japanese"];
    const genresNames = ["Animation & Cartoon", "Biography", "Documentary", "Horror", "Fantasy", "Drama", "Crime", "Comedy", "Romance", "Sports", "Mystery", "Sci-Fi", "War", "Western", "Thriller", "Psychological"];

    // ******** Masud rana ********* 
    const tvSeries = ["Bollywood", "Hollywood", "Bangla", "Korean", "Spanish", "Chinese & Japanese"];
    // ************
    const liClasses = "hover:bg-[#8484c9] hover:text-white rounded-xl"
    const MovieSector =
        <ul className="p-2 w-60 lg:bg-[#091231ec] bg-opacity-80 z-30">
            {
                regionNames.map(region => <li
                    key={region}
                    className={liClasses}
                >
                    <Link to={`show_all_movies/regions+${region}`} className="hover:text-white">
                        {region}
                    </Link>
                </li>)
            }
        </ul>
    const MovieGenres =
        <ul className="p-2 w-60 lg:bg-[#091231ec] bg-opacity-80 z-40">
            {
                genresNames.map(genre => <li
                    key={genre}
                    className={liClasses}
                >
                    <Link to={`show_all_movies/genres+${genre}`} className="hover:text-white">
                        {genre}
                    </Link>
                </li>)
            }
        </ul>
    // ******** Masud *********
    const tvSeriesSector =
        <ul className="p-2 w-60 lg:bg-[#091231ec] bg-opacity-80 z-30">
            {
                tvSeries.map(tvSeriesList => <li
                    key={tvSeriesList}
                    className={liClasses}>
                    <Link to={`show_all_tvSeries/${tvSeriesList}`} className="hover:text-white">
                        {tvSeriesList}
                    </Link>

                </li>)

            }
        </ul>
    // ***************

    const { pathname } = useLocation();
    const path = pathname.split("/")
console.log(path);



    const handleLogOut = () => {
        logout()
        navigate('/login')
    }




    return (
        <div className="navbar bg-[#39134b] h-10  rounded-sm text-white">
            {/* Mobile Device */}
            <div className="navbar-start">
                {
                    (path[1] == '/' || path[1] == '/register' || path[1] == '/login' || path[1] == '/chooseplan' || path[1] == '/choosetheplan' || path[1] == '/choosepay' || path[1] == '/payment' || path[1] == '/aboutus' || path[1] == '/blog') || <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-10 p-2 shadow w-68 rounded-2xl bg-[#091231ec]">
                            <li>
                                <details>
                                    <summary className="hover:text-white">Movies</summary>
                                    {MovieSector}
                                </details>
                            </li>
                            {/* ******Masud****** */}
                            <li>
                                <details>
                                    <summary className="hover:text-white">Tv Series</summary>
                                    {tvSeriesSector}

                                </details>

                            </li>
                            {/* ************** */}
                            <li>
                                <details>
                                    <summary className="hover:text-white">Genres</summary>
                                    {MovieGenres}
                                </details>
                            </li>
                            <li className=""> <Link to='/aboutus'>About Us</Link><a className="hover:text-white"></a></li>

                            <li className="w-64"> <Link to='/blog'>Blog</Link><a className="hover:text-white"></a></li>
                        </ul>
                    </div>
                }
                <div className="w-52">
                    <Link to={`${(path[1] == '/' || path[1] == '/register' || path[1] == '/login' || path[1] == '/chooseplan' || path[1] == '/choosetheplan' || path[1] == '/choosepay' || path[1] == '/payment') ? "/" : "/home"}`}>
                        <img className="w-full" src="https://i.ibb.co/WpJvMk4/9270632-02.png" alt="" />
                    </Link>
                </div>
            </div>
            {/* desktop device */}
            {
                (path[1] == '/' || path[1] == '/register' || path[1] == '/login' || path[1] == '/chooseplan' || path[1] == '/choosetheplan' || path[1] == '/choosepay' || path[1] == '/payment' || path[1] == '/aboutus' || path[1] == '/blog') || <div className="navbar-center hidden items-center lg:flex">
                    <div className=" dropdown dropdown-hover">
                        <ul className="menu menu-horizontal items-center px-1">

                            <Link to='/home'>
                                <li><a className="hover:text-white">Home</a></li>
                            </Link>
                            <li tabIndex={0}>
                                <details>
                                    <summary className="hover:text-white">Movies</summary>
                                    {MovieSector}
                                </details>
                            </li>
                            {/* ***** Masud ********* */}
                            <li tabIndex={0}>
                                <details>
                                    <summary className="hover:text-white">Tv Series</summary>
                                    {tvSeriesSector}
                                </details>

                            </li>
                            {/* **************** */}
                            <li tabIndex={0}>
                                <details>
                                    <summary className="hover:text-white">Genres</summary>
                                    {MovieGenres}
                                </details>
                            </li>

                            <Link to='/aboutus'>
                                <li><a className="hover:text-white">About Us</a></li>
                            </Link>

                            <Link to='/blog'>
                                <li><a className="hover:text-white">Blog</a></li>
                            </Link>
                   <Link to='/shortvideos'>
                                <li><a className="hover:text-white">Short Videos</a></li>
                            </Link>
                        </ul>
                    </div>
                </div>
            }
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    {
                        (path[1] == '/home' || path[1] == "show_all_movies" || path[1] == "movie_details") ?
                            <>
                                <label tabIndex={0} className="">
                                    <div className="avatar flex items-center justify-between space-x-2 mr-5 pl-1 rounded-full h-10 bg-[#cd9ffb] border-2 border-[#8700f5]">
                                        <div className="w-6 opacity-40">
                                            <img className="w-full Icon" src={menuIcon} alt="menuIcon" />
                                        </div>
                                        <div className="w-10 rounded-full h-10 border-2 border-[#8700f5] ">
                                            <img
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content z-10 menu p-2 shadow rounded-lg w-52 mt-3 bg-[#0d1334]"
                                >
                                    <li>
                                        <NavLink className="text-center rounded-lg uppercase" to='/dashboard'>
                                            {user?.displayName}</NavLink>
                                    </li>
                                    <li >
                                        <NavLink className="rounded-lg uppercase" to='/dashboard'>
                                            <BiSolidDashboard />
                                            DashBoard</NavLink>
                                    </li>

                                  <li onClick={() => logout()} >
                                      <Link to='/login'
                                          className="rounded-lg uppercase" >
                                          <BiLogOut />  Log Out
                                      </Link></li>

                              </ul>
                          </> 
                            
                    }
                </div>

            </div>
        </div >
    );
};

export default MainNavbar;
