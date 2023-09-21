import { useParams } from "react-router-dom";
import MovieCard from "../Shared/MovieCard/MovieCard";
import useMovies from "../../Hooks/useMovies/useMovies";
import { FaSearch } from 'react-icons/fa';

import { useState } from "react";

const ShowAllMovies = () => {

    let queries = {
        genre: undefined,
        region: undefined,
    }

    const { keyword } = useParams();
    const keyValues = keyword.split('+');
    const [search, setSearch] = useState("");
    console.log(search)
    // console.log(keyword, keyValues);

    if (keyValues[0] === 'regions') {
        queries.region = keyValues[1];
    }
    else if (keyValues[0] === 'genres') {
        queries.genre = keyValues[1];
    }
    // console.log(queries);

    const [movies] = useMovies(queries);
    const sortedByRating = movies.slice(0);
    sortedByRating.sort(function (a, b) {
        return b.IMDb_rating - a.IMDb_rating;
    });
    const newMovies = movies.slice(0);
    newMovies.reverse();

    const allMovies = (keyword === 'top_rated') ? sortedByRating : newMovies;




    console.log(movies)
    return (
        <div>
            <div className="flex justify-center items-center mt-16 gap-4">

                <div className='relative mx-auto px-5 mb-20 w-full sm:w-96 md:w-[500px] '>
                    <input required className='pl-6  py-5 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 bg-[#3E3E3E] border-[#830fea] input rounded-full text-white' type="search" placeholder="Search Movies" onChange={(e) => setSearch(e.target.value)} />
                        <button className='absolute top-1/2 -right-3 -translate-y-1/2  px-4 text-white'><FaSearch></FaSearch></button>
                
                </div>
             
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 my-20">
                {
                    allMovies.filter((movie) => {
                        return search.toLowerCase() === "" ? movie : movie.title.toLowerCase().includes(search);
                    }).map(movie => <MovieCard
                        key={movie._id}
                        movie={movie}
                    ></MovieCard>)
                }
            </div>
        </div>
    );
};

export default ShowAllMovies;