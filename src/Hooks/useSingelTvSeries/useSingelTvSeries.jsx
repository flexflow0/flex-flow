import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingelTvSeries = (id) => {
    const { data: tvSeries = [], isLoading, refetch } = useQuery({
        queryKey: [id],
        queryFn: () =>
            axios.get(`https://flex-flow-server.vercel.app/singleTvSeries/${id}`)
                .then((res) => res.data),
    })

    return [tvSeries, isLoading, refetch]
};

export default useSingelTvSeries;