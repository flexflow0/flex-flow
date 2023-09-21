import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSimilarMovies = (genres) => {

    const { data: similarMovies = [], refetch } = useQuery({
        queryKey: [genres],
        queryFn: () =>
            axios
                .get(`http://localhost:5000/similar_movies?genres=${genres}`)
                .then((res) => res.data)
    })

    return [similarMovies, refetch]
};

export default useSimilarMovies;