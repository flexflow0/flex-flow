import React from 'react';
import { Link } from 'react-router-dom';

const TvSeriesEpisodes = ({ singleEpisodes, img, id }) => {
    console.log(singleEpisodes);
    return (
        <div>
            <div>
                <div>
                    <div
                        className="rounded-md overflow-hidden relative container_card w-50 bg-[#111111]">
                        <div>
                            <div
                                className="rounded-lg overflow-hidden">
                                <img className="w-full lg:h-full md:h-full h-[280px] object-fill" src={img} alt="" />
                            </div>
                            <div className="py-2 px-2 font-bold text-l flex justify-between border-b border-[#5a2323] rounded-b-lg">
                                <Link to={`/tv_series_details/${id}+${singleEpisodes.episode_number}`} className='w-[75%] '>
                                    <pre className="overflow-hidden text-ellipsis hover:underline">{singleEpisodes?.title}</pre>
                                </Link>
                                <p className='flex items-center'><i className="fa-solid fa-star text-sm mb-1 mr-1 text-yellow-600"></i>{singleEpisodes?.IMDB_rating}</p>
                            </div>
                        </div>
                        <div>
                            <div
                                className='p-3 space-y-1 hidden absolute bottom-10 z-50 card_details w-full'
                            >
                                <Link to={`/tv_series_details/${id}+${singleEpisodes?.episode_number}`}
                                    className='flex justify-center'>
                                    <i
                                        className="fa-regular fa-circle-play text-5xl mb-20 hover:text-[#e7bb68] hover:cursor-pointer"></i>
                                </Link>
                                <table className='w-full mb-3'>
                                    <tr>
                                        <th className='text-sm'>Length</th>
                                        <th className='text-sm'>Episode</th>
                                        {/* <th className='text-sm'>Released</th> */}
                                    </tr>
                                    <tr>
                                        <td className='text-xs text-center'>{parseInt(singleEpisodes?.length / 60)}h {singleEpisodes?.length % 60}m</td>
                                        <td className='text-xs text-center'>{singleEpisodes?.episode_number}</td>
                                        {/* <td className='text-xs text-center'>{series?.release_year}</td> */}
                                    </tr>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default TvSeriesEpisodes;