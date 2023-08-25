import { useEffect, useState } from "react";

const useMoviesByCategory = (category) => {

    const [movies, setMovies] = useState([]);
    // console.log(movies);

    useEffect(() => {
        fetch(`https://flex-flow-server.vercel.app/movies/${category}`)
            .then(res => res.json())
            .then(data => setMovies(data.reverse()))
    }, [category]);

    return movies;
};

export default useMoviesByCategory;