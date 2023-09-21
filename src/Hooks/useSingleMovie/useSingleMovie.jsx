import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingleMovie = (id) => {

    // const { data: movie = [], refetch } = useQuery(['singleMovie'], async () => {
    //     const res = await fetch(`https://flex-flow-server.vercel.app/singleMovie/${id}`)
    //     return res.json();
    // })
    const { data: movie = [], isLoading, refetch } = useQuery({
        queryKey: [id],
        queryFn: () =>
            axios
                .get(`https://flex-flow-server.vercel.app/singleMovie/${id}`)
                .then((res) => res.data),
    })

    return [movie, isLoading, refetch]
};

export default useSingleMovie;