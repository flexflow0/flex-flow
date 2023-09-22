import { useState } from "react";
import { FaCertificate, FaRegClock, } from "react-icons/fa";

const SingleBlog = ({ blog }) => {
    console.log(blog);
    const { author, content, thumbnail, title, date } = blog;

    const full = content;
    const afterSlice = full.slice(0, 300)

    const [show, setShow] = useState(false);


    return (
        <div className='mb-16 rounded-lg bg-[#B3A8CA] overflow-hidden border-2 border-[#520596] '>
            <div className=''>
                <img className='w-full  mb-10 border-b-2 border-[#520596]  ' src={thumbnail} alt="thumbnail" />
            </div>
            <div className='flex gap-10 justify-between text-black px-5'>
                <div className='flex gap-3 items-center text-start'>
                    <img className='rounded-full w-10 h-10' src="https://i.ibb.co/0D57G8X/profile-Icon.jpg" alt="" />
                    <div>
                        <p>{author}</p>
                    </div>
                </div>


                <div className='flex gap-5 items-center'>
                    <FaRegClock color="#520596"></FaRegClock>
                    <p>{date}</p>
                </div>
                <div className=' flex gap-5 mb-3 items-center'>
                    <FaCertificate color="#520596"></FaCertificate>
                    <p>Authorized</p>
                </div>


            </div>

            <div className='gap-5 text-black px-5 py-3'>
                <h2 className='text-2xl mb-3 text-[#520596] font-semibold'>{title}</h2>
                <div>
                    <p>
                        {

                            show ? <p>{full}</p> : <p>{afterSlice}... <button className='text-purple-950' onClick={() => setShow(!show)}>Read More</button></p>

                        }
                    </p>
                </div>


            </div>
        </div>


    );
};

export default SingleBlog;