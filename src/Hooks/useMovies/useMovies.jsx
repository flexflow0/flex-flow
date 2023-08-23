import { useEffect, useState } from "react";

const useMovies = (queries) => {

    const [movies, setMovies] = useState([])
    // console.log(queries?.genre, queries?.region)
    console.log(movies)
    useEffect(() => {
        fetch(`http://localhost:5000/movies?genre=${queries?.genre}&region=${queries?.region}`)
            .then(res => res.json())
            .then(data => setMovies(data.reverse()))
    }, [queries]);

    return movies;
};

export default useMovies;