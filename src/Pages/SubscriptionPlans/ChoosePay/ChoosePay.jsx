import { Link } from "react-router-dom";

const ChoosePay = () => {
    return (
        <div>
            <h1>Choose  Payment</h1>
            <Link to='/payment'> <button className="btn text-white bg-purple-800 ">Next</button><br />
                  </Link>
        </div>
    );
};

export default ChoosePay;