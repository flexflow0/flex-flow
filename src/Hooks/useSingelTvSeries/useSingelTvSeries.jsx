import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingelTvSeries = (id) => {
    const { data: tvSeries = [], isLoading, refetch } = useQuery({
        queryKey: [id],
        queryFn: () =>
            axios
                .get(`http://localhost:5000/singleTvSeries/${id}`)
                .then((res) => res.data),
    })

    return [tvSeries, isLoading, refetch]
};

export default useSingelTvSeries;