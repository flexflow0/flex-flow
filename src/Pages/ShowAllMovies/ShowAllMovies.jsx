import { useParams } from "react-router-dom";
import MovieCard from "../Shared/MovieCard/MovieCard";
import useMovies from "../../Hooks/useMovies/useMovies";
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
            <p className="text-slate-300">Search Movies: </p>
           <input className="py-2 px-8 border bg-[#111111] hover:border-purple-700  border-purple-900 text-center  rounded-full w-1/2" type="search" placeholder="Search Movies" onChange={(e) => setSearch(e.target.value)} />
           </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 p-5 my-20">
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