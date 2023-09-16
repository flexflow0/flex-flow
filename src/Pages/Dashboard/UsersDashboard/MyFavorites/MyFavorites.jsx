import { useContext } from "react";
import useUser from "../../../../Hooks/useUser/useUser";
import Loading from "../../../Shared/Loading";
import { AuthContext } from "../../../Provider/AuthProvider";
import useLists from "../../../../Hooks/useLists/useLists";
import ShowListedMovies from "../../../Shared/ShowListedMovies/ShowListedMovies";

const MyFavorites = () => {
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

    // console.log(userData);
    const { favorites } = userData;

    return (
        <div>
            <ShowListedMovies
                list={favorites}
            ></ShowListedMovies>
        </div>
    );
};

export default MyFavorites;