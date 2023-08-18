import { Link } from "react-router-dom";

const ChoosePay = () => {
    return (
        <div>
            <div className="text-center  pt-5 px-20 text-white ">

                <div className="border-2 border-purple-900 p-5">
                    <p>STEP 3 OF 3</p>
                    <h1 className=" text-5xl">Choose how to pay</h1>
                    <p className=" text-xl m-2">Your payment is encrypted and you can change<br /> how you pay at any time.</p>
                    <h1 className="text-2xl">Secure for peace of mind.</h1>
                    <h1 className="text-2xl">Cancel easily online.</h1>
                    <div>
                        <img className="w-[200px] mt-10 h-[100px] mx-auto" src="https://i.ibb.co/RYdjT3X/strip.jpg" alt="" />
                    </div>
                    <Link to='/payment'> <button className="btn w-60 rounded mt-10 text-white bg-purple-800 ">Next</button><br />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ChoosePay;