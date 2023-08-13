import './MainBanner.css'
import searchIcon from '../../../assets/Vector.svg'

const MainBanner = () => {
    return (
        <div
            className="w-full h-[60vh] text-white text-center flex flex-col justify-center space-y-8 blo rounded-sm mainbanner"
        >
            <h1 className='font-bold text-5xl'>
                Adventures Unveiled: <br />
                Exploring Life&apos;s Wonders with
            </h1>
            <h3 className='font-semibold text-2xl'>
                Watch anywhere. Cancel anytime. <br />
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className='relative mx-auto mb-20 w-full sm:w-96 md:w-[500px] '>
                {/* Search Name */}
                <input required className='pl-4 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 bg-[#3E3E3E]  border-[#830fea] input rounded-full text-[#A1A1A1]' type="email" placeholder='Explore Your Desire Content...' />
                {/* Search button */}
                <img className="absolute top-3 right-5 drop-shadow-md transition-all duration-200  disabled" height="20px" width="20px" src={searchIcon} alt="search icon" />
            </div>
        </div>
    );
};

export default MainBanner;