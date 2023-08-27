import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const SSLCommerzFailed = () => {

    toast.error("payment Failed")
    return (

        <>
            <div className="bg-gray-800 max-w-lg mx-auto p-10 my-40 rounded text-center">
                <Toaster />
                <h1 className="text-red-600">Payment Failed 🌋🌋</h1>

                <p>😭😭😭😭😭😭😭😭😭😭😭</p>


                <Link to="../home" className="btn  w-64 font-bold rounded mt-10  text-white bg-purple-800 border hover:border-[#830FEA] border-[#830FEA]">Back to Home</Link><br />
            </div>
        </>
    );
};

export default SSLCommerzFailed;