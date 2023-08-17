import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';


const ChoosePlan = () => {
    return (
        <div className="text-white flex justify-center items-center py-12">


            <div className="p-8 w-[24%]">
                <div className=" ">
                    <div>
                        <p className="flex justify-center items-center"><FaCheckCircle className="text-2xl text-red-800  "></FaCheckCircle></p>
                        <p className="text-xs mt-4 text-center">STEP 1 OF 3</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-bold text-xl pb-4 text-center">Choose your plan.</p>
                    <p className="text-md flex gap-2 items-center"><FaCheck className="text-red-800 text-xl"></FaCheck>No commitments,cancel at any  time.</p>
                    <p className="text-md flex gap-2 items-center py-2"><FaCheck className="text-red-800 text-xl"></FaCheck>Everything on Flexflow for one  low price.</p>
                    <p className="text-md flex gap-2 items-center"><FaCheck className="text-red-800 text-xl"></FaCheck>No adverts and no extra fees. Ever.</p>
                </div>

                <Link to='/choosetheplan'> <button className="btn text-white w-full rounded-lg bg-red-800 mt-8">Next</button><br />
                </Link>
            </div>

        </div>
    );
};

export default ChoosePlan;