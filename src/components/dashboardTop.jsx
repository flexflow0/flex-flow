import React from 'react';
import useAuth from '../Hooks/useAuth/useAuth';
import { PiNotificationFill, PiNotificationBold } from "react-icons/pi";
const DashboardTop = () => {
    const { user } = useAuth()
    const isNotification = true
    return (
        <div className='flex justify-between mt-5 items-center '>
            <h1 className='text-5xl font3 ml-2 '>Welcome !  <span className='text-[#9747FF] -mt-5 text-3xl font5'>{user?.displayName}</span></h1>

            <div className="dropdown dropdown-end">
                <label tabIndex={0} className=' btn btn-ghost btn-circle' >
                    {
                        isNotification ? <PiNotificationFill fill='red ' size={20} /> :
                            <PiNotificationBold size={20} />
                    }
                </label>

                <ul tabIndex={0} className="mt-3 z-[1] p-2 rounded-xl shadow menu menu-sm dropdown-content bg-base-100  w-96">
                    <li>
                        <a className="justify-between">
                            New Admin Added
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>New Blog added</a></li>
                    <li><a>New Movie added</a></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardTop;