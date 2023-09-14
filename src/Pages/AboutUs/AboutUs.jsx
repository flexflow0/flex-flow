
import { Link } from "react-router-dom";
import "./AboutUs.css";
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutUs = () => {
    return (

        <div
            id='banner' className="w-full text-white text-center  flex flex-col justify-center space-y-8  blo rounded-sm px-10 "
        >
            <div className="mt-16">
                <h1 className="text-3xl mb-5">Meet Our Team</h1>
                <hr className='w-72  border mb-8 border-[#830FEA] mx-auto ' />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7">


                <div className="bg-[#39134B]  w-full mx-auto px-5 py-5 rounded-3xl space-y-2 bg-opacity-50 scale-85 hover:scale-110 ease-in duration-500">

                    <img src='https://i.ibb.co/0h6cJcH/masud-rana-removebg-preview-1-removebg-preview.png' className="rounded-full w-28 h-28 mx-auto" alt="" />

                    <h2 className="text-center">Masud Rana</h2>
                    <p>Team Leader and Developer</p>

                    <div className="flex justify-center items-center gap-4">
                        <hr className="w-28 border-purple-950" />
                        <div className="flex gap-4">
                            <Link className="h-5"><FaFacebook size={20}></FaFacebook></Link>
                            <Link><FaLinkedin size={20}></FaLinkedin ></Link>
                            <Link><FaGithub size={20}></FaGithub></Link>
                        </div>
                        <hr className="w-28 border-purple-950" />
                    </div>
                </div>

                <div className="bg-[#39134B]  w-full mx-auto px-5 py-5 rounded-3xl space-y-2 bg-opacity-50 scale-85 hover:scale-110 ease-in duration-500">

                    <img src='https://i.ibb.co/Bc82bgL/fullPic.jpg' className="rounded-full w-28 h-28 mx-auto" alt="" />

                    <h2 className="text-center">Faisal Ahmed</h2>
                    <p>MERN Stack Developer</p>

                    <div className="flex justify-center items-center gap-4">
                        <hr className="w-28 border-purple-950" />
                        <div className="flex gap-4">
                            <Link className="h-5"><FaFacebook size={20}></FaFacebook></Link>
                            <Link><FaLinkedin size={20}></FaLinkedin ></Link>
                            <Link><FaGithub size={20}></FaGithub></Link>
                        </div>
                        <hr className="w-28 border-purple-950" />
                    </div>
                </div>

                <div className="bg-[#39134B]  w-full mx-auto px-5 py-5 rounded-3xl space-y-2 bg-opacity-50 scale-85 hover:scale-110 ease-in duration-500">

                    <img src='https://i.ibb.co/vvNrvRD/mahmud.jpg' className="rounded-full w-28 h-28 mx-auto" alt="" />

                    <h2 className="text-center">Mahmud Uz Zaman</h2>
                    <p>MERN Stack Developer</p>

                    <div className="flex justify-center items-center gap-4">
                        <hr className="w-28 border-purple-950" />
                        <div className="flex gap-4">
                            <Link className="h-5"><FaFacebook size={20}></FaFacebook></Link>
                            <Link><FaLinkedin size={20}></FaLinkedin ></Link>
                            <Link><FaGithub size={20}></FaGithub></Link>
                        </div>
                        <hr className="w-28 border-purple-950" />
                    </div>
                </div>

                <div className="bg-[#39134B]  w-full mx-auto px-5 py-5 rounded-3xl space-y-2 bg-opacity-50 scale-85 hover:scale-110 ease-in duration-500">

                    <img src='https://i.ibb.co/HqDYzYk/1680675586043.jpg' className="rounded-full w-28 mx-auto" alt="" />

                    <h2 className="text-center">Sayed Md Atiqur Rahman</h2>
                    <p>Designer and Developer</p>

                    <div className="flex justify-center items-center gap-4">
                        <hr className="w-28 border-purple-950" />
                        <div className="flex gap-4">
                            <Link className="h-5"><FaFacebook size={20}></FaFacebook></Link>
                            <Link><FaLinkedin size={20}></FaLinkedin ></Link>
                            <Link><FaGithub size={20}></FaGithub></Link>
                        </div>
                        <hr className="w-28 border-purple-950" />
                    </div>
                </div>

                <div className="bg-[#39134B]  w-full mx-auto px-5 py-5 rounded-3xl space-y-2 bg-opacity-50 scale-85 hover:scale-110 ease-in duration-500">

                    <img src='https://i.ibb.co/R958sp7/Whats-App-Image-2022-02-11-at-9-59-17-PM-2.jpg' className="rounded-full w-28 mx-auto" alt="" />

                    <h2 className="text-center">Arafat Rahman Sakib</h2>
                    <p>MERN Stack Developer</p>

                    <div className="flex justify-center items-center gap-4">
                        <hr className="w-28 border-purple-950" />
                        <div className="flex gap-4">
                            <Link className="h-5"><FaFacebook size={20}></FaFacebook></Link>
                            <Link><FaLinkedin size={20}></FaLinkedin ></Link>
                            <Link><FaGithub size={20}></FaGithub></Link>
                        </div>
                        <hr className="w-28 border-purple-950" />
                    </div>
                </div>

                <div className="bg-[#39134B]  w-full mx-auto px-5 py-5 rounded-3xl space-y-2 bg-opacity-50 scale-85 hover:scale-110 ease-in duration-500">

                    <img src='https://i.ibb.co/Mh2cwqn/sajib.jpg' className="rounded-full w-28 h-28 mx-auto" alt="" />

                    <h2 className="text-center">Mahmud Sajib</h2>
                    <p>MERN Stack Developer</p>

                    <div className="flex justify-center items-center gap-4">
                        <hr className="w-28 border-purple-950" />
                        <div className="flex gap-4">
                            <Link className="h-5"><FaFacebook size={20}></FaFacebook></Link>
                            <Link><FaLinkedin size={20}></FaLinkedin ></Link>
                            <Link><FaGithub size={20}></FaGithub></Link>
                        </div>
                        <hr className="w-28 border-purple-950" />
                    </div>
                </div>

                <div className="bg-[#39134B]  w-full mx-auto px-5 py-5 rounded-3xl space-y-2 bg-opacity-50 scale-85 hover:scale-110 ease-in duration-500 mb-12">

                    <img src='https://i.ibb.co/60MzbWC/sakib.jpg' className="rounded-full w-28 mx-auto" alt="" />

                    <h2 className="text-center">Shakib Hasan</h2>
                    <p>MERN Stack Developer</p>

                    <div className="flex justify-center items-center gap-4">
                        <hr className="w-28 border-purple-950" />
                        <div className="flex gap-4">
                            <Link className="h-5"><FaFacebook size={20}></FaFacebook></Link>
                            <Link><FaLinkedin size={20}></FaLinkedin ></Link>
                            <Link><FaGithub size={20}></FaGithub></Link>
                        </div>
                        <hr className="w-28 border-purple-950" />
                    </div>
                </div>



            </div>
        </div>

    );
};

export default AboutUs;