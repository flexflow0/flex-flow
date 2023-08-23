
import { Link } from "react-router-dom";

// import useSelectedData from '../../../../Hooks/useSelectedData';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);

const Payment = () => {
    // const [cart] = useSelectedData()
    // const total = cart.reduce((sum, item) => item.price + sum, 0);
    // const amount = total * 100
    // console.log(amount);

    return (
        <div className=" rounded-lg py-12">

            <div className='w-[100%] md:w-[90%] mx-auto  border border-purple-800'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>

                <div className="text-center">
                    <Link to='/home' className="btn  w-64 font-bold rounded mb-10  text-white bg-purple-800 border hover:border-[#830FEA] ">Next</Link>
                </div>
                <br />

            </div>
        </div>
    );
};

export default Payment;
