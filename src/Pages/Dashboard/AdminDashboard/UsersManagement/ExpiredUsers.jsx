import axios from "axios";
import { useEffect, useState } from "react";
import DashboardTop from "../../../../components/dashboardTop";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "../../../../Redux/Features/API/baseApi";
import Loading from "../../../Shared/Loading";

const ExpiredUsers = () => {
    const { data: users, isLoading } = useGetUsersQuery()
    if (isLoading) {
        return <div className="h-full w-full flex items-center justify-center">
            <div className="h-[200px]">
                <Loading />
            </div>

        </div>
    }
    console.log(users);
    return (
        <div className="MyContainer">
            <DashboardTop />
            {/* TODO: add search Icon */}
            <div className="flex MyContainer my-3">
                <h1 className="w-full text-2xl font5">Total Users: {users?.length || 0}</h1>

                <input type="text" placeholder="Search By Name or Email..." name="search" className="input input-bordered w-full max-w-[500px] rounded-full border-[#8700f5] border-2" required />
            </div>


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
                            users?.map(({ name, _id, email, photoURL, birthDate }, idx) => <tr key = {_id}
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

export default ExpiredUsers;