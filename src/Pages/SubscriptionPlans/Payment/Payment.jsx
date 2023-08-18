
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
        <div className='w-[97%] md:w-[90%] mx-auto '>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;