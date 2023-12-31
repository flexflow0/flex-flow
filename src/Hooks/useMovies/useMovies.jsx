import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMovies = (queries, age) => {
    const { data: movies = [], refetch } = useQuery({
        queryKey: [queries],
        queryFn: () =>
            axios.get(`https://flex-flow-server.vercel.app/movies?genre=${queries?.genre}&region=${queries?.region}&age=${age}`)
                .then((res) => res.data),
    })
    return [movies, refetch]
};

export default useMovies;