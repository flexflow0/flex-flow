import DashboardTop from "../../../../components/dashboardTop";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const UpdateBlog = () => {

    const {id} = useParams()


    const [preBlog, setPreBlog] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/blog/${id}`)
            .then(res => res.json())
            .then(data => {
                setPreBlog(data)
                setLoading(false)
            })
    }, [])
    

    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`


    const onSubmit = data => {

        // const formData = new FormData();
        // formData.append('image', data.thumbnail[0])
       

        // fetch(img_hosting_url, {
        //     method: 'PATCH',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgResponse => {
        //         if (imgResponse.success) {
        //             const imgUrl = imgResponse.data.display_url;
                    const { author, content, thumbnail, title, date } = data;
                    const blogItem = { author, content, thumbnail: preBlog.thumbnail, title, date }
                    console.log(blogItem);

                    axiosSecure.patch(`/blog/${id}`, blogItem)
        //         }
        //     })
        // console.log(formData);

        console.log(data);
    }

    if(loading){
        return <p>{loading}</p>
    }

    return (
        <div className="MyContainer px-10">

            <DashboardTop />
            <h2 className="text-center mt-5 text-3xl mb-2"> Update your Blog</h2>
            <hr className='w-72  border border-[#830FEA] mx-auto ' />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full  ">
                    <label className="label">
                        <span className="label-text">Title *</span>
                    </label>
                    <input type="text" defaultValue={preBlog?.title}
                        {...register("title", { required: true })}
                        placeholder="Write Your Blog title" className="input input-bordered w-full  " />
                </div>

                <div className="flex gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Date *</span>
                        </label>
                        <input type="date" defaultValue={preBlog?.date}
                            {...register("date", { required: true })}
                            placeholder="Select the date" className="input input-bordered w-full " />
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Author *</span>
                        </label>
                        <select defaultValue='Pick One'
                            {...register("author", { required: true })}
                            className="select select-bordered">
                            <option disabled >Author</option>
                            <option>Admin</option>
                        </select>
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Content *</span>

                    </label>
                    <textarea
                        {...register("content", { required: true })} defaultValue={preBlog?.content}
                        className="textarea textarea-bordered h-28" placeholder="Write your content"></textarea>
                </div>

                {/* <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Blog Image *</span>

                    </label>
                    <input  
                        {...register("thumbnail", { required: true })}
                        type="file" className="file-input file-input-bordered w-full max-w-xs " />

                </div> */}

                <input type="submit" value='Update' className="uppercase bg-[#22225a] px-5 py-2 rounded-lg font-medium mt-8 flex  mx-auto" />

            </form>
        </div>
    );
};

export default UpdateBlog;