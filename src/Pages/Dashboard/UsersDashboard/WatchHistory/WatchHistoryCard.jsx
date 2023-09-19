import React from 'react';
import useAuth from '../../../../Hooks/useAuth/useAuth';

const WatchHistoryCard = ({ data }) => {
    const { thumbnail, title, production_company, release_year, IMDb_rating, languages } = data
    console.log(data);
    return (
        <div className='rounded-lg h-[120px] mb-2  bg-[#B3A8CA] overflow-hidden'>
            <img
                className='h-full  w-52
                mr-2'
                src={thumbnail} alt="" />


            <h1 className='text-[#520596] text-[27px] font-semibold'>{title}</h1>
            <p>{production_company}</p>

        </div>
    );
};

export default WatchHistoryCard;