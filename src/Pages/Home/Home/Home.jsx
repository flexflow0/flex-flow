

import CompanyInfoBanner from "../CompanyInfoBanner/CompanyInfoBanner";
import MainBanner from "../MainBanner/MainBanner";
import MoviesList from "../Movies/MoviesList/MoviesList";
import PopularFlicks from "../Movies/PopularFlicks/PopularFlicks";

const Home = () => {
    return (
        <div>
            <MainBanner></MainBanner>
            <MoviesList></MoviesList>
            <PopularFlicks></PopularFlicks>
            <CompanyInfoBanner></CompanyInfoBanner>
        </div>
    );
};

export default Home;