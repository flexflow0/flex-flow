import { Link, useLocation } from "react-router-dom";
import menuIcon from "../../../assets/menu-alt-2.svg"
import './MainNavbar.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MainNavbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handelLogout = () => {
        logout()
            .then(() => {

            })
            .catch(error => {
                alert(error.message)
            })

    }

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
    // console.log(pathname);

    return (
        <div className="navbar bg-[#39134b] h-10  rounded-sm text-white">
            {/* Mobile Device */}
            <div className="navbar-start">
                {
                    (pathname == '/' || pathname == '/register' || pathname == '/login' || pathname == '/chooseplan' || pathname == '/choosetheplan' || pathname == '/choosepay' || pathname == '/payment' || pathname == '/aboutus' || pathname == '/blog') || <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-10 p-2 shadow rounded-box w-68 rounded-2xl bg-[#091231ec]">
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
                    <Link to={`${(pathname == '/' || pathname == '/register' || pathname == '/login' || pathname == '/chooseplan' || pathname == '/choosetheplan' || pathname == '/choosepay' || pathname == '/payment') ? "/" : "/home"}`}>
                        <img className="w-full" src="https://i.ibb.co/WpJvMk4/9270632-02.png" alt="" />
                    </Link>
                </div>
            </div>
            {/* desktop device */}
            {
                (pathname == '/' || pathname == '/register' || pathname == '/login' || pathname == '/chooseplan' || pathname == '/choosetheplan' || pathname == '/choosepay' || pathname == '/payment' || pathname == '/aboutus' || pathname == '/blog') || <div className="navbar-center hidden items-center lg:flex">
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


                        </ul>
                    </div>
                </div>
            }
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    {
                        (pathname == '/home') ?
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
                                    <li className={liClasses}>
                                        <Link to='/dashboard' className="hover:text-white uppercase">DashBoard</Link>
                                    </li>
                                    {/* <li className={`${liClasses} flex flex-row items-center justify-between px-4`}>
                                        <span className="hover:text-white ps-0"> Sign Up</span>
                                        <i className="fa-solid fa-user-plus hover:text-white"></i>
                                    </li> */}
                                    <li className={`${liClasses} flex flex-row items-center justify-between px-4`}>
                                        <span className="hover:text-white ps-0">Log Out</span>
                                        <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2WTS8DURSGuxUsNdRHgyb8F7ERhPQXVOsjQfwUJSESEUJrJX4ACwldkai1CEuUCEofuckrGY3p3Jnpooue5cw573PvuefecyKRpjWaAb3ACnAM3AFvwCtQ1Lc00FNPYB+wDXzjbWVgHYiFhU4BzxJ9B3aACSAOtACtwBAwDewBH/ItAaNBofNARUIHZucWMQNATjEmQxm/0HFBTfBsgEUvAl+Kt9s50K1UGZvzC62Co6PqsgnYVEAuKNShlZfWmo3zKnBf62oAJ0ABiHpoDargyiaTAdf/R/BcO7mygO/Ld6Ye4KignnAgKb+j0GAJdgCXEi26FZDuubGbWmKnBLeCi2a7/pcaDxwy1Z0ufsPyufYFaKjiAi5soFXXKWXzgDyY/lvD58zyAUlYPyDAhlaYj4Q04FBaWRvnmKMHL4SALknjya3w/gsaU1usBIEL+tsWR/wGZxyDgGnucYuYhCO9Bpr2u2jnQPDoGH12gUmgX6NPm+5pUlPKpyO9/nbqMl1uKXVeZqo3a32mPiaTZfMQALcab1/Mi6Rvqbr03KZF6mw/8SePh1dYTfYAAAAASUVORK5CYII=" />
                                    </li>
                                </ul>
                            </> :
                            <div className='mr-10'>
                                {
                                    user ? <><button onClick={handelLogout} className='uppercase bg-[#22225a] px-5 py-2 rounded-lg font-medium'>Log Out</button>
                                    </> : <><Link to='/login'><button className='uppercase bg-[#22225a] px-5 py-2 rounded-lg font-medium'>Login</button></Link>
                                    </>

                                }
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default MainNavbar;