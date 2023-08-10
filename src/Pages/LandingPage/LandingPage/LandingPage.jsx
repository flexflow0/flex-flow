import Banner from "../Banner/Banner";

import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import Navbar from "../Navbar/Navbar";

const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FrequentlyAsked></FrequentlyAsked>
        </div>
    );
};

export default LandingPage;