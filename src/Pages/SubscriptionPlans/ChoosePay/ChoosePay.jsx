import { Link } from "react-router-dom";

const ChoosePay = () => {

    return (
        <div className="text-center pt-5 lg:px-20 px-5 mb-10 mt-5 text-white ">
            <div className="border-2 rounded-lg border-purple-900 p-5">
                <p>STEP 3 OF 3</p>
                <h1 className=" text-5xl font-semibold mt-3 mb-5">Choose how to pay</h1>
                <p className=" text-xl m-2">Your payment is encrypted and you can change<br /> how you pay at any time.</p>
                <h1 className="text-2xl text-purple-500">Secure for peace of mind.</h1>
                <h1 className="text-2xl text-orange-400">Cancel easily online.</h1>
                <div className="flex flex-col md:flex-row gap-5 justify-center">
                    <Link to='/paymentStripe'>
                        <img className="w-[400px] rounded-lg mt-10 h-[200px] mx-auto" src="https://i.ibb.co/RYdjT3X/strip.jpg" alt="" />
                    </Link>
                    <Link to='/paymentSSLCommerz'>
                        <img className="w-[400px] rounded-lg mt-10 h-[200px] mx-auto" src="https://i.ibb.co/Vw4Jt2t/SSLCOMMERZ-banner.webp" alt="" />
                    </Link>
                </div>

                <Link to="../choosetheplan" className="btn mt-5 w-64 font-bold rounded mb-10  text-white bg-purple-800 border hover:border-[#830FEA]">Back</Link><br />
            </div>
            <hr className='border-[#830FEA]' />
        </div>
    );
};

export default ChoosePay;