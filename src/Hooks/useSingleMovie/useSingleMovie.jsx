import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMovies = (id, loading) => {

    // const { data: movie = [], refetch } = useQuery(['singleMovie'], async () => {
    //     const res = await fetch(`http://localhost:5000/singleMovie/${id}`)
    //     return res.json();
    // })
    const { data: movie = [], refetch } = useQuery({
        queryKey: [loading],
        queryFn: () =>
            axios
                .get(`http://localhost:5000/singleMovie/${id}`)
                .then((res) => res.data),
    })

    return [movie, refetch]
};

export default useMovies;