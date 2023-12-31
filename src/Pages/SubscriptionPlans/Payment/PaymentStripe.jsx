import { Link } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useState } from "react";

const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);

const PaymentStripe = () => {
    // const [cart] = useSelectedData()
    // const total = cart.reduce((sum, item) => item.price + sum, 0);
    // const amount = total * 100
    // console.log(amount);

    const [disable, setDisable] = useState(true)
    return (
        <div className=" rounded-lg py-12">
            <div className='w-[100%] md:w-[90%] mx-auto  border border-purple-800'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm setDisable={setDisable} />
                </Elements>
                <div className="text-center">
                    <Link to='../choosepay' className="btn  w-64 font-bold rounded mb-10  text-white bg-purple-800 border hover:border-[#830FEA] ">Back</Link>
                    <button disabled={disable} className="btn  w-64 font-bold rounded mb-10  text-white bg-purple-800 border hover:border-[#830FEA] ">
                        <Link to='/home'>
                            Next
                        </Link>
                    </button>
                </div>
                <br />
            </div>
            <hr className='border-[#830FEA]' />
        </div>
    );
};

export default PaymentStripe;
