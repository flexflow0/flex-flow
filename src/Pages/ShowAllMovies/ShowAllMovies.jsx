import { useParams } from "react-router-dom";
import MovieCard from "../Shared/MovieCard/MovieCard";
import useMovies from "../../Hooks/useMovies/useMovies";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useUser from "../../Hooks/useUser/useUser";

const ShowAllMovies = () => {
    const { user, loading } = useContext(AuthContext);
    const { keyword } = useParams();
    const [search, setSearch] = useState("");

    if(loading){
        return;
    }
    const [userData] = useUser(user.email)

    const queries = {
        genre: keyword.startsWith('genres') ? keyword.split('+')[1] : undefined,
        region: keyword.startsWith('regions') ? keyword.split('+')[1] : undefined,
    };

    const [movies] = useMovies(queries, userData?.birthDate);
    const sortedByRating = [...movies].sort((a, b) => b.IMDb_rating - a.IMDb_rating);
    const newMovies = [...movies].reverse();
    const allMovies = (keyword === 'top_rated') ? sortedByRating : newMovies;

    return (
        <div>
            <div className="flex justify-center items-center mt-16 gap-4">
                <p className="text-slate-300">Search Movies: </p>
                <input
                    className="py-2 px-8 border bg-[#111111] hover:border-purple-700 border-purple-900 text-center rounded-full w-1/2"
                    type="search"
                    placeholder="Search Movies"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 my-20">
                {allMovies
                    .filter((movie) =>
                        search.toLowerCase() === "" ? true : movie.title.toLowerCase().includes(search)
                    )
                    .map((movie) => (
                        <MovieCard key={movie._id} movie={movie}></MovieCard>
                    ))}
            </div>
        </div>
    );
};

export default ShowAllMovies;
