import CompanyInfoBanner from "../CompanyInfoBanner/CompanyInfoBanner";
import MainBanner from "../MainBanner/MainBanner";
import NewReleasedMovies from "../Movies/NewReleasedMovies/NewReleasedMovies";
import TopRatedMovies from "../Movies/TopRatedMovies/TopRatedMovies";

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <NewReleasedMovies></NewReleasedMovies>
            <TopRatedMovies></TopRatedMovies>
            <hr className='border-[#830FEA]' />
            <CompanyInfoBanner></CompanyInfoBanner>
            <hr className='border-[#830FEA]' />
        </div>
    );
};

export default Home;