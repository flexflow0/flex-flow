import { Link } from "react-router-dom"

function Navbar() {

    return (
        <div className='bg-black bg-opacity-50 h-16  top-0 z-10'>
            <div className='flex justify-between mx-auto text-white max-w-[1500px] h-full items-center'>
                <div className='ms-10 w-52'>
                <Link to='/'><img className='w-full' src='https://i.ibb.co/WpJvMk4/9270632-02.png' alt="Logo" /></Link>
                </div>
                <div className='mr-10'>
                    <Link to='/login'><button className='uppercase bg-[#22225a] px-5 py-2 rounded-lg font-medium'>Login</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
