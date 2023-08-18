
import MainBanner from "../MainBanner/MainBanner";
import MoviesList from "../Movies/MoviesList/MoviesList";
import PopularFlicks from "../Movies/PopularFlicks/PopularFlicks";

// import MainNavbar from "../MainNavbar/MainNavbar";


const Home = () => {
    return (
        <div>
            
            <MainBanner></MainBanner>
            <MoviesList></MoviesList>
            <PopularFlicks></PopularFlicks>
         
        </div>
    );
};

export default Home;