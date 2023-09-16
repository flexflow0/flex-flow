import DashboardTop from "../../../../components/dashboardTop";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import { useGetPaymentHistoryQuery } from "../../../../Redux/Features/API/baseApi";
import Loading from "../../../Shared/Loading";

const PaymentHistory = () => {
    const { user, loading } = useAuth()

    if (loading) {
        return <div className="h-full w-full flex items-center justify-center">
            <div className="h-[200px]">
                <Loading />
            </div>

        </div>
    }


    console.log(user?.email);
    const { data: subscriptions, isLoading } = useGetPaymentHistoryQuery(user?.email)
    if (isLoading || loading) {
        return <div className="h-full w-full flex items-center justify-center">
            <div className="h-[200px]">
                <Loading />
            </div>

        </div>
    }

    // console.log(subscriptions);
    return (
        <div className="MyContainer">
            <DashboardTop />
            {/* TODO: add search Icon */}
            <div className="flex MyContainer  my-3">
                <h1 className="w-full text-2xl font5">Total Subscriptions: {subscriptions?.length || 0}</h1>

            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Plan</th>
                            <th>Price</th>
                            <th>Transaction ID</th>
                            <th>Status/Paid Status</th>
                            <th>Payment Method</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}

                        {
                            subscriptions?.map(({ name, _id, email, transactionId, price, plan, status, paidStatus, paymentMethod }, idx) => <tr key={_id}
                                className="hover"
                            >
                                <th>{idx + 1}</th>

                                <td className="font-semibold">{name}</td>
                                <td>{email}</td>
                                <td>{plan}</td>
                                <td>{price}</td>
                                <td>{transactionId}</td>
                                <td>{status || (paidStatus && "proceed")}</td>
                                <td>{paymentMethod}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;