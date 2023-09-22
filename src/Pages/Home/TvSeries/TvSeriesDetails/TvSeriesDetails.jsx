import { useParams } from "react-router-dom";
import PlayTvSeries from "../PlayTvSeries/PlayTvSeries";
import useSingelTvSeries from "../../../../Hooks/useSingelTvSeries/useSingelTvSeries";
import Loading from "../../../Shared/Loading";

const TvSeriesDetails = () => {
    const { id } = useParams()
    const ids = id.split('+')
    const [tvSeries, isLoading] = useSingelTvSeries(ids[0]);
 
    if (isLoading) {
        return <Loading></Loading>
    }
    const episodeNumber =parseInt(ids[1])
    const displayEpisode =tvSeries.episodes.filter(episode=>episode.episode_number === episodeNumber)
    const relatedEpisode =tvSeries.episodes.filter(episode=>episode.episode_number !== episodeNumber)
    
    return (
        <div>
            {
                isLoading ?
                    <div className='h-screen flex align-middle justify-center'>
                        <span className="loading loading-ring loading-lg mb-16"></span>
                    </div> :
                    <div>

                        {/* video */}
                        <div className='px-5 lg:px-20 my-10 grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-4'>
                            <div className='col-span-3 rounded-lg overflow-hidden' id='full_movie'>

                                <div>
                                    <iframe
                                        className="lg:h-[500px] md:h-[400px] "
                                        width="100%"
                                        height="100%"
                                        src={displayEpisode[0]?.link}
                                        title={displayEpisode[0]?.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen='true'
                                    ></iframe>
                                </div>
                            </div >
                            {/* details */}


                            <div div className=' lg:h-[500px] md:h-[400px]  md:mt-5 lg:mt-0 mt-5 bg-[#1f1f1f] rounded-md p-4' >
                                <div className='relative'>
                                    <div>
                                        <div className='rounded border-2 border-[#3d1164] h-20 grid grid-cols-3 overflow-hidden'>
                                            <div
                                                className='bannerThumbnail bg-cover bg-center bg-no-repeat '
                                                style={{ backgroundImage: `url(${tvSeries?.poster})` }}
                                            >
                                            </div>
                                            <div className='col-span-2 ps-2'>
                                                <h2 className='text-lg font-semibold'>{tvSeries?.title}</h2>
                                                <p className='text-[10px]'>
                                                    {tvSeries?.rating}
                                                    <span className='mx-1'>|</span>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className='absolute bottom-[5%] right-[5%]'>
                                        <i className="fa-regular fa-thumbs-up"></i>
                                        {/* <i className="fa-solid fa-thumbs-up"></i> */}
                                    </button>
                                </div>

                                <div className='my-2'>
                                    <h2>IMDB Rating</h2>
                                    <p className='text-xs'>The IMDB rating is weighted to help keep it reliable.</p>
                                    <div className='flex mt-2'>
                                        <div className='grow flex gap-2'>
                                            <div>
                                                <i className="fa-solid fa-star mb-1 mr-1 text-2xl text-[#ecf842]"></i>
                                            </div>
                                            <div>
                                                <p className='text-xs'>{tvSeries?.IMDb_rating} / 10</p>
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
                                    <p className='text-xs'>{displayEpisode?.description}</p>
                                    <p className='text-xs'>{tvSeries?.episode_number}</p>
                                </div>
                                <div>
                                    <h1>It is a free TV series so you can't  download, add favorites, or watch later</h1>
                                </div>
                                {/* <div className='flex gap-2'>
                                    <button
                                        className="btn btn-sm rounded-lg grow btn-outline btn-primary text-white bg-[#5668cf] flex gap-1 align-middle"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        ><path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                        <span className='text-white capitalize'>Add favorite</span>
                                    </button>

                                    <button
                                        className="btn btn-sm rounded-lg grow btn-outline btn-primary text-white bg-[#5668cf] flex gap-1 align-middle"
                                    >
                                        <i className="fa-solid fa-minus text-white"></i>
                                        <span className='text-white capitalize'>
                                            Remove
                                        </span>
                                    </button>
                                </div> */}
                            </div>
                        </div >

                    </div >
            }
            <PlayTvSeries
                relatedEpisode={relatedEpisode}
                img={tvSeries?.poster}
                id={tvSeries?._id}
                isLoading={isLoading}
            ></PlayTvSeries>
        </div >
    );
};

export default TvSeriesDetails;