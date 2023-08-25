import './CompanyInfoBanner.css'

const CompanyInfoBanner = () => {
    return (
        <div className='mx-10'>
            <div className='flex justify-center items-center my-10 md:my-20 lg:my-28'>
                <div className='bg grid grid-cols-1 gap-5 lg:grid-cols-3 rounded-[40px] px-8 lg:px-24 py-24'>
                    <div className='col-span-2'>
                        <h2 className='text-5xl font-bold text-white'>Looking For Company Info ?</h2>
                        <p className='text-2xl font-semibold mt-8 text-white'>
                            Get more images and information
                            about FlexFlow on our company site.
                        </p>
                    </div>
                    <div className='flex justify-center items-center '>
                        <div>
                            <button className='uppercase bg-[#9747ff] text-3xl font-semibold text-white px-8 py-4 rounded-2xl border-4 border-[#8a24f2] mt-10 lg:mt-0'>About FlexFlow</button>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfoBanner;