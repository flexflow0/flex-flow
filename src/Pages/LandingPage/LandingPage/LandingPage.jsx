import Banner from "../Banner/Banner";
import EnjoyTV from "../EnjoyTV/EnjoyTV";
import ProfilesKids from "../ProfilesKids/ProfilesKids";
import Navbar from "../Shared/Navbar/Navbar";
import WatchOffline from "../WatchOffline/WatchOffline";


const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <EnjoyTV></EnjoyTV>
            <WatchOffline></WatchOffline>
            <ProfilesKids></ProfilesKids>
        </div>
    );
};

export default LandingPage;