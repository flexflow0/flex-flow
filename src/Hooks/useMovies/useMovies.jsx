import { useEffect, useState } from "react";

const useMovies = () => {

    const [movies, setMovies] = useState([])
    console.log(movies);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(res => res.json())
            .then(data => setMovies(data.reverse()))
    }, []);

    return movies;
};

export default useMovies;