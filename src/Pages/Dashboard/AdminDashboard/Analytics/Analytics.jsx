import { useEffect, useState } from "react";
import DashboardTop from "../../../../components/dashboardTop";
import axios from "axios";

const Analytics = () => {
    const [data ,setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setData(data.slice(3)) )
        
    }, [])
    console.log(data);
    return (
        <div className="MyContainer">
            <DashboardTop />
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Profile Pic</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date of Birth/Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}

                        {
                           data?.map(({ name, _id, email, photoURL, birthDate }, idx) => <tr key={_id}
                                className="hover"
                            >
                                <th>{idx + 1}</th>
                                <th>
                                    <div className="mask overflow-hidden border-2 border-[#8700f5] rounded-full w-12 h-12">
                                        <img className="w-12 h-12" src={photoURL || 'https://i.ibb.co/c8n7mZL/1623060744486.jpg'} alt="Profile Pic" />

                                    </div></th>
                                <td className="font-semibold">{name}</td>
                                <td>{email}</td>
                                <td>{birthDate}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Analytics;