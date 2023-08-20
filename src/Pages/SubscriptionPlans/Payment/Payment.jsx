
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
        <div className="">

            <div className='w-[97%] md:w-[90%] ml-10  border border-purple-800 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
                <Link to='/home'> <button className="btn w-64 font-bold rounded mb-10 ml-[500px] text-white bg-purple-800 ">Next</button><br /> </Link>
            </div>


        <div className='w-[97%] md:w-[90%] mx-auto '>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
            <Link to='/home'> <button className="btn text-white bg-purple-800 ">Next</button><br /> </Link>
           </div>
            
        </div>
    );
};

export default Payment;
