import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = (email) => {
    const { data: userData = [], refetch } = useQuery({
        queryFn: () =>
            axios
                .get(`http://localhost:5000/user/${email}`)
                .then((res) => res.data),
    })

    return [userData, refetch]
};

export default useUser;