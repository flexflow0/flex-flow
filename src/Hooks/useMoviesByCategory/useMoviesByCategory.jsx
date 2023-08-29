import { useEffect, useState } from "react";

const useMoviesByCategory = (category) => {

    const [movies, setMovies] = useState([]);
    // console.log(movies);

    useEffect(() => {
        fetch(`http://localhost:5000/movies/${category}`)
            .then(res => res.json())
            .then(data => setMovies(data.reverse()))
    }, [category]);

    return movies;
};

export default useMoviesByCategory;