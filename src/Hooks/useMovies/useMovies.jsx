import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMovies = (queries) => {

    // const { data: movies = [], refetch } = useQuery(['movies'], async () => {
    //     const res = await fetch(`https://flex-flow-server.vercel.app/movies?genre=${queries?.genre}&region=${queries?.region}`)
    //     return res.json();
    // })
    const { data: movies = [], refetch } = useQuery({
        queryKey: [queries],
        queryFn: () =>
            axios
                .get(`https://flex-flow-server.vercel.app/movies?genre=${queries?.genre}&region=${queries?.region}`)
                .then((res) => res.data),
    })

    return [movies, refetch]
};

export default useMovies;