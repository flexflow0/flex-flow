import { useEffect, useState } from "react";
import SingleMovie from "./SingleMovie";
import MainBanner from "../../MainBanner/MainBanner";


const MoviesList = () => {

    const [movies, setMovies] = useState([]);
console.log(movies)


    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => setMovies(data))
    }, []);

    return (
        <div>
                <MainBanner></MainBanner>

            <div className="mx-auto mb-10 ">
                <h2 className="text-center text-[#830FEA] font-bold text-4xl uppercase">Jamboree</h2>
                <h3 className="text-center">Enchanting
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost m-1 text-[#830FEA]">Month</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  bg-transparent bg-[#17203c] rounded-box w-52">
                            <li><a>January</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                    Jamboree : Unveiling Unseen Beauty</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 px-5">
                {
                    movies.map(movie => <SingleMovie
                        key={movie._id}
                        movie={movie}
                    >
                    </SingleMovie>)
                }
            </div>

        </div>
    );
};

export default MoviesList;