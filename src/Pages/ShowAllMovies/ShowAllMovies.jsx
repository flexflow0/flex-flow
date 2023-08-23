import { useParams } from "react-router-dom";
import MovieCard from "../Shared/MovieCard/MovieCard";
import useMovies from "../../Hooks/useMovies/useMovies";

const ShowAllMovies = () => {
    
    let queries = {
        genre: undefined,
        region: undefined,
    }

    const allMovies = useMovies(queries);
    const sortedByRating = allMovies.slice(0);
    sortedByRating.sort(function (a, b) {
        return b.IMDb_rating - a.IMDb_rating;
    });

    const {keyword} = useParams();
    // console.log(keyword);

    const movies = (keyword === 'top_rated') ? sortedByRating : allMovies;
    
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

export default ShowAllMovies;