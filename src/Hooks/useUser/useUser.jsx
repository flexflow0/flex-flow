import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = (email) => {
    const { data: userData = [], isLoading, refetch } = useQuery({
        queryKey: ["user", email],
        queryFn: async () =>
<<<<<<< HEAD
            await axios.get(`https://flex-flow-server.vercel.app/user/${email}`)
            .then((res) => res.data)
=======
            await axios.get(`http://localhost:5000/user/${email}`)
                .then((res) => res.data)
>>>>>>> cb341b8038bca2f75948a0b88918e776d6efe2d2
    });
    return [userData, isLoading, refetch];
};

export default useUser;
