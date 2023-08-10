import './MainBanner.css'

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
                <input required className='pl-4 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-[#830fea] input rounded-full text-white' type="email" placeholder='Explore Your Desire Content...' />
                {/* Search button */}
                <button className='absolute -top-4  right-0 drop-shadow-md transition-all duration-200 border-2 border-[#830fea] px-4 text-white sm:px-3 rounded-full text-lg font-bold py-1 mt-4 bg-[#830fea] hover:bg-[#830fea] hover:text-base-300' type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
    );
};

export default MainBanner;