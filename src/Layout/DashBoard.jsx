import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { AuthContext } from '../Pages/Provider/AuthProvider';

import { useContext, useState } from 'react';

import { RiContactsBookUploadFill, RiUploadCloud2Fill } from 'react-icons/ri';
import { SiGoogleanalytics } from 'react-icons/si';
import { ImBlog } from 'react-icons/im';
import { MdPayment, MdWorkHistory, MdFavorite, MdWatchLater } from 'react-icons/md';

import { BiSolidObjectsHorizontalLeft, BiSolidLike, BiLogOut } from 'react-icons/bi';
import { FaUsersCog, FaUsersSlash } from 'react-icons/fa';
import Loading from '../Pages/Shared/Loading';
import { useGetAdminQuery } from '../Redux/Features/API/baseApi';
const Dashboard = () => {

    const { user, logout } = useContext(AuthContext)


    const { isLoading, data: isAdmin } = useGetAdminQuery(user?.email)
    if (isLoading) {
        return <div className="h-screen w-full flex items-center justify-center">
            <div className="h-[200px]">
                <Loading />
            </div>
        </div>
    }


    return (
        <div>

            <div className="drawer drawer-mobile  lg:drawer-open">
                <h1>{user?.name}</h1>
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content hear */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn bg-purple-800 drawer-button lg:hidden">Menu</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-purple-800 font-bo">
                        {/* <img className='w-[80px] rounded-full mx-auto mt-2' src={user.photoURL} alt="" /> */}

                        <div className='mx-auto mb-4 mt-2 text-white flex  items-center'>

                            <div className="mask overflow-hidden border-2 border-[#8700f5] rounded-2xl w-12 h-12">
                                <img className="w-12 h-12" src={user?.photoURL || 'https://i.ibb.co/c8n7mZL/1623060744486.jpg'} alt="Profile Pic" />

                            </div>
                            <div><h1 className=' hover:bg-opacity-50 text-lg font-bold px-2'>{user?.displayName}</h1>
                                <h1 className=' hover:bg-opacity-50 px-2'>{user?.email}</h1></div>
                        </div>
                        <div className="divider"></div>
                        {

                            isAdmin ? <div className='-mr-4'>
                                {/* Admin DashBoard */}


                                <li ><NavLink className='rounded-l-full font-semibold' to='/dashboard/uploadmovies'><RiUploadCloud2Fill /> Upload Movies</NavLink></li>
                                <li><NavLink className='rounded-l-full font-semibold' to='/dashboard/uploadtvseries'>
                                    <RiContactsBookUploadFill />
                                    Upload TV series </NavLink></li>
                                <li><NavLink className='rounded-l-full font-semibold' to='/dashboard/analytics'>
                                    <SiGoogleanalytics />
                                    View Analytics</NavLink></li>

                                <li><NavLink className='rounded-l-full font-semibold' to='/dashboard/writeablog'>
                                    <ImBlog />
                                    Write a Blog</NavLink></li>

                                <li><NavLink className='rounded-l-full font-semibold' to='/dashboard/viewallblogs'>
                                    <BiSolidObjectsHorizontalLeft />
                                    View All Blogs</NavLink></li>
                                <li><NavLink className='rounded-l-full font-semibold' to='/dashboard/usersManagement'>
                                    <FaUsersCog />
                                    Manage Users</NavLink></li>
                                <li><NavLink className='rounded-l-full font-semibold' to='/dashboard/ExpiredUsers'>
                                    <FaUsersSlash />
                                    Expired Users</NavLink></li>
                            </div>
                                : <div className='-mr-4'>
                                    {/*User DashBoard */}
                                    <li><NavLink
                                        className='rounded-l-full font-semibold'
                                        to='/dashboard/WatchLater'>
                                        <MdWatchLater />
                                        Watch Later</NavLink></li>
                                    <li><NavLink
                                        className='rounded-l-full font-semibold' to='/dashboard/likedmovies'>
                                        <BiSolidLike />
                                        My Liked Movies</NavLink></li>
                                    <li><NavLink
                                        className='rounded-l-full font-semibold' to='/dashboard/favourite'>
                                        <MdFavorite />
                                        My Favourite Movies
                                    </NavLink></li>
                                    <li><NavLink
                                        className='rounded-l-full font-semibold' to='/dashboard/watchhistory'>
                                        <MdWorkHistory />
                                        Watch History
                                    </NavLink></li>
                                    <li><NavLink
                                        className='rounded-l-full font-semibold' to='/dashboard/paymenthistory'>
                                        <MdPayment /> Payment history</NavLink></li>
                                </div>



                        }
                        {/* Sidebar content hear */}


                        <div className="divider"></div>
                        <li><Link
                            className='rounded-full font-semibold'
                            to='../home'><FaHome></FaHome>Main Home</Link></li>

                        <li
                            onClick={() => logout()}
                        ><Link
                            className='rounded-full font-semibold'
                            to='../login'><BiLogOut />Logout</Link></li>



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;





