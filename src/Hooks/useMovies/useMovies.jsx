import { useQuery } from "@tanstack/react-query";

const useMovies = (queries) => {

    const { data: movies = [], refetch } = useQuery(['movies'], async () => {
        const res = await fetch(`http://localhost:5000/movies?genre=${queries?.genre}&region=${queries?.region}`)
        return res.json();
    })

    return [movies, refetch]
};

export default useMovies;