import { useEffect, useState } from "react";
import SingleViewBlog from "./SingleViewBlog";


const ViewAllBlogs = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    const [refetch, setRefetch] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setAllBlogs(data))
    }, [refetch])

    return (
        <div className="px-10">
            <h2 className="text-center mt-5 text-3xl mb-2">View all blogs</h2>
            <hr className='w-72  border border-[#830FEA] mx-auto mb-10 ' />

            <div>
                {
                    allBlogs.map(allblog => <SingleViewBlog
                        key={allblog._id}
                        allBlog={allblog}
                        refetch = {refetch}
                        setRefetch = {setRefetch}
                    ></SingleViewBlog>)
                }
            </div>
        </div>
    );
};

export default ViewAllBlogs;