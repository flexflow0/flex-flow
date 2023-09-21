import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMovies = (queries) => {
    const { data: movies = [], refetch } = useQuery({
        queryKey: [queries],
        queryFn: () =>
            axios
                .get(`https://flex-flow-server-gold.vercel.app/movies?genre=${queries?.genre}&region=${queries?.region}`)
                .then((res) => res.data),
    })

    return [movies, refetch]
};

export default useMovies;