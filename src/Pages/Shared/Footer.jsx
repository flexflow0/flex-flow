/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
    return (
        <div className='text-center pb-5'>
            {/* Heading Started */}
            <h1 className='pt-[50px] font2 text-[#830FEA] text-5xl mb-16 fontB '>FlexFlow
            </h1>
            <div className='relative mb-16 '>
                <hr className='w-72 -mt-12 border border-[#830FEA] mx-auto ' />
                <p className='absolute -top-2  text-[#830FEA] left-1/2 -translate-x-1/2 text-7xl rotate-12  font1'>"</p>
            </div>
            <p className='font1 text-lg mb-7  text-white'>Subscribe to our mailing list</p>
            {/* Heading Finish */}

            <div className='relative mx-auto px-5 mb-20 w-full sm:w-96 md:w-[500px] '>
                {/* Subscribe Email */}
                <input required className='pl-6 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-[#830FEA] input rounded-full text-white' type="email" placeholder='Enter Your Email' />
                {/* Subscribe button */}
                <button className='absolute -top-4  lg:-right-5 right-5 drop-shadow-md transition-all duration-200 border-2 border-[#830FEA] px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-[#830FEA] hover:bg-purple-950 ' type="submit">Subscribe</button>
            </div>


            <div className='pb-[50px] mx-auto MyContainer gap-5 max-w-7xl grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-white'>
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