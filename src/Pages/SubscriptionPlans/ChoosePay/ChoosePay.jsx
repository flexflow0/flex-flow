import { Link } from "react-router-dom";
import Navbar from "../../LandingPage/Shared/Navbar/Navbar";

const ChoosePay = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Choose  Payment</h1>
            <Link to='/payment'> <button className="btn text-white bg-purple-800 ">Next</button><br />
                  </Link>
        </div>
    );
};

export default ChoosePay;