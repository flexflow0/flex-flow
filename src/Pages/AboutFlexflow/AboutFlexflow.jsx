import React from 'react';
import '../AboutFlexflow/AboutFlexflow.css'

const AboutFlexflow = () => {
    return (
        <div className='h-full w-full text-white  mb-16'>

            <div id='about_banner' className=' w-full h-screen flex items-center'>
                <p className='lg:text-7xl md:text-6xl text-5xl pl-5 relative mx-auto text-[#830FEA]'>FLEXFLOW</p>
            </div>

            <div>
                <p className='text-center  text-gray-500 text-2xl font-bold pb-5 pt-20'>POPULAR MOVIE PLATFORM</p>
                <p className='text-center text-6xl font-bold pb-10'>What is streaming</p>
                <div className='lg:grid lg:grid-cols-3 grid grid-cols-1 gap-4  '>
                    <div className='text-center   p-6'>
                        <img className='bg-green-300 p-5 rounded-lg w-[45%] ml-[100px]' src="http://digiflex.themezinho.net/wp-content/uploads/2020/11/icon01.png" alt="" />
                        <p className='py-6 text-xl font-semibold'>Access while
                            traveling</p>
                        <p className='text-md'>Keep access to your entertainment content while roaming the world.Pick from thousands.</p>
                    </div>
                    <div className='text-center border border-spacing-x-2 border-t-0 border-b-0 border-gray-500 p-6'>
                        <img className='bg-green-300 p-5 rounded-lg w-[45%] ml-[100px]' src="http://digiflex.themezinho.net/wp-content/uploads/2020/11/icon02.png" alt="" />
                        <p className='py-6 text-xl font-semibold'>Stay secure at
                            all times</p>
                        <p className='text-md'>Securely access and enjoy your favorite content,even on public Wi-Fi. Your connection.</p>
                    </div>
                    <div className='text-center   p-6'>
                        <img className='bg-green-300 p-5 rounded-lg w-[45%] ml-[100px]' src="http://digiflex.themezinho.net/wp-content/uploads/2020/11/icon03.png" alt="" />
                        <p className='py-6 text-xl font-semibold'>Stream with no
                            interruptions</p>
                        <p className='text-md'>Pause for snacks, not buffering. Stream smoothly with our lightning-fast protocol network.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutFlexflow;