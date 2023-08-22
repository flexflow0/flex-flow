import useMovies from "../../Hooks/useMovies/useMovies";
import MovieCard from "../Shared/MovieCard/MovieCard";

const ShowAllMovies = () => {

    const movies = useMovies();

    return (
        <div>
            <div className="grid grid-cols-6 gap-5 p-5">
                {
                    movies.map(movie => <MovieCard
                        key={movie._id}
                        movie={movie}
                    ></MovieCard>)
                }
            </div>
        </div>
    );
};

export default ShowAllMovies;