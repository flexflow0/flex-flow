
import { Link } from "react-router-dom";
import Navbar from "../../LandingPage/Shared/Navbar/Navbar";

// import useSelectedData from '../../../../Hooks/useSelectedData';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe(`${import.meta.env.VITE_PK}`);
// TODO: secret this into .env.local ^^^^^^^^^^^^^^^^☝^^^^^^^^^^^
const stripePromise = loadStripe(`pk_test_51NEwMYLtOU21zLJnTHK2UMaEImqC0NBzvy6bQuOUG2OmU5bAYHTnwQeKZVBooWJAf21OfHaduJ5wkYZsL8mScwQi00S21vf22c`);
const Payment = () => {
    // const [cart] = useSelectedData()
    // const total = cart.reduce((sum, item) => item.price + sum, 0);
    // const amount = total * 100
    // console.log(amount);

    return (
      <div>
           <Navbar></Navbar>

        <div className='w-[97%] md:w-[90%] mx-auto '>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
            <Link to='/movieslist'> <button className="btn text-white bg-purple-800 ">Next</button><br /> </Link>
           </div>
            
        </div>
    );
};

export default Payment;