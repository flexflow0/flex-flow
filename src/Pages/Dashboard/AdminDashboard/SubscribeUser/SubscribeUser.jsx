import { useEffect, useState } from "react";
import DashboardTop from "../../../../components/dashboardTop";


const SubscribeUser = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        fetch('https://flex-flow-server.vercel.app/subscribe')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    console.log(users);
    return (
        <div className="MyContainer">
            <DashboardTop></DashboardTop>

            <div className="flex MyContainer my-3">
                <h1 className="w-full text-2xl font5">Total Users: {users?.length || 0}</h1>

                <input type="text" placeholder="Search By Email..." name="search" className="input input-bordered w-full max-w-[500px] rounded-full border-[#8700f5] border-2" required />
            </div>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map(({ _id, email }, index) => <tr
                                key={_id}
                                className="hover"
                            >

                                <th>{index + 1}</th>
                                <td>{email}</td>


                            </tr>)
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default SubscribeUser;