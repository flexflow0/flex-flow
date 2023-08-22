import CompanyInfoBanner from "../CompanyInfoBanner/CompanyInfoBanner";
import MainBanner from "../MainBanner/MainBanner";
import NewReleasedMovies from "../Movies/NewReleasedMovies/NewReleasedMovies";
import TopRatedMovies from "../Movies/TopRatedMovies/TopRatedMovies";

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            {/* <MoviesList></MoviesList> */}
            {/* <PopularFlicks></PopularFlicks> */}
            <NewReleasedMovies></NewReleasedMovies>
            <TopRatedMovies></TopRatedMovies>
            <CompanyInfoBanner></CompanyInfoBanner>
        </div>
    );
};

export default Home;