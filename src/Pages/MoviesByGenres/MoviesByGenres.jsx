import { useParams } from "react-router-dom";
import MovieCard from "../Shared/MovieCard/MovieCard";
import useMovies from "../../Hooks/useMovies/useMovies";

const MoviesByGenres = () => {

    const {genre} = useParams();
    // console.log(genre);

    let queries = {
        genre: genre,
        region: undefined,
    }

    const [movies] = useMovies(queries)
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5 p-5 my-20">
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

export default MoviesByGenres;