const Footer = () => {

    return (
        <div className='text-center  pt-[50px] bg-[#000000]'>
            <hr className='border-purple-950' />
            {/* Heading Started */}
            <h1 className='pt-[50px] text-purple-950 text-5xl mb-16 fontB '>FlexFlow
            </h1>
            <div className='relative mb-10'>
                <hr className='w-72 -mt-12 border border-purple-950 mx-auto ' />
                <p className='absolute -top-3 text-purple-950 left-1/2 -translate-x-1/2 text-7xl font-thin rotate-12'></p>
            </div>
            <p className='fontA -mt-6 text-lg mb-7 text-white'>Subscribe to our mailing list</p>
            {/* Heading Finish */}

            <div className='relative mx-auto mb-20 w-full sm:w-96 md:w-[500px] '>
                {/* Subscribe Email */}
                <input required className='pl-4 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-purple-950 input rounded-full text-white' type="email" placeholder='Enter Your Email' />
                {/* Subscribe button */}
                <button className='absolute -top-4  right-0 drop-shadow-md transition-all duration-200 border-2 border-purple-950 px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-purple-950 hover:bg-purple-950 hover:text-base-300' type="submit">Subscribe</button>
            </div>


            <div className='pb-[50px] MyContainer gap-5 max-w-7xl grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-white'>
                <ul >
                    {/* <li className='text-xl fontB'>Popular Classes</li> */}
                    <li>FAQ</li>
                    <li>Inventor Relations</li>
                    <li>Privacy</li>
                    <li>Speed Test</li>

                </ul>
                <ul >
                    {/* <li className='text-xl fontB'>Popular Instructors </li> */}
                    <li>Help Center</li>
                    <li>Jobs</li>
                    <li>Cookie Preferences</li>
                    <li>Legial Notices</li>

                </ul>
                <ul>
                    {/* <li className='text-xl font-bold'>Contacts</li> */}
                    <li>Account</li>
                    <li>Ways to Watch</li>
                    <li>Corporate Information</li>
                    <li>Only on FlexFlow</li>

                </ul>
                <ul>
                    {/* <li className='text-xl font-bold'>Social</li> */}
                    <li>Media Center</li>
                    <li>Terms Of Use</li>
                    <li>Contact Us</li>
                    {/* <li>Twitter</li> */}
                </ul> 
            </div>
            <hr className='border-purple-950 mb-4' />

            {/* <img
                {className='h-10 mt-2 mx-auto' src={logo} />  */}

            <p className=' mb-4 textShadow text-white'>Copyright © 2023 || Team Tech Titans</p>
        </div>
    );
};

export default Footer;