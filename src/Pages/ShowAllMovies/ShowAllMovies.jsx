import { useParams } from "react-router-dom";
import MovieCard from "../Shared/MovieCard/MovieCard";
import useMovies from "../../Hooks/useMovies/useMovies";

const ShowAllMovies = () => {

    let queries = {
        genre: undefined,
        region: undefined,
    }

    const { keyword } = useParams();
    const keyValues  = keyword.split('+');
    // console.log(keyword, keyValues);

    if (keyValues[0] === 'regions'){
        queries.region = keyValues[1];
    }
    else if (keyValues[0] === 'genres'){
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

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-5 my-20">
                {
                    allMovies.map(movie => <MovieCard
                        key={movie._id}
                        movie={movie}
                    ></MovieCard>)
                }
            </div>
        </div>
    );
};

export default ShowAllMovies;