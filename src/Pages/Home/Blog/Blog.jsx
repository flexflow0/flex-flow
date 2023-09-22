import { useState, useEffect } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);



    useEffect(() => {
        fetch('https://flex-flow-server.vercel.app/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [])


    const sortedBlogs = [...blogs].sort((a, b) => new Date(a.date) - new Date(b.date));


    return (
        <div className='grid  md:grid-cols-3  MyContainer  max-w-screen-xl mt-10 gap-8'>
            <div className='col-span-2 mx-3 '>
                {
                    sortedBlogs.map(blog => <SingleBlog
                        key={blog._id}
                        blog={blog}

                    ></SingleBlog>)
                }
            </div>

            <div className="text-center w-full ">
                <div className="rounded-lg border-2 border-[#520596] w-full px-2 py-5">
                    <h1 className="text-3xl font-semibold text-[#9837ed]  border-b-2 border-[#520596]">This is latest feature content</h1>
                    {
                        sortedBlogs?.map(recent => <h1 className="py-2 border-b border-white text-left">{recent.title}</h1>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Blog;