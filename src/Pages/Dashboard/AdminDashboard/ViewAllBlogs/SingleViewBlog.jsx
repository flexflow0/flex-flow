import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BiTrash } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";

const SingleViewBlog = ({ allBlog, refetch }) => {

    const { author, content, thumbnail, title, date, _id } = allBlog
    const full = content;
    const afterSlice = full.slice(0, 80)
    const sliceTitle = title.slice(0, 25)
    const [show, setShow] = useState(false);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(result => {
                if (result.isConfirmed) {
                    console.log('delete', id);
                    axios.delete(`http://localhost:5000/blog?id=${_id}`)
                        .then(res => {
                            console.log(res);
                            refetch()
                            if (res.deletedCount > 0) {
                                setDeleteId(_id)
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                }
            })
    }
    return (

        <div className='rounded-lg  mb-2  bg-[#B3A8CA] overflow-hidden flex flex-col md:flex-row gap-4  lg:pr-5'>
            <img
                className='h-full w-full md:w-52
                mr-2'
                src={thumbnail || "https://i.ibb.co/BsmRhsq/placeholder1.jpg"} alt="thumbnail" />

            <div className=' grid grid-cols-5 items-center  justify-between w-full'>
                <div className='col-span-3 text-black'>
                    <h1 className='text-[#520596] text-[27px] font-semibold'>{sliceTitle}...</h1>
                    <p> {
                        <p>{afterSlice}...
                            <Link to="../../blog" className='text-purple-950' > Read More</Link>
                        </p>
                    }</p>

                </div>
                <div className='text-center'>
                    <button className='rounded-full text-[14px] px-2  border border-[#520596] text-[#520596]'>Trending</button>
                </div>
                <div className="ml-auto ">
                    <Link to={`updateblog/${_id}`}>
                        <button className=' rounded-full p-3 mr-2 bg-[#f2d6ff] text-[#520596] border-2 border-[#520596]'><FiEdit /></button>
                    </Link>

                    <button onClick={(() => handleDelete(_id))} className='rounded-full p-3 bg-[#f2d6ff] text-red-700 border-2 border-[#520596]'><BiTrash /></button>

                </div>
            </div>

        </div>

    );
};

export default SingleViewBlog;