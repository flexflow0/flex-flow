import { useState, useEffect } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    

    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
            
    }, [])

    return (
        <div className='md:flex  max-w-screen-xl mt-10 gap-8'>
            <div className='w-9/12 mx-3'>
                {
                    blogs.map(blog => <SingleBlog
                        key={blog._id}
                        blog={blog}
                     
                    ></SingleBlog>)
                }
            </div>

            <div className="text-center">
                <h1>This is latest feature content</h1>
            </div>
        </div>
    );
};

export default Blog;