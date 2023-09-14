import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
/* eslint-disable react/no-unescaped-entities */
const Footer = () => {

    const { register, handleSubmit, reset, } = useForm();
    const onSubmit = (data) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your mail successfully added in the mailing list',
            showConfirmButton: false,
            timer: 1500
          })
        console.log(data);
        reset()
        const addEmail = { email: data.email }

        fetch('http://localhost:5000/subscribe', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addEmail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            
    }
    return (
        <div className='text-center pb-5'>
            {/* Heading Started */}
            <h1 className='pt-[50px] font2 text-[#830FEA] text-5xl mb-16 fontB'>FlexFlow
            </h1>
            <div className='relative mb-16 '>
                <hr className='w-72 -mt-12 border border-[#830FEA] mx-auto ' />
                <p className='absolute -top-2  text-[#830FEA] left-1/2 -translate-x-1/2 text-7xl rotate-12  font1'>"</p>
            </div>
            <p className='font1 text-lg mb-7  text-white'>Subscribe to our mailing list</p>
            {/* Heading Finish */}

            <form onSubmit={handleSubmit(onSubmit)} className='relative mx-auto px-5 mb-20 w-full sm:w-96 md:w-[500px] '>
                {/* Subscribe Email */}
                <input className='pl-6 h-10 w-full sm:w-96 md:w-[500px] bg-transparent border-2 border-[#830FEA] input rounded-full text-white' type="email"
                    {...register("email", { required: true })}
                    placeholder='Enter Your Email' />
                {/* Subscribe button */}
                <button className='absolute -top-4 right-5 md:-right-5 drop-shadow-md transition-all duration-200 border-2 border-[#830FEA] px-4 text-white sm:px-10 rounded-full text-lg font-bold py-1 mt-4 bg-[#830FEA] hover:bg-purple-950 ' type="submit">Subscription</button>
            </form>


            <div className='pb-[50px] mx-auto MyContainer gap-5 max-w-7xl grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-white'>
                <ul >
                    {/* <li className='text-xl fontB'>Popular Classes</li> */}
                    <li>FAQ</li>
                    <li>Inventor Relations</li>
                    <Link to="privacy">
                        <li>Privacy</li>
                    </Link>
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