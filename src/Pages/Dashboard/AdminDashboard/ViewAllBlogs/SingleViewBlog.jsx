import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


const SingleViewBlog = ({ allBlog, setDeleteId }) => {
    const { author, content, thumbnail, title, date, _id } = allBlog

    const full = content;
    const afterSlice = full.slice(0, 300)

    const [show, setShow] = useState(false);

    const  handleDelete = (id) =>{
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
            if(result.isConfirmed){
                console.log('delete', id);
                axios.delete(`http://localhost:5000/blog?id=${_id}`)
                .then(res => {
                    console.log(res);
                    if(res.deletedCount > 0){
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
        <div>

            <div className="border border-purple-950 p-10 mb-3 rounded-lg  ">
                <div className="flex gap-5">
                    <img className="w-72 rounded-lg" src={thumbnail} alt="" />
                    <p> {

                        show ? <p>{full}</p> : <p>{afterSlice}... <button className='text-purple-950' onClick={() => setShow(!show)}>Read More</button></p>
                    }</p>
                </div>

                <div className="flex justify-center gap-5 ">
                    <div>
                        <input type="submit" onClick={(() => handleDelete(_id))} value='Detele' className="uppercase bg-red-500 px-5 py-2 rounded-lg font-medium mt-8 flex  mx-auto" />
                    </div>

                    <div>
                        <input type="submit" value='Update' className="uppercase bg-[#22225a] px-5 py-2 rounded-lg font-medium mt-8 flex  mx-auto" />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default SingleViewBlog;