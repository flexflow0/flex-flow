import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';


const ChoosePlan = () => {
    return (
        <div  >
            <div className="">
                <div className="text-white flex justify-center items-center py-12">
                    <div className="lg:p-8 p-4 lg:w-[24%]  border-purple-800 rounded">
                        <div className=" ">
                            <div>
                                <p className="flex justify-center items-center"><FaCheckCircle className="text-2xl text-purple-800  "></FaCheckCircle></p>
                                <p className="text-xs mt-4 text-center">STEP 1 OF 3</p>
                            </div>
                        </div>
                        <div className="">
                            <p className="font-bold text-xl pb-4 lg:text-center text-center">Choose your plan.</p>
                            <p className="text-md flex gap-2 lg:items-center"><FaCheck className="text-purple-800  lg:text-xl"></FaCheck>No commitments,cancel at any  time.</p>
                            <p className="text-md flex gap-2 lg:items-center py-2"><FaCheck className="text-purple-800  lg:text-xl"></FaCheck>Everything on Flexflow for one  low price.</p>
                            <p className="text-md flex gap-2 lg:items-center"><FaCheck className="text-purple-800  lg:text-xl"></FaCheck>No adverts and no extra fees. Ever.</p>
                        </div>
                        <Link to='/choosetheplan'> <button className="btn text-white w-full rounded-lg bg-purple-800 mt-8">Next</button><br />
                        </Link>
                    </div>
                </div>
                <hr className='border-[#830FEA]' />
            </div>
        </div>
    );
};

export default ChoosePlan;