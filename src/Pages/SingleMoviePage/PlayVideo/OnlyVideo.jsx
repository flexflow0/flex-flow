import React from 'react';
import Loading from '../../Shared/Loading';
const OnlyVideo = ({ movie, isLoading }) => {

    if (isLoading) {
        return (
            <div className='w-28 h-screen mx-auto flex items-center'>
                <Loading></Loading>
            </div>
        )
    }

    return (
        <div className="grow rounded-lg overflow-hidden">

            {
                (movie?.cloudinary || movie?.title === "FlexFlow Demo") ? <video className=" border-purple-600 border rounded-lg lg:h-[500px] md:h-[400px]" controls width="100%"
                    height="100%">
                    <source src={movie?.movie_url} width="100%"
                        height="100%" type="video/mp4" />
                </video> : <iframe
                    width="100%"
                    height="100%"
                    src={movie?.movie_url}
                    title={movie?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen='true'
                    className='lg:h-[500px] md:h-[400px]'
                ></iframe>
            }
        </div>
    );
};

export default OnlyVideo;