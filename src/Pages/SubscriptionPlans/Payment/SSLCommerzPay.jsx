
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";

const SSLCommerzPay = () => {

    const { user, plan, price } = useAuth()

    const handelInfo = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const number = form.number.value;
        const currency = form.currency.value;
        console.log(number, email, currency, plan, price);

    }
    return (
        <div className="h-[calc(100vh-70px)] flex">

            <div className="my-auto mx-auto">
                <form onSubmit={handelInfo} className="max-w-[600px] p-10 bg-slate-900 rounded-lg glass mt-10 mx-auto">
                    <div className="form-control ">
                        <input type="email" value={user?.email} placeholder="Enter Your Email" name="email" className="rounded-3xl border border-[#830FEA] input input-bordered" />
                    </div>

                    <select className="select select-bordered my-2 rounded-3xl border border-[#830FEA] w-full  " name="currency">
                        <option disabled selected className="rounded-3xl order border-[#830FEA]">Select Currency</option>
                        <option>USD - United States Dollar</option>
                        <option>EUR - Euro</option>
                        <option>JPY - Japanese Yen</option>
                        <option>GBP - British Pound Sterling</option>
                        <option>CAD - Canadian Dollar</option>
                        <option>AUD - Australian Dollar</option>
                        <option>CHF - Swiss Franc</option>
                        <option>CNY - Chinese Yuan Renminbi</option>
                        <option>INR - Indian Rupee</option>
                        <option>BRL - Brazilian Real</option>
                        <option>RUB - Russian Ruble</option>
                        <option>KRW - South Korean Won</option>
                        <option>MXN - Mexican Peso</option>
                        <option>SGD - Singapore Dollar</option>
                        <option>HKD - Hong Kong Dollar</option>
                        <option>ZAR - South African Rand</option>
                        <option>NZD - New Zealand Dollar</option>
                        <option>SEK - Swedish Krona</option>
                        <option>TRY - Turkish Lira</option>
                        <option>NOK - Norwegian Krone</option>
                        <option>PLN - Polish Złoty</option>
                        <option>DKK - Danish Krone</option>
                        <option>ILS - Israeli Shekel</option>
                        <option>SAR - Saudi Riyal</option>
                        <option>AED - Emirati Dirham</option>
                        <option>THB - Thai Baht</option>
                        <option>MYR - Malaysian Ringgit</option>
                        <option className="rounded-3xl order border-[#830FEA]">IDR - Indonesian Rupiah</option>
                    </select>

                    <div className="form-control ">
                        <input type="tel" placeholder="Your Number +017XXXXXXX.." name="number" className="rounded-3xl border border-[#830FEA] input input-bordered" />
                    </div>

                    <div className="form-control my-2 flex flex-col md:flex-row gap-4">
                        <button className="w-full bg-base-100 rounded-3xl border border-[#830FEA] px-5 py-2" > <span className="bg-[#380268] py-1 px-3 rounded-full font-medium">{plan}</span> _______ <span className="bg-[#380268] py-1 px-3 rounded-full font-medium">
                            ( ${price}.00 usd )</span></button>
                        <button type="submit" className="btn px-16 py-2  rounded-full text-white bg-purple-800 border border-[#830FEA] hover:border-[#830FEA]">Next</button><br />
                    </div>




                    <div className="text-center">
                        <Link to="../choosepay" className="btn  w-64 font-bold rounded mt-10  text-white bg-purple-800 border hover:border-[#830FEA] border-[#830FEA]">Back</Link><br />
                    </div>
                </form>

            </div>



        </div>
    );
};

export default SSLCommerzPay;