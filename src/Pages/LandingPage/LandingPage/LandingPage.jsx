import Banner from "../Banner/Banner";
import EnjoyTV from "../EnjoyTV/EnjoyTV";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import ProfilesKids from "../ProfilesKids/ProfilesKids";
import Navbar from "../Shared/Navbar/Navbar";
import WatchSector from "../Watch sector/WatchSector";
import WatchOffline from "../WatchOffline/WatchOffline";


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