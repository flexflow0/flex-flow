import { useEffect, useState } from "react";

const PaymentHistory = () => {
    const [da, setda] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/payment")
            .then((res) => res.json())
            .then((data) => setda(data));
    }, []);
    console.log(da);
    return (
        <div className="p-10 text-2xl">
            {
            da.map(pdata => <div className=" ">
           <div className=" border-2 border-purple-600 p-5 rounded  my-5 flex gap-10">
            <p>{pdata.name}</p>
            <p>{pdata.email}</p>
            <p>${pdata.price}</p>
            <p>{pdata.paymentMethod}</p></div>
            </div>
            )
            }

            
        </div>
    );
};

export default PaymentHistory;