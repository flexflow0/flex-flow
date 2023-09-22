import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTvSeries = ({ region }) => {
    console.log(region);
    const { data: tvSeries = [], refetch } = useQuery({
        queryKey: [region],
        queryFn: () =>
            axios
                .get(`http://localhost:5000/tvSeries?region=${region}`)
                .then((res) => res.data),
    })

    return [tvSeries, refetch]

};

export default useTvSeries;