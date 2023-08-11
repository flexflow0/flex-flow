import Banner from "../Banner/Banner";
import EnjoyTV from "../EnjoyTV/EnjoyTV";
import ProfilesKids from "../ProfilesKids/ProfilesKids";
import WatchOffline from "../WatchOffline/WatchOffline";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import Navbar from "../Navbar/Navbar";
import WatchSector from "../Watch sector/WatchSector";

const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <EnjoyTV></EnjoyTV>
            <WatchOffline></WatchOffline>
            <WatchSector></WatchSector>
            <ProfilesKids></ProfilesKids>
            <FrequentlyAsked></FrequentlyAsked>
        </div>
    );
};

export default LandingPage;