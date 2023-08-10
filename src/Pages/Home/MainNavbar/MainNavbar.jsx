import { Link } from "react-router-dom";

const MainNavbar = () => {

    const liClasses = "hover:bg-[#8484c9] hover:text-white rounded-xl"
    const MovieSector =
        <ul className="p-2 w-60 lg:bg-[#091231ec] bg-opacity-80">
            <li className={liClasses}><a className="hover:text-white">DC, Marvel or Superhero</a></li>
            <li className={liClasses}><a className="hover:text-white">Bollywood</a></li>
            <li className={liClasses}><a className="hover:text-white">Hollywood</a></li>
            <li className={liClasses}><a className="hover:text-white">Bangla</a></li>
            <li className={liClasses}><a className="hover:text-white">Korean</a></li>
            <li className={liClasses}><a className="hover:text-white">Spanish</a></li>
            <li className={liClasses}><a className="hover:text-white">Chinese & Japanese</a></li>
            <li className={liClasses}><a className="hover:text-white">TV & Web Series</a></li>
            <li className={liClasses}><a className="hover:text-white">Others</a></li>
        </ul>
    const MovieGenres =
        <ul className="p-2 w-60 lg:bg-[#091231ec] bg-opacity-80">
            <li className={liClasses}><a className="hover:text-white">Animation & Cartoon</a></li>
            <li className={liClasses}><a className="hover:text-white">Biography</a></li>
            <li className={liClasses}><a className="hover:text-white">Documentary</a></li>
            <li className={liClasses}><a className="hover:text-white">Horror</a></li>
            <li className={liClasses}><a className="hover:text-white">Fantasy</a></li>
            <li className={liClasses}><a className="hover:text-white">Drama</a></li>
            <li className={liClasses}><a className="hover:text-white">Crime</a></li>
            <li className={liClasses}><a className="hover:text-white">Comedy</a></li>
            <li className={liClasses}><a className="hover:text-white">Romance</a></li>
            <li className={liClasses}><a className="hover:text-white">Sports</a></li>
            <li className={liClasses}><a className="hover:text-white">Mystery</a></li>
            <li className={liClasses}><a className="hover:text-white">Sci-Fi</a></li>
            <li className={liClasses}><a className="hover:text-white">War</a></li>
            <li className={liClasses}><a className="hover:text-white">Western</a></li>
            <li className={liClasses}><a className="hover:text-white">Thriller</a></li>
            <li className={liClasses}><a className="hover:text-white">Psychological</a></li>
        </ul>

    return (
        <div className="navbar bg-[#39134b] rounded-sm text-white sticky top-0 z-10">
            {/* Mobile Device */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-68 bg-[#091231ec]">
                        <li>
                            <details>
                                <summary className="hover:text-white">Movies</summary>
                                {MovieSector}
                            </details>
                        </li>
                        <li>
                            <details>
                                <summary className="hover:text-white">Genres</summary>
                                {MovieGenres}
                            </details>
                        </li>
                        <li className="w-64"><a className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
                <div className="w-52">
                    <Link to='/home'>
                        <img className="w-full" src="https://i.ibb.co/WpJvMk4/9270632-02.png" alt="" />
                    </Link>
                </div>
            </div>
            {/* desktop device */}
            <div className="navbar-center hidden lg:flex">
                <div className=" dropdown dropdown-hover">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <details>
                                <summary className="hover:text-white">Movies</summary>
                                {MovieSector}
                            </details>
                        </li>
                        <li tabIndex={0}>
                            <details>
                                <summary className="hover:text-white">Genres</summary>
                                {MovieGenres}
                            </details>
                        </li>
                        <li><a className="hover:text-white">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="">
                        <div className="avatar flex items-center space-x-2 mr-5 p-1 rounded-full bg-[#c9c9c9]">
                            <i className="fa-solid fa-bars-staggered text-[#505051]"></i>
                            <div className="w-10 rounded-full ring-2 ring-primary">
                                <img src="https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg" />
                            </div>
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3 bg-[#091231ec]"
                    >

                        <li className={liClasses}>
                            <a className="hover:text-white uppercase">Profile Name</a>
                        </li>
                        <li className={`${liClasses} flex flex-row items-center justify-between px-4`}>
                            <span className="hover:text-white ps-0"> Sign Up</span>
                            <i className="fa-solid fa-user-plus hover:text-white"></i>
                        </li>
                        <li className={`${liClasses} flex flex-row items-center justify-between px-4`}>
                            <span className="hover:text-white ps-0">Login</span>
                            <img className="w-14" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABqUlEQVR4nO2WTS8DURSGuxUsNdRHgyb8F7ERhPQXVOsjQfwUJSESEUJrJX4ACwldkai1CEuUCEofuckrGY3p3Jnpooue5cw573PvuefecyKRpjWaAb3ACnAM3AFvwCtQ1Lc00FNPYB+wDXzjbWVgHYiFhU4BzxJ9B3aACSAOtACtwBAwDewBH/ItAaNBofNARUIHZucWMQNATjEmQxm/0HFBTfBsgEUvAl+Kt9s50K1UGZvzC62Co6PqsgnYVEAuKNShlZfWmo3zKnBf62oAJ0ABiHpoDargyiaTAdf/R/BcO7mygO/Ld6Ye4KignnAgKb+j0GAJdgCXEi26FZDuubGbWmKnBLeCi2a7/pcaDxwy1Z0ufsPyufYFaKjiAi5soFXXKWXzgDyY/lvD58zyAUlYPyDAhlaYj4Q04FBaWRvnmKMHL4SALknjya3w/gsaU1usBIEL+tsWR/wGZxyDgGnucYuYhCO9Bpr2u2jnQPDoGH12gUmgX6NPm+5pUlPKpyO9/nbqMl1uKXVeZqo3a32mPiaTZfMQALcab1/Mi6Rvqbr03KZF6mw/8SePh1dYTfYAAAAASUVORK5CYII=" />
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default MainNavbar;