import { Link } from "react-router-dom";
import { FaCheckCircle } from 'react-icons/fa';
import useAuth from "../../../Hooks/useAuth/useAuth";

const ChooseThePlan = () => {
    const { setPrice, setPlan } = useAuth()
    return (
        <div className=" border-2 border-purple-900 lg:m-12 m-4 rounded-lg">
            <div className="text-white pb-20 pt-10 px-12">
                <div className="pb-8">
                    <p className="text-sm">STEP 1 OF 3</p>
                    <p className="text-2xl font-bold pb-5 pt-1">Choose the plan thats right for you</p>
                </div>
                <div >
                    <div className="lg:grid lg:grid-cols-4 grid grid-cols-1 lg:gap-2 gap-4">
                        <Link to='/choosepay' onClick={() => {
                            setPlan("Premium")
                            setPrice(9, 99)
                        }}>
                            <div className="card w-full  shadow-xl border border-gray-500 p-1 rounded-lg">
                                <div className="bg-gradient-to-r from-blue-900 to-red-800 rounded-lg text-left  px-4 pb-10 pt-3 w-full">
                                    <p className="font-bold ">Premium</p>
                                    <p>US$9,99</p>
                                </div>
                                <div className="px-5 py-3 ">
                                    <div >

                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-red-800"></FaCheckCircle></div>
                                            <div>
                                                <p>Monthly price</p>
                                                <p>US$9,99</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-red-800"></FaCheckCircle></div>
                                            <div>
                                                <p>Resolution</p>
                                                <p>4k (Ultra HD) + HDR</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-red-800"></FaCheckCircle></div>
                                            <div>
                                                <p>Video quality</p>
                                                <p>Best</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center py-3">
                                            <div><FaCheckCircle className="text-xl text-red-800"></FaCheckCircle></div>
                                            <div>
                                                <p>Supported devices</p>
                                                <p>TV,computer,mobile phone,tablet</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>

                        <Link to='/choosepay' onClick={() => {
                            setPlan("Standard")
                            setPrice(7, 99)
                        }}>
                            <div className="card w-full  shadow-xl border border-gray-500 p-1 rounded-lg">
                                <div className="bg-gradient-to-r from-blue-900 to-purple-600 rounded-lg text-left  px-4 pb-10 pt-3 w-full">
                                    <p className="font-bold ">Standard</p>
                                    <p>US$7,99</p>
                                </div>
                                <div className="px-5 py-3 ">
                                    <div >

                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-purple-600"></FaCheckCircle></div>
                                            <div>
                                                <p>Monthly price</p>
                                                <p>US$7,99</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-purple-600"></FaCheckCircle></div>
                                            <div>
                                                <p>Resolution</p>
                                                <p>1080p (Full HD)</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-purple-600"></FaCheckCircle></div>
                                            <div>
                                                <p>Video quality</p>
                                                <p>Better</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center py-3">
                                            <div><FaCheckCircle className="text-xl text-purple-600"></FaCheckCircle></div>
                                            <div>
                                                <p>Supported devices</p>
                                                <p>TV,computer,mobile phone,tablet</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link to='/choosepay' onClick={() => {
                            setPlan("Basic")
                            setPrice(3, 99)
                        }}>
                            <div className="card w-full  shadow-xl border border-gray-500 p-1 rounded-lg">
                                <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg text-left  px-4 pb-10 pt-3 w-full">
                                    <p className="font-bold ">Basic</p>
                                    <p>US$3,99</p>
                                </div>
                                <div className="px-5 py-3 ">
                                    <div >

                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-purple-900"></FaCheckCircle></div>
                                            <div>
                                                <p>Monthly price</p>
                                                <p>US$3,99</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl  text-purple-900"></FaCheckCircle></div>
                                            <div>
                                                <p>Resolution</p>
                                                <p>720p (HD)</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl  text-purple-900"></FaCheckCircle></div>
                                            <div>
                                                <p>Video quality</p>
                                                <p>Good</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center py-3">
                                            <div><FaCheckCircle className="text-xl  text-purple-900"></FaCheckCircle></div>
                                            <div>
                                                <p>Supported devices</p>
                                                <p>TV,computer,mobile phone,tablet</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                        <Link to='/choosepay' onClick={() => {
                            setPlan("Mobile")
                            setPrice(2, 99)
                        }}>
                            <div className="card w-full  shadow-xl border border-gray-500 p-1 rounded-lg">
                                <div className="bg-gradient-to-r from-blue-950 to-blue-700 rounded-lg text-left  px-4 pb-10 pt-3 w-full">
                                    <p className="font-bold ">Mobile</p>
                                    <p>US$2,99</p>
                                </div>
                                <div className="px-5 py-3 ">
                                    <div >

                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-blue-700"></FaCheckCircle></div>
                                            <div>
                                                <p>Monthly price</p>
                                                <p>US$2,99</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-blue-700"></FaCheckCircle></div>
                                            <div>
                                                <p>Resolution</p>
                                                <p>480p</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center  border-b-2 border-gray-700 py-3">
                                            <div><FaCheckCircle className="text-xl text-blue-700"></FaCheckCircle></div>
                                            <div>
                                                <p>Video quality</p>
                                                <p>Good</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 items-center py-3">
                                            <div><FaCheckCircle className="text-xl text-blue-700"></FaCheckCircle></div>
                                            <div>
                                                <p>Supported devices</p>
                                                <p>Mobile phone,tablet</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <p className="py-8">HD(720p),Full HD(1080p),Ultra HD(4k) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions.See our <span className="text-blue-700">Terms of Use</span> for more details.Only people who live with you may use your account. Watch on 4 different devices at the same time with premium, 2 with standard and 1 with Basic and Mobile.</p>
                    </div>

                </div>
                <div className="flex items-center justify-center ">
                    <Link to='/choosepay'> <button className="btn text-white px-36 w-full rounded-lg bg-purple-800 ">Next</button><br />
                    </Link>
                </div>
            </div>
            <hr className='border-[#830FEA]' />
        </div>
    );
};

export default ChooseThePlan;