import { useContext } from "react";
import CompanyInfoBanner from "../CompanyInfoBanner/CompanyInfoBanner";
import MainBanner from "../MainBanner/MainBanner";
import NewReleasedMovies from "../Movies/NewReleasedMovies/NewReleasedMovies";
import TopRatedMovies from "../Movies/TopRatedMovies/TopRatedMovies";
import { AuthContext } from "../../Provider/AuthProvider";
import useUser from "../../../Hooks/useUser/useUser";

const Home = () => {

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return;
    }

    const [userData, isLoading] = useUser(user.email);
    if (isLoading) {
        return;
    }

    return (
        <div>
            <MainBanner></MainBanner>
            <NewReleasedMovies
                age={userData?.birthDate}
            ></NewReleasedMovies>
            <TopRatedMovies
                age={userData?.birthDate}
            ></TopRatedMovies>
            <hr className='border-[#830FEA]' />
            <CompanyInfoBanner></CompanyInfoBanner>
            <hr className='border-[#830FEA]' />
        </div>
    );
};

export default Home;