import { useParams } from "react-router-dom";
import MovieCard from "../Shared/MovieCard/MovieCard";
import useMovies from "../../Hooks/useMovies/useMovies";

const MoviesByRegion = () => {

    const { region } = useParams();

    let queries = {
        genre: undefined,
        region: region,
    }

    const movies = useMovies(queries)
    // console.log(region);

    return (
        <div>
            <div className="grid grid-cols-6 gap-5 p-5 my-20">
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

export default MoviesByRegion;