import { Link } from "react-router-dom";

const Payment = () => {
    return (
        <div>
            <h1>Payment</h1>
            <Link to='/movieslist'> <button className="btn text-white bg-purple-800 ">Next</button><br />
                  </Link>
            
        </div>
    );
};

export default Payment;