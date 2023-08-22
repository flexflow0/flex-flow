import CompanyInfoBanner from "../CompanyInfoBanner/CompanyInfoBanner";
import MainBanner from "../MainBanner/MainBanner";
import MoviesList from "../Movies/MoviesList/MoviesList";
import NewReleasedMovies from "../Movies/NewReleasedMovies/NewReleasedMovies";

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            {/* <MoviesList></MoviesList>    */}
            {/* <PopularFlicks></PopularFlicks> */}
            <NewReleasedMovies></NewReleasedMovies>
            <CompanyInfoBanner></CompanyInfoBanner>
        </div>
    );
};

export default Home;