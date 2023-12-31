import useMovies from "../../../../Hooks/useMovies/useMovies";
import MovieCard from "../../../Shared/MovieCard/MovieCard";

const MoviesList = () => {

    const movies = useMovies();

    return (
        <div>
            {/* <div className="mx-auto mb-10 ">
                <h2 className="text-center text-[#830FEA] font-bold text-4xl uppercase">Jamboree</h2>
                <hr className="w-[500px] mx-auto border-[#830FEA] border-1" />
                <h3 className="text-center">Enchanting

                    <div className="dropdown">
                        <ul className="menu menu-horizontal text-[#830FEA] bg-transparent bg-[#17203c] rounded-box ">

                            <li tabIndex={0}>
                                <details>
                                    <summary>Month</summary>
                                    <ul className="px-2">
                                        <li className={liClasses}><a>January</a></li>
                                        <li className={liClasses}><a>February</a></li>
                                        <li className={liClasses}><a> March</a></li>
                                        <li className={liClasses}><a>April</a></li>
                                        <li className={liClasses}><a>May</a></li>
                                        <li className={liClasses}><a>June</a></li>
                                        <li className={liClasses}><a>July</a></li>
                                        <li className={liClasses}><a>August</a></li>
                                        <li className={liClasses}><a>September</a></li>
                                        <li className={liClasses}><a>October</a></li>
                                        <li className={liClasses}><a>November</a></li>
                                        <li className={liClasses}><a>December</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    Jamboree : Unveiling Unseen Beauty</h3>
                <hr className="w-[500px] mx-auto border-[#830FEA] border-1" />
            </div> */}

            <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:mx-auto gap-2 px-5 my-10">
                {
                    movies.map(movie => <MovieCard
                        key={movie._id}
                        movie={movie}
                    >
                    </MovieCard>)
                }
            </div>
            <button className="btn mx-auto text-purple-900 font-semibold border-[#830FEA] rounded-lg flex flex-col items-center uppercase mb-20">SHOW MORE</button>
            <hr className="border-[#830FEA] mb-20" />
        </div>
    );
};

export default MoviesList;