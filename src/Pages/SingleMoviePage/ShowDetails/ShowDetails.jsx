import { useState } from "react";

const ShowDetails = ({ movie }) => {

    const [loading, setLoading] = useState(true);

    if (loading && movie) {
        setLoading(false)
    }

    if (loading) {
        return (
            <div className='h-screen flex align-middle justify-center'>
                <span className="loading loading-ring loading-lg mb-16"></span>
            </div>
        )
    }

    return (
        <div className="bg-[#1f1f1f] rounded-md p-4">
            <div className='relative'>
                <div>
                    <div className='rounded border-2 border-[#3d1164] h-20 grid grid-cols-3 overflow-visible'>
                        <div
                            className='bannerThumbnail bg-cover bg-center bg-no-repeat '
                            style={{ backgroundImage: `url(${movie?.thumbnail})` }}
                        >
                        </div>
                        <div className='col-span-2 ps-2'>
                            <pre className='text-lg font-semibold overflow-hidden text-ellipsis hover:overflow-visible'>{movie?.title}</pre>
                            <p className='text-[10px]'>
                                {movie?.rating}
                                <span className='mx-1'>|</span>
                                {
                                    movie?.Genres.map((genre, index, array) => <span
                                        key={index}
                                        className=""
                                    >
                                        {genre}
                                        {index === array.length - 1 ? "" : <> , </>}
                                    </span>)
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='my-2'>
                        <h2>Trailer</h2>
                        <p className='text-xs'>With not one, not two, but THREE Spider-Mans!</p>
                    </div> */}
            <div className='my-2'>
                <h2>IMDB Rating</h2>
                <p className='text-xs'>The IMDB rating is weighted to help keep it reliable.</p>
                <div className='flex mt-2'>
                    <div className='grow flex gap-2'>
                        <div>
                            <i className="fa-solid fa-star mb-1 mr-1 text-2xl text-[#ecf842]"></i>
                        </div>
                        <div>
                            <p className='text-xs'>{movie?.IMDb_rating} / 10</p>
                            <p className='text-xs'>821K</p>
                        </div>
                    </div>
                    <div className='grow flex gap-2'>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2856 6H23.1428V12.8571" stroke="#F24E1E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M23.1426 6L13.4569 15.6857C13.2967 15.8428 13.0813 15.9307 12.8569 15.9307C12.6326 15.9307 12.4172 15.8428 12.2569 15.6857L8.31408 11.7429C8.15385 11.5858 7.93844 11.4978 7.71408 11.4978C7.48972 11.4978 7.2743 11.5858 7.11408 11.7429L0.856934 18" stroke="#F24E1E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <p className='text-xs'>POPULARITY</p>
                            <p className='text-xs'>125/3</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-2'>
                <h2>Short Info</h2>
                <p className='text-xs'>{movie?.description}</p>
            </div>
            <div className='mb-1 flex gap-2'>
                <h2 className='text-sm'><span>Directors</span> : <span className='text-[#4c82c8] hover:underline'>{movie?.cast[0]?.directors.map((director, index, array) => <span
                    key={index}
                    className="hover:underline"
                >
                    {director}
                    {index === array.length - 1 ? "" : <> , </>}
                </span>)
                }</span></h2>
            </div>
            <div className='mb-1 flex gap-2'>
                <h2 className='text-sm'><span>Writers</span> : <span className='text-[#4c82c8] hover:underline'>{movie?.cast[0]?.writers.map((director, index, array) => <span
                    key={index}
                    className='hover:underline'
                >
                    {director}
                    {index === array.length - 1 ? "" : <> , </>}
                </span>)
                }</span></h2>
            </div>
            <div className='mb-2 flex gap-2'>
                <h2 className='text-sm'><span>Stars</span> : <span className='text-[#4c82c8] '>{movie?.cast[0]?.stars.map((director, index, array) => <span
                    key={index}
                    className="hover:underline"
                >
                    {director}
                    {index === array.length - 1 ? "" : <> , </>}
                </span>)
                }</span></h2>
            </div>
        </div>
    );
};

export default ShowDetails;