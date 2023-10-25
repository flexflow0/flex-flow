import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner relative'>
            <div
                className="w-full h-[100vh] text-white text-center  flex flex-col justify-center space-y-8 bg-black bg-opacity-70"
            >
                <h1 className='lg:text-6xl md:text-5xl text-4xl font-bold'>
                    Unlimited Animations, TV shows, and more
                </h1>
                <h3 className='font-semibold text-2xl'>
                    Watch anywhere. Cancel anytime. <br />
                    Ready to watch? Enter your email to create or restart your membership.
                </h3>                   
                    <Link to='/login' className='w-[200px] mx-auto  drop-shadow-md transition-all duration-200 border-2 border-[#830FEA] px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-[#830FEA] hover:bg-purple-950 ' >
                        Get Started
                    </Link>
                
            </div>

        </div>
    );
};

export default Banner;