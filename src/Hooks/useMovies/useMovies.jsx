import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMovies = (queries) => {

    // const { data: movies = [], refetch } = useQuery(['movies'], async () => {
    //     const res = await fetch(`http://localhost:5000/movies?genre=${queries?.genre}&region=${queries?.region}`)
    //     return res.json();
    // })
    // ----------------------------->
// const token = localStorage.getItem('access-token');
// --------------------<
// {headers:{
//     authorization: `bearer ${token}`
// }}
// -----------------------<
    // -------------------------------->
    const { data: movies = [], refetch } = useQuery({
        queryKey: [queries],
        queryFn: () =>
            axios
                .get(`http://localhost:5000/movies?genre=${queries?.genre}&region=${queries?.region}`)
                .then((res) => res.data),
    })

    return [movies, refetch]
};

export default useMovies;