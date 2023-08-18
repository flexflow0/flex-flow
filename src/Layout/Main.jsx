import Footer from "../Pages/Shared/Footer";
import MainNavbar from "../Pages/Home/MainNavbar/MainNavbar";
import { Outlet } from "react-router-dom";

const Main = () => {

    return (
        <div>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;