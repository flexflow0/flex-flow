import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useBlog = () => {
 
        const { data: blog = [], refetch } = useQuery({
            queryFn: () =>
                axios
                    .get(`http://localhost:5000/blog`)
                    .then((res) => res.data),
        })
    
        return [blog, refetch]

};

export default useBlog;