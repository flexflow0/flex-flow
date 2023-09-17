import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Loading from "../../../Shared/Loading";
import useUser from "../../../../Hooks/useUser/useUser";
import ShowListedMovies from "../../../Shared/ShowListedMovies/ShowListedMovies";

const MyLikedMovies = () => {

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

    const { likes } = userData;

    return (
        <ShowListedMovies
            list={likes}
        ></ShowListedMovies>
    );

};

export default MyLikedMovies;