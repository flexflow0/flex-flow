import { useContext } from "react";
import useUser from "../../../../Hooks/useUser/useUser";
import Loading from "../../../Shared/Loading";
import { AuthContext } from "../../../Provider/AuthProvider";
import ShowListedMovies from "../../../Shared/ShowListedMovies/ShowListedMovies";
import DashboardTop from "../../../../components/dashboardTop";

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
            <DashboardTop></DashboardTop>
            {
                favorites.length === 0 ?
                    <div className="my-10 text-2xl text-center">
                        <h2>"No movies to Favorites"</h2>
                    </div> :
                    <ShowListedMovies
                        list={favorites}
                        to="favorites"
                    ></ShowListedMovies>
            }
        </div>
    );
};

export default MyFavorites;