
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

const SSLCommerzPay = () => {

    const { user, plan, price, setTempData } = useAuth()
    const navigate = useNavigate()
    const handelInfo = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const number = form.number.value;
        const currency = form.currency.value;
        console.log(number, email, currency, plan, price);
        if (!price || !plan) {
            toast.error("please select a plan at first")
            setTimeout(() => {
                navigate("../choosetheplan")
            }, 1300);

        } else {

            const paymentInfo = {
                number, email, currency, plan, price, name: user?.displayName
            }
            setTempData(paymentInfo)

            if (paymentInfo) {
                axios.post("http://localhost:5000/ssl-payment", paymentInfo).then(res => {
                    const url = res.data.url
                    console.log(res.data)
                    window.location.replace(url)
                })
            }

        }
    }
    return (
        <div className="h-[calc(100vh-70px)] flex">

            <div className="my-auto mx-auto">
                <form onSubmit={handelInfo} className="max-w-[600px] p-10 bg-slate-900 rounded-lg glass mt-10 mx-auto">
                    <div className="form-control ">
                        <input required type="email" value={user?.email} placeholder="Enter Your Email" name="email" className="rounded-3xl border border-[#830FEA] input input-bordered" />
                    </div>

                    <select required className="select select-bordered my-2 rounded-3xl border border-[#830FEA] w-full  " name="currency" defaultValue={"Select Currency"}>
                        <option disabled className="rounded-3xl order border-[#830FEA]">Select Currency</option>
                        <option>USD</option>
                        <option>EUR</option>
                        <option>JPY</option>
                        <option>GBP</option>
                        <option>AUD</option>
                        <option>CAD</option>
                        <option>CHF</option>
                        <option>CNY</option>
                        <option>INR</option>
                        <option>BRL</option>
                        <option>RUB</option>
                        <option>KRW</option>
                        <option>MXN</option>
                        <option>SGD</option>
                        <option>HKD</option>
                        <option>ZAR</option>
                        <option>NZD</option>
                        <option>SEK</option>
                        <option>TRY</option>
                        <option>NOK</option>
                        <option>PLN</option>
                        <option>DKK</option>
                        <option>ILS</option>
                        <option>SAR</option>
                        <option>AED</option>
                        <option>THB</option>
                        <option>MYR</option>
                        <option className="rounded-3xl order border-[#830FEA]">IDR</option>
                    </select>

                    <div className="form-control ">
                        <input required type="tel" placeholder="Your Number +017XXXXXXX.." name="number" className="rounded-3xl border border-[#830FEA] input input-bordered" />
                    </div>

                    <div className="form-control my-2 flex flex-col md:flex-row gap-4">
                        <Link to="../choosetheplan">
                            <button to="../choosetheplan" className=" w-full bg-base-100 rounded-3xl border border-[#830FEA] px-5 py-2" > <span className="bg-[#380268] py-1 px-3 rounded-full font-medium">{plan}</span> _______ <span className="bg-[#380268] py-1 px-3 rounded-full font-medium">
                                ( ${price}.00 usd )</span></button>
                        </Link>
                        <button type="submit" className="btn px-16 py-2  rounded-full text-white bg-purple-800 border border-[#830FEA] hover:border-[#830FEA]">Next</button><br />
                    </div>




                    <div className="text-center">
                        <Link to="../choosepay" className="btn  w-64 font-bold rounded mt-10  text-white bg-purple-800 border hover:border-[#830FEA] border-[#830FEA]">Back</Link><br />
                    </div>
                </form>

            </div >


            <Toaster />
        </div >
    );
};

export default SSLCommerzPay;