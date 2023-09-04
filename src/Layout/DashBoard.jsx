import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { AuthContext } from '../Pages/Provider/AuthProvider';
import { useContext } from 'react';

const Dashboard = () => {

    const { user, } = useContext(AuthContext)
    const isAdmin = false;


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

                        <div className='mx-auto mb-4 mt-2 text-white'>
                            <h1 className=' hover:bg-opacity-50 p-2'>{user?.displayName}</h1>
                            <h1 className=' hover:bg-opacity-50 p-2'>{user?.email}</h1>
                        </div>

                        {

                            isAdmin ? <>
                                {/* Admin DashBoard */}
                                <li><NavLink to='/dashboard/uploadmovies'>Upload Movies</NavLink></li>
                                <li><NavLink to='/dashboard/uploadtvseries'>Upload TV series </NavLink></li>
                                <li><NavLink to='/dashboard/analytics'>View Analytics</NavLink></li>
                                <li><NavLink to='/dashboard/usersManagement'>Manage Users</NavLink></li>
                            </>
                                : <>
                                    {/*User DashBoard */}
                                    <li><NavLink to='/dashboard/WatchLater'>Watch Later</NavLink></li>
                                    <li><NavLink to='/dashboard/likedmovies'> My Liked Movies</NavLink></li>
                                    <li><NavLink to='/dashboard/favourite'>My Favourite Movies
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/watchhistory'>Watch History
                                    </NavLink></li>
                                    <li><NavLink to='/dashboard/'>Payment history</NavLink></li>
                                </>



                        }
                        {/* Sidebar content hear */}


                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Main Home</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;





