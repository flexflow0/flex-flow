
const MainBanner = () => {
    return (
        <div
            className="w-full h-[100vh] banner text-white text-center flex flex-col justify-center space-y-8 -mt-16 blo rounded-sm bg-gradient-to-r from-[#0c0209] to-[#67299e]"
        >
            <h1 className='font-bold text-5xl'>
                Unlimited Animations, TV shows, and more
            </h1>
            <h3 className='font-semibold text-2xl'>
                Watch anywhere. Cancel anytime. <br />
                Ready to watch? Enter your email to create or restart your membership.
            </h3>
            <div className='relative mx-auto mb-20 w-full sm:w-96 md:w-[500px] '>
                {/* Subscribe Email */}
                <input required className='pl-4 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-[#830fea] input rounded-full text-white' type="email" placeholder='Enter Your Email' />
                {/* Subscribe button */}
                <button className='absolute -top-4  right-0 drop-shadow-md transition-all duration-200 border-2 border-[#830fea] px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-[#830fea] hover:bg-[#830fea] hover:text-base-300' type="submit">Subscribe</button>
            </div>
        </div>
    );
};

export default MainBanner;