
import Loading from "../../../Shared/Loading";
import useUser from "../../../../Hooks/useUser/useUser";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import ShowListedMovies from "../../../Shared/ShowListedMovies/ShowListedMovies";

const WatchLater = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        )
    }

    const [userData, isLoading, refetch] = useUser(user.email);


    if (isLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        )
    }

    const { WatchList } = userData;

    return (
        <div>
            <ShowListedMovies
                list={WatchList}
            ></ShowListedMovies>
        </div>
    );
};

export default WatchLater;