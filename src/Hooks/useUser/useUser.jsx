import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useUser = (email) => {
    const { data: userData = [], isLoading, refetch } = useQuery({
        queryKey: ["user", email],
        queryFn: async () =>
            await axios.get(`https://flex-flow-server.vercel.app/user/${email}`)
                .then((res) => res.data)
    });

    return [userData, isLoading, refetch];
};

export default useUser;
