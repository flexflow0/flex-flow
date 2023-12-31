/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import {
    useStripe,
    useElements,
    CardElement,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import useAuth from '../../../Hooks/useAuth/useAuth';

const CheckForm = ({ setDisable }) => {
    const { user, price, plan } = useAuth()

    const stripe = useStripe();
    const [processing, setProcessing] = useState(false)
    const [transaction, setTransaction] = useState('')
    const [clientSecret, setClientSecret] = useState('')

    const element = useElements()




    if (price <= 0) {
        toast.error('Make sure you have selected your course')

    }


    useEffect(() => {

        if (price > 0) {
            axios('https://flex-flow-server.vercel.app/create-payment-intent')
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                    console.log(res.data.clientSecret);
                })

            if (price > 0) {
                axios.post('https://flex-flow-server.vercel.app/create-payment-intent', { price }).then(res => {

                    setClientSecret(res.data.clientSecret);
                    console.log(res.data.clientSecret);
                })
                    .catch(error => {
                        console.error("Error fetching client secret:", error);
                    });
            }
        }


    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !element) return;
        // Check for clientSecret
        if (clientSecret) {
            const card = element.getElement(CardElement)
            if (card === null) return;

            setProcessing(true)
            // Use your card Element with other Stripe.js APIs
            const { error } = await stripe.createPaymentMethod({
                type: 'card',
                card,
            });
            if (error) {
                setProcessing(false)
                console.log(confirmError);
                toast.error(error.message)

            } else {
                setTransaction('')
            }

            const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: {
                        card: card,
                        billing_details: {
                            email: user?.email || 'Unknown',
                            name: user?.displayName || 'Anonymous',
                        },
                    },
                },
            );
            if (confirmError) {
                console.log(confirmError);
                toast.error(confirmError)

                setProcessing(false)
            }
            if (paymentIntent.status === 'succeeded') {
                setTransaction(paymentIntent.id)

                const payment = {
                    email: user?.email,
                    name: user?.displayName,
                    transactionId: paymentIntent.id,
                    price: price,
                    plan: plan || "unknown",
                    status: 'proceed', // expired, proceed, 
                    paymentMethod: 'stripe', // stripe, SSLCommerz, 

                }
                console.log(payment);
                fetch('https://flex-flow-server.vercel.app/payment-stripe', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payment)

                }).then(res => res.json()).then(data => {
                    if (data.insertedId) {
                        toast.success('Payment successful')

                    }

                })
                if (payment) {
                    setTransaction(paymentIntent.id)
                }

                setProcessing(false)
            }
        }

        if (!processing && transaction) {
            setDisable(false)
        }


    }

    return (
        <form onSubmit={handleSubmit} className='w-full flex flex-col h-[500px]  md:w-[60%] mx-auto'>
            <CardElement className='bg-base-100 border border-[#830FEA] py-2 px-5 rounded-xl my-auto shadow-xl'
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <div className='text-center mb-auto mt-5'>

                <button disabled={!stripe || !element || processing} type="submit" className='btn  border-2 border-[#8700f5] text-[#8700f5] mt-3 rounded-lg text-lg px-10 hover:bg-[#8700f5] shadow-inherit hover:text-white relative' >
                    {processing ? <div className='h-10'>
                        <Loading className="h-full my-auto" />
                    </div> : 'Confirm Payment'}
                </button>
            </div>
            {/* Show error message to your customers */}
            {
                transaction && <p className='mb-10 text-green-500'>Transaction is Successfully Done ,<br /> Transaction ID: <span className='text-[#9d2cfa]'>{transaction}</span></p>
            }

            <Toaster />
        </form>
    );
};

export default CheckForm;