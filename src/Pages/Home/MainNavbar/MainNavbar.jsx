
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
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            {/* desktop device */}
            <div className="navbar-center hidden lg:flex">
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
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default MainNavbar;