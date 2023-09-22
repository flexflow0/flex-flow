import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useLists = ( list ) => {
    // console.log(list);
    const { data: movies = [], isLoading, refetch } = useQuery({
        queryKey: [list],
        queryFn: () =>
            axios
                .get(`http://localhost:5000/lists?list=${list}`)
                .then((res) => res.data),
    })

    return [movies, isLoading, refetch];
};

export default useLists;