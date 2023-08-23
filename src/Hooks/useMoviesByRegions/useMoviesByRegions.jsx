import { useEffect, useState } from "react";

const useMoviesByRegions = (region) => {

    const [movies, setMovies] = useState([]);
    // console.log(region);

    useEffect(() => {
        fetch(`http://localhost:5000/movies?region=${region}`)
            .then(res => res.json())
            .then(data => setMovies(data.reverse()))
    }, [region]);

    return movies;
};

export default useMoviesByRegions;