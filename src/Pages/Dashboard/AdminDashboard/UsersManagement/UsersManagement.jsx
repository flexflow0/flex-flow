import axios from "axios";
import { useEffect, useState } from "react";

const UsersManagement = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        axios('http://localhost:5000/users').then(res => setUsers(res.data))
    }, [])
    console.log(users);
    return (
        <div>
            <h1>this is users</h1>

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
                            users?.map(({ name, _id, email, photoURL, birthDate }, idx) => <tr key={_id}
                                className="hover"
                            >
                                <th>{idx + 1}</th>
                                <th>
                                    <div className="mask overflow-hidden border-2 border-[#8700f5] rounded-full w-12 h-12">
                                        <img className="w-12 h-12" src={photoURL || 'https://i.ibb.co/c8n7mZL/1623060744486.jpg'} alt="Profile Pic" />

                                    </div></th>
                                <td>{name}</td>
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

export default UsersManagement;