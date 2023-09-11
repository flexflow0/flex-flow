import { useState } from "react";
import { FaStopwatch, FaCertificate, } from "react-icons/fa";

const SingleBlog = ({ blog}) =>  {
    console.log(blog);
    const { author, content, thumbnail, title, date } = blog;

    const full = content;
    const afterSlice = full.slice(0, 300)

    const [show, setShow] = useState(false);
 

    return (
        <div className='mb-16'>
            <div className=''>
                <img className='w-full  mb-10 rounded-lg' src={thumbnail} alt="thumbnail" />
            </div>

            <div className='flex gap-5'>
                <div className=''>
                    <img className='rounded-full w-12 ' src="https://i.ibb.co/0D57G8X/profile-Icon.jpg" alt="" />
                    <h2 className=' w-28'>Posted by</h2>
                    <p>{author}</p>
                </div>
                <div>
                    <h2 className='text-2xl mb-3'>{title}</h2>

                    <div className='flex gap-10'>
                        <div className='flex gap-5'>
                            <FaStopwatch></FaStopwatch>
                            <p>{date}</p>
                        </div>
                        <div className=' flex gap-5 mb-3'>
                            <FaCertificate></FaCertificate>
                            <p>UnAuthorized</p>
                        </div>

                    </div>

                    <div>
                        <p>
                            {
                                
                                show ? <p>{full}</p> : <p>{afterSlice}... <button className='text-purple-950' onClick={()=> setShow(!show)}>Read More</button></p>
                               
                            }
                        </p>
                    </div>

                    
                </div>
            </div>


        </div>

    );
};

export default SingleBlog;