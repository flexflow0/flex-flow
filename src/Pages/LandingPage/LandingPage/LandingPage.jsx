import { useNavigate } from "react-router-dom";
import ContactUs from "../../ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import EnjoyTV from "../EnjoyTV/EnjoyTV";
import FrequentlyAsked from "../FrequentlyAsked/FrequentlyAsked";
import ProfilesKids from "../ProfilesKids/ProfilesKids";
import WatchSector from "../Watch sector/WatchSector";
import WatchOffline from "../WatchOffline/WatchOffline";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Loading from "../../Shared/Loading";


const LandingPage = () => {
    const navigate = useNavigate()
    const { user, loading } = useAuth()
    if (loading) {
        return <div className="h-screen w-full flex items-center justify-center">
            <div className="h-[200px]">
                <Loading />
            </div>
        </div>
    }
    if (user) {
        navigate("/home")
    }


    return (
        <div>
            <Banner></Banner>
            <EnjoyTV></EnjoyTV>
            <WatchOffline></WatchOffline>
            <WatchSector></WatchSector>
            <ProfilesKids></ProfilesKids>
            <FrequentlyAsked></FrequentlyAsked>
            <ContactUs></ContactUs>
        </div>
    );

};

export default LandingPage;