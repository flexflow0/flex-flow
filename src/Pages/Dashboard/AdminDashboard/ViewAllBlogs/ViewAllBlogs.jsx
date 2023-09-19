
import SingleViewBlog from "./SingleViewBlog";
import DashboardTop from "../../../../components/dashboardTop";
import useBlog from "../../../../Hooks/useBlog/useBlog";


const ViewAllBlogs = () => {

    const [blog, refetch ]= useBlog();
    
    return (
        <div className="px-10">

            <DashboardTop></DashboardTop>
            <h2 className="text-center mt-5 text-3xl mb-2">View all blogs</h2>
            <hr className='w-72  border border-[#830FEA] mx-auto mb-10 ' />

            <div className="">
                {
                    blog.map(allblog => <SingleViewBlog
                        key={allblog._id}
                        allBlog={allblog}
                        refetch = {refetch}
                    ></SingleViewBlog>)
                }
            </div>
        </div>
    );
};

export default ViewAllBlogs;