import { useEffect, useState } from "react";
import SingleViewBlog from "./SingleViewBlog";
import DashboardTop from "../../../../components/dashboardTop";


const ViewAllBlogs = () => {

    const [allBlogs, setAllBlogs] = useState([]);

    const [deleteId, setDeleteId] = useState('')
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => {
                setAllBlogs(data)
                if (deleteId) {
                    const remainBlogs = allBlogs.filter(blogs !== blogs._id )
                    setAllBlogs(remainBlogs)
                 }
            })
    }, [deleteId])

    if (deleteId) {
        const remainBlogs = allBlogs.filter(blogs !== blogs._id )
        setAllBlogs(remainBlogs)
     }

    return (
        <div className="px-10">

            <DashboardTop></DashboardTop>
            <h2 className="text-center mt-5 text-3xl mb-2">View all blogs</h2>
            <hr className='w-72  border border-[#830FEA] mx-auto mb-10 ' />

            <div>
                {
                    allBlogs.map(allblog => <SingleViewBlog
                        key={allblog._id}
                        allBlog={allblog}
                        setDeleteId={setDeleteId}
                    ></SingleViewBlog>)
                }
            </div>
        </div>
    );
};

export default ViewAllBlogs;