import React from 'react';
import useAuth from '../../../../Hooks/useAuth/useAuth';
import { BiTrash } from "react-icons/bi";
import { useDeleteHistoryByIDMutation } from '../../../../Redux/Features/API/baseApi';
import toast from 'react-hot-toast';
const WatchHistoryCard = ({ data, user, refetch }) => {
    const [deleteHistoryByID, { data: deleteResponse, isLoading: deleteLoading }] = useDeleteHistoryByIDMutation()
    const { thumbnail, title, production_company, release_year, release_month, IMDb_rating, languages, region, _id } = data
    // console.log(data);

    const handleRemove = (id) => {
        console.log(id);
        const deleteData = {
            id, email: user?.email
        }
        deleteHistoryByID(deleteData)
    }
    if (!deleteLoading && deleteResponse) {
        toast.success("You are Successfully Deleted the Content")
        refetch()
    }
    // useEffect(() => { refetch() })
    return (
        <div className='rounded-lg  mb-2  bg-[#B3A8CA] overflow-hidden flex flex-col md:flex-row gap-4  lg:pr-5'>
            <img
                className='h-full w-full md:w-52
                mr-2'
                src={thumbnail} alt="thumbnail" />

            <div className=' grid grid-cols-4 items-center  justify-between w-full'>
                <div className='col-span-2'>
                    <h1 className='text-[#520596] text-[27px] font-semibold'>{title}</h1>
                    <p className='text-[#32273b] '>{production_company}  -<span className='text-[12px]'>{release_month} {release_year}</span></p>
                    <p className='text-[#32273b] '>{languages.join(", ")}</p>


                </div>
                <div className='text-center'>
                    <button className='rounded-full text-[14px] px-2  border border-[#520596] text-[#520596]'>{region}</button>
                </div>

                <button onClick={() => handleRemove(_id)} className='ml-auto rounded-full p-3 bg-[#f2d6ff] text-red-700 border-2 border-[#520596]'><BiTrash /></button>
            </div>

        </div>
    );
};

export default WatchHistoryCard;