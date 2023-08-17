import { Link } from "react-router-dom";
import Navbar from "../../LandingPage/Shared/Navbar/Navbar";

const Payment = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>Payment</h1>
            <Link to='/movieslist'> <button className="btn text-white bg-purple-800 ">Next</button><br />
                  </Link>
            
        </div>
    );
};

export default Payment;